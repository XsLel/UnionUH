package com.umss.dev.training.jtemplate.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.FotoRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.FotoResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Foto;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurante;
import com.umss.dev.training.jtemplate.persistence.repository.FotoRepository;
import com.umss.dev.training.jtemplate.persistence.repository.RestauranteRepository;

@Service
public class FotoService {

	private FotoRepository fotoRepository;
	private ModelMapper modelMapper;
	
	public FotoService(FotoRepository fotoRepository, ModelMapper modelMapper) {
		this.fotoRepository = fotoRepository;
		this.modelMapper = modelMapper;
	}
	
	public FotoResponseDto save(FotoRegistration fotoRequest, Restaurante restaurant, RestauranteRepository restaurantRepository) {
		Foto photo = modelMapper.map(fotoRequest, Foto.class);
		photo.setRestaurant(restaurant);
		
		photo = fotoRepository.save(photo);
		
		FotoResponseDto response = modelMapper.map(photo, FotoResponseDto.class);
		
		return response;
	}
}
