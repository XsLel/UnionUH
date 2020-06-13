package com.umss.dev.training.jtemplate.service;
import org.springframework.stereotype.Service;


import com.umss.dev.training.jtemplate.exception.DtoNotFoundException;
import com.umss.dev.training.jtemplate.persistence.domain.Landscape;
import com.umss.dev.training.jtemplate.persistence.repository.LandscapeRepository;
import com.umss.dev.training.jtemplate.common.dto.response.LandscapeResponse;

//import com.comentariosValoracion.demo.exception.DtoNoEncontradoException;
//import com.comentariosValoracion.demo.pojos.LugarTuristico;
//import com.comentariosValoracion.demo.pojosRepository.LugarTuristicoDaoRepository;
//import com.comentariosValoracion.demo.pojosResponse.LugarTuristicoResponse;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;


import org.springframework.beans.factory.annotation.Autowired;

@Service
public class LandscapeService {
	
	@Autowired
	private LandscapeRepository lugarTuristicoRepository;
	private ModelMapper modelMapper;

	public LandscapeService(LandscapeRepository lugarTuristicoRepository, ModelMapper modelMapper) {
	    this.lugarTuristicoRepository = lugarTuristicoRepository;
	    this.modelMapper = modelMapper;
	   
	}

	public Iterable<LandscapeResponse> getAll(){
		List<LandscapeResponse> allLugaresTuristicosResponse = lugarTuristicoRepository.findAll()
				.stream()
				.sorted(Comparator.comparing(Landscape::getLandscapeId))
				.map(lugar->{
					
					LandscapeResponse response = modelMapper.map(lugar, LandscapeResponse.class);
				
					response.setLandscapeId(lugar.getLandscapeId());
					
					return response;
		})    
	      		.collect(Collectors.toList());

	return allLugaresTuristicosResponse;
		
	}
	
	public LandscapeResponse getById(Integer lugarId) {

		Landscape lugarAct = lugarTuristicoRepository.findById(lugarId).orElse(null);

	    if (null == lugarAct) {
	        
	        throw new DtoNotFoundException(LandscapeResponse.class.toString(), lugarId);
	    }
	    LandscapeResponse foundlugar = modelMapper.map(lugarAct, LandscapeResponse.class);
	    foundlugar.setLandscapeId(lugarAct.getLandscapeId());
	    return foundlugar;
	}
	
	public LandscapeResponse save(LandscapeResponse lugar) {
		
		Landscape converted = modelMapper.map(lugar,Landscape.class);
		 
		 Landscape persistedLugar = lugarTuristicoRepository.save(converted);
	    
	     LandscapeResponse lugarResponse = modelMapper.map(persistedLugar, LandscapeResponse.class);
	   
	     return lugarResponse;
	}


}
