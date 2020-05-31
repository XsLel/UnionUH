package com.umss.dev.training.jtemplate.service;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.umss.dev.training.jtemplate.common.dto.request.FoodRegistrationDto;
import com.umss.dev.training.jtemplate.common.dto.response.FoodResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Food;
import com.umss.dev.training.jtemplate.persistence.repository.FoodRepository;


@Service
public class FoodService {
	
	
	private FoodRepository userRepository;
	private ModelMapper modelMapper;
	private BCryptPasswordEncoder passwordEncoder;

 

	public FoodService(FoodRepository userRepository, ModelMapper modelMapper) {
		
		this.userRepository = userRepository;
		this.modelMapper = modelMapper;
	}
	


	public FoodResponseDto save(FoodRegistrationDto userDto) {
		Food converted = modelMapper.map(userDto, Food.class);
		
		
        Food persistedUser = userRepository.save(converted);
        FoodResponseDto userResponse = modelMapper.map(persistedUser, FoodResponseDto.class);
        
        return userResponse;
	}
	
	/**
	 * It removes a specified user from DB.
	 * @param userId the user identifier
	 */
	public void delete(Long userId) {
		userRepository.deleteById(userId);
	}
}
