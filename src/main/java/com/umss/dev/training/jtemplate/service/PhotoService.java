package com.umss.dev.training.jtemplate.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.PhotoRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Photo;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurant;
import com.umss.dev.training.jtemplate.persistence.repository.PhotoRepository;

@Service
public class PhotoService {

	private PhotoRepository photoRepository;
	private ModelMapper modelMapper;
	
	public PhotoService(PhotoRepository photoRepository, ModelMapper modelMapper) {
		this.photoRepository = photoRepository;
		this.modelMapper = modelMapper;
	}
	
	public PhotoResponseDto save(PhotoRegistration requestPhoto, Restaurant restaurant) {
		Photo photo = modelMapper.map(requestPhoto, Photo.class);
		photo.setRestaurant(restaurant);
		
		photo = photoRepository.save(photo);
		
		PhotoResponseDto response = modelMapper.map(photo, PhotoResponseDto.class);
		
		return response;
	}
	
	public List<PhotoResponseDto> saveAll(List<PhotoRegistration> listRequestPhoto, Restaurant restaurant) {
		List<Photo> photos = listRequestPhoto
				.stream()
				.map( request -> {
					Photo photo = modelMapper.map(request, Photo.class);
					photo.setRestaurant(restaurant);
					return photo;
				})
				.collect(Collectors.toList());
		photos = photoRepository.saveAll(photos);
		List<PhotoResponseDto> response = photos
				.stream()
				.map( photo -> {
					PhotoResponseDto res = modelMapper.map(photo, PhotoResponseDto.class);
					return res;
				})
				.collect(Collectors.toList());
		return response;
	}

	public List<PhotoResponseDto> getPhotoByIdRestaurant(int idRestaurant) {
		return photoRepository.getByRestaurant(idRestaurant);
	}

}
