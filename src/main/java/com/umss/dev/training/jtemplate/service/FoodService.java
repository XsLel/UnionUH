package com.umss.dev.training.jtemplate.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.FoodRegistrationDto;
import com.umss.dev.training.jtemplate.common.dto.response.FoodResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Food;
import com.umss.dev.training.jtemplate.persistence.repository.FoodRepository;


@Service
public class FoodService {
	
	
	private FoodRepository userRepository;
	private ModelMapper modelMapper;
	//private BCryptPasswordEncoder passwordEncoder;

 

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
	public Iterable<FoodResponseDto> findAllSortedByName() {
		List<FoodResponseDto> allUsersResponse = userRepository.findAll().stream()
												.sorted(Comparator.comparing(Food::getName))
												.map(usr ->{
													FoodResponseDto response = modelMapper.map(usr, FoodResponseDto.class);
													return response;
												})
												.collect(Collectors.toList());
										
		
		return allUsersResponse;
	}
	
}
