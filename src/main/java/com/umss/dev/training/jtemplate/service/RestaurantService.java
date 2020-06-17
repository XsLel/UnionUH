package com.umss.dev.training.jtemplate.service;

import com.umss.dev.training.jtemplate.common.dto.request.RegisterRestaurantRequestDTO;
import com.umss.dev.training.jtemplate.common.dto.response.RegisterRestaurantDto;
import com.umss.dev.training.jtemplate.persistence.domain.RegisterRestaurant;
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
    public RegisterRestaurantDto save(RegisterRestaurantRequestDTO requestRestaurant) {
		RegisterRestaurant restaurant = modelMapper.map(requestRestaurant, RegisterRestaurant.class);
		restaurant = restaurantRepository.save(restaurant);
		
		RegisterRestaurantDto response = modelMapper.map(restaurant, RegisterRestaurantDto.class);
		
        return response;
    }
    public  Iterable<RegisterRestaurant> findAll() {
        List<RegisterRestaurant> allUsersResponse = restaurantRepository.findAll()
                                            .stream()
                                            .sorted(Comparator.comparing(RegisterRestaurant::getnameRestaurant))

                                            .collect(Collectors.toList());

        return allUsersResponse;
    }

    public List<RegisterRestaurant> getAll() {
		return restaurantRepository.findAll();
    }
    

	public RegisterRestaurantDto findById(long id) {
        RegisterRestaurant res = restaurantRepository.findById(id).orElse(null);
        
		RegisterRestaurantDto response = modelMapper.map(res, RegisterRestaurantDto.class);
        return response;
	}

}
