package com.umss.dev.training.jtemplate.service;
import org.springframework.stereotype.Service;


import com.umss.dev.training.jtemplate.exception.DtoNoEncontradoException;
import com.umss.dev.training.jtemplate.persistence.domain.LugarTuristico;
import com.umss.dev.training.jtemplate.persistence.repository.LugarTuristicoDaoRepository;
import com.umss.dev.training.jtemplate.common.dto.response.LugarTuristicoResponse;

//import com.comentariosValoracion.demo.exception.DtoNoEncontradoException;
//import com.comentariosValoracion.demo.pojos.LugarTuristico;
//import com.comentariosValoracion.demo.pojosRepository.LugarTuristicoDaoRepository;
//import com.comentariosValoracion.demo.pojosResponse.LugarTuristicoResponse;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;


import org.springframework.beans.factory.annotation.Autowired;

@Service
public class LugarTuristicoPojoService {
	
	@Autowired
	private LugarTuristicoDaoRepository lugarTuristicoRepository;
	private ModelMapper modelMapper;
	private LugarTuristicoResponse lugarTuristicoResponse;

	public LugarTuristicoPojoService(LugarTuristicoDaoRepository lugarTuristicoRepository, ModelMapper modelMapper) {
	    this.lugarTuristicoRepository = lugarTuristicoRepository;
	    this.modelMapper = modelMapper;
	   
	}

	public Iterable<LugarTuristicoResponse> getAll(){
		List<LugarTuristicoResponse> allLugaresTuristicosResponse = lugarTuristicoRepository.findAll()
				.stream()
				.sorted(Comparator.comparing(LugarTuristico::getIdlugarturistico))
				.map(lugar->{
					System.out.println(lugar.toString());
					LugarTuristicoResponse response = modelMapper.map(lugar, LugarTuristicoResponse.class);
					System.out.println(response.toString());
					response.setIdlugarturistico(lugar.getIdlugarturistico());
					//response.setNombre(lugar.getNombre());
					//response.setDescripcion(lugar.getDescripcion());
					return response;
		})    
	      		.collect(Collectors.toList());

	return allLugaresTuristicosResponse;
		
	}
	
	public LugarTuristicoResponse getById(Integer lugarId) {

		LugarTuristico lugarAct = lugarTuristicoRepository.findById(lugarId).orElse(null);

	    if (null == lugarAct) {
	        
	        throw new DtoNoEncontradoException(LugarTuristicoResponse.class.toString(), lugarId);
	    }
	    LugarTuristicoResponse foundlugar = modelMapper.map(lugarAct, LugarTuristicoResponse.class);
	    foundlugar.setIdlugarturistico(lugarAct.getIdlugarturistico());
	    return foundlugar;
	}
	
	public LugarTuristicoResponse save(LugarTuristicoResponse lugar) {
		System.out.println(lugar.toString());
		LugarTuristico converted = modelMapper.map(lugar,LugarTuristico.class);
		 System.out.println(converted.toString());
		 LugarTuristico persistedLugar = lugarTuristicoRepository.save(converted);
	    
	     LugarTuristicoResponse lugarResponse = modelMapper.map(persistedLugar, LugarTuristicoResponse.class);
	   
	     return lugarResponse;
	}


}
