package com.umss.dev.training.jtemplate.service;

import com.umss.dev.training.jtemplate.common.dto.request.RegisterRestaurantRequestDTO;
import com.umss.dev.training.jtemplate.common.dto.response.RegisterRestaurantDto;
import com.umss.dev.training.jtemplate.persistence.domain.RegisterRestaurant;
import com.umss.dev.training.jtemplate.persistence.repository.RegisterRestaurantRepository;

import org.modelmapper.ModelMapper;

public class RestaurantService {
    
    private ModelMapper modelMapper;
    private RegisterRestaurantRepository restaurantRepository;


    public RegisterRestaurantDto save(RegisterRestaurantRequestDTO requestRestaurant) {
		RegisterRestaurant restaurant = modelMapper.map(requestRestaurant, RegisterRestaurant.class);
		restaurant = restaurantRepository.save(restaurant);
		
		RegisterRestaurantDto response = modelMapper.map(restaurant, RegisterRestaurantDto.class);
		
        return response;
    }
	
}