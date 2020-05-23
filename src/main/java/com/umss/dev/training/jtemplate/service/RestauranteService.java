package com.umss.dev.training.jtemplate.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.FotoRegistration;
import com.umss.dev.training.jtemplate.common.dto.request.RestauranteRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.FotoQuerySQL;
import com.umss.dev.training.jtemplate.common.dto.response.FotoResponseDto;
import com.umss.dev.training.jtemplate.common.dto.response.RestauranteResponseDto;
import com.umss.dev.training.jtemplate.exception.RestauranteNotFoundException;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurante;
import com.umss.dev.training.jtemplate.persistence.repository.FotoRepository;
import com.umss.dev.training.jtemplate.persistence.repository.RestauranteRepository;

@Service
public class RestauranteService {
	
	private RestauranteRepository restauranteRepository;
	private FotoRepository fotoRepository;
	private ModelMapper modelMapper;
	private FotoService fotoService;

	public RestauranteService(RestauranteRepository restauranteRepository, FotoRepository fotoRepository, ModelMapper modelMapper) {
		this.restauranteRepository = restauranteRepository;
		this.fotoRepository = fotoRepository;
		this.modelMapper = modelMapper;
		this.fotoService = new FotoService(fotoRepository, modelMapper);
	}
	
	public  Object  findAll() {
        return null;
    }
	
	public RestauranteResponseDto findById(int id) {
		Restaurante res = restauranteRepository.findById(id).orElse(null);
		if (res == null) {
			String message = "El restaurante con ID=%s no fue encontrado";
			throw new RestauranteNotFoundException(String.format(message, id));
		}
		List<FotoQuerySQL> carousel = fotoRepository.getCarouselPhotos(id);
		List<FotoQuerySQL> home = fotoRepository.getHomePhotos(id);
		home.addAll(carousel);
		Set<FotoQuerySQL> setFoto = new HashSet<>(home);
		List<FotoQuerySQL> listFoto = new ArrayList<>(setFoto);
		
		RestauranteResponseDto response = modelMapper.map(res, RestauranteResponseDto.class);
		response.addListFotoSQL(listFoto);
        return response;
    }
	
	public RestauranteResponseDto save(RestauranteRegistration restauranteRequest) {
		Restaurante restaurante = modelMapper.map(restauranteRequest, Restaurante.class);
		restaurante = restauranteRepository.save(restaurante);
		
		RestauranteResponseDto response = modelMapper.map(restaurante, RestauranteResponseDto.class);
		
		List<FotoRegistration> listPhotos = restauranteRequest.getPhotos();
		if(listPhotos != null) {
			List<FotoResponseDto> listResponse = new ArrayList<>();
			FotoRegistration registration;
			FotoResponseDto fotoResponse;
			while(!listPhotos.isEmpty()) {
				registration = listPhotos.remove(0);
				fotoResponse = fotoService.save(registration, restaurante, restauranteRepository);
				listResponse.add(fotoResponse);
			}
			response.setPhotos(listResponse);
		}
		
        return response;
    }
	
	public FotoResponseDto savePhoto(int id, FotoRegistration fotoRequest) {
		Restaurante res = restauranteRepository.findById(id).orElse(null);
		if (res == null) {
			String message = "El restaurante con ID=%s no fue encontrado";
			throw new RestauranteNotFoundException(String.format(message, id));
		}
		FotoResponseDto response = fotoService.save(fotoRequest, res, restauranteRepository);
		return response;
	}
}