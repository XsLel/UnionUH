package com.umss.dev.training.jtemplate.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.RestauranteRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.RestauranteResponseDto;
import com.umss.dev.training.jtemplate.exception.RestauranteNotFoundException;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurante;
import com.umss.dev.training.jtemplate.persistence.repository.RestauranteRepository;

@Service
public class RestauranteService {
	
	private RestauranteRepository restauranteRepository;
	private ModelMapper modelMapper;

	public RestauranteService(RestauranteRepository restauranteRepository, ModelMapper modelMapper) {
		this.restauranteRepository = restauranteRepository;
		this.modelMapper = modelMapper;
	}
	
	public  Object  findAll() {
        return null;
    }
	
	public RestauranteResponseDto findById(int id) {
		Restaurante restaurante = restauranteRepository.findById(id).orElse(null);
		if (restaurante == null) {
			String message = "El restaurante con ID=%s no fue encontrado";
			throw new RestauranteNotFoundException(String.format(message, id));
		}
		RestauranteResponseDto response = modelMapper.map(restaurante, RestauranteResponseDto.class);
        return response;
    }
	
	public RestauranteResponseDto save(RestauranteRegistration restauranteRequest) {
		Restaurante restaurante = modelMapper.map(restauranteRequest, Restaurante.class);
		
		restaurante = restauranteRepository.save(restaurante);
		RestauranteResponseDto response = modelMapper.map(restaurante, RestauranteResponseDto.class);
		
        return response;
    }
}