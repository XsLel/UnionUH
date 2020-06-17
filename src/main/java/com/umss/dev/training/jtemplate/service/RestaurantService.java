package com.umss.dev.training.jtemplate.service;

import com.umss.dev.training.jtemplate.common.dto.request.RestaurantRequestDTO;
import com.umss.dev.training.jtemplate.common.dto.response.RestaurantDto;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurant;
import com.umss.dev.training.jtemplate.persistence.repository.RegisterRestaurantRepository;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
@Service
public class RestaurantService {
    
    private ModelMapper modelMapper;
    private RegisterRestaurantRepository restaurantRepository;

    public RestaurantService(RegisterRestaurantRepository restaurantRepository, ModelMapper modelMapper){
        this.restaurantRepository = restaurantRepository;
        this.modelMapper = modelMapper;
    }
    public RestaurantDto save(RestaurantRequestDTO requestRestaurant) {
		Restaurant restaurant = modelMapper.map(requestRestaurant, Restaurant.class);
		restaurant = restaurantRepository.save(restaurant);
		
		RestaurantDto response = modelMapper.map(restaurant, RestaurantDto.class);
		
        return response;
    }
    public  Iterable<Restaurant> findAll() {
        List<Restaurant> allUsersResponse = restaurantRepository.findAll()
                                            .stream()
                                            .sorted(Comparator.comparing(Restaurant::getnameRestaurant))

                                            .collect(Collectors.toList());

        return allUsersResponse;
    }

    public List<Restaurant> getAll() {
		return restaurantRepository.findAll();
    }
    

	public RestaurantDto findById(long id) {
        Restaurant res = restaurantRepository.findById(id).orElse(null);
        
		RestaurantDto response = modelMapper.map(res, RestaurantDto.class);
        return response;
	}

}
