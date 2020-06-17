package com.umss.dev.training.jtemplate.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.PhotoRegistration;
import com.umss.dev.training.jtemplate.common.dto.request.RestaurantRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto;
import com.umss.dev.training.jtemplate.common.dto.response.RestaurantResponseDto;
import com.umss.dev.training.jtemplate.exception.RestaurantNotFoundException;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurant;
import com.umss.dev.training.jtemplate.persistence.repository.PhotoRepository;
import com.umss.dev.training.jtemplate.persistence.repository.RestaurantRepository;

@Service
public class RestaurantService {

	private static RestaurantService instance;
	
	private RestaurantRepository restaurantRepository;
	private PhotoRepository photoRepository;
	private ModelMapper modelMapper;
	private PhotoService photoService;

	public RestaurantService(RestaurantRepository restaurantRepository, PhotoRepository photoRepository, ModelMapper modelMapper) {
		this.restaurantRepository = restaurantRepository;
		this.photoRepository = photoRepository;
		this.modelMapper = modelMapper;
		this.photoService = new PhotoService(photoRepository, modelMapper);
		instance = this;
	}

	public static RestaurantService getInstance(){
		return instance;
	}

	public List<Restaurant> getAll() {
		return restaurantRepository.findAll();
	}

	public RestaurantResponseDto findById(int id) {
		Restaurant res = restaurantRepository.findById(id).orElse(null);
		if (res == null) {
			String message = "El restaurante con ID=%s no fue encontrado";
			throw new RestaurantNotFoundException(String.format(message, id));
		}
		
		Set<PhotoResponseDto> setPhoto = new HashSet<>(photoRepository.getCarouselPhotos(id));
		setPhoto.addAll(photoRepository.getHomePhotos(id));
		
		List<PhotoResponseDto> listPhoto = new ArrayList<>(setPhoto);

		RestaurantResponseDto response = modelMapper.map(res, RestaurantResponseDto.class);
		response.setPhotos(listPhoto);
        return response;
	}
	
	public  Iterable<Restaurant> filterByReviewValue(double reviewValue) {
		List<Restaurant> allUsersResponse = restaurantRepository.findAll()
		.stream()
		.sorted(Comparator.comparing(Restaurant::getQualification).reversed())
		.filter(r -> r.getQualification() <= reviewValue)
		.map(usr -> {
			Restaurant response = modelMapper.map(usr, Restaurant.class);
			return response;
		})
		.collect(Collectors.toList());
		return allUsersResponse;
	}
	
	public RestaurantResponseDto save(RestaurantRegistration requestRestaurant) {
		Restaurant restaurant = modelMapper.map(requestRestaurant, Restaurant.class);
		restaurant = restaurantRepository.save(restaurant);
		
		RestaurantResponseDto response = modelMapper.map(restaurant, RestaurantResponseDto.class);
		
		List<PhotoRegistration> listPhotos = requestRestaurant.getPhotos();
		if(listPhotos != null) {
			List<PhotoResponseDto> listResponse = photoService.saveAll(listPhotos, restaurant);
			response.setPhotos(listResponse);
		}
		
        return response;
    }
	
	public PhotoResponseDto savePhoto(int id, PhotoRegistration requestPhoto) {
		Restaurant res = restaurantRepository.findById(id).orElse(null);
		if (res == null) {
			String message = "El restaurante con ID=%s no fue encontrado";
			throw new RestaurantNotFoundException(String.format(message, id));
		}
		PhotoResponseDto response = photoService.save(requestPhoto, res);
		return response;
	}
	
	public List<String> getRestaurantGallery(int id) {
		Restaurant res = restaurantRepository.findById(id).orElse(null);
		if (res == null) {
			String message = "El restaurante con ID=%s no fue encontrado";
			throw new RestaurantNotFoundException(String.format(message, id));
		}
		List<String> restaurantGallery = photoService.getRestaurantGallery(id);
		return restaurantGallery;
	}
}