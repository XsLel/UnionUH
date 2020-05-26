package com.umss.dev.training.jtemplate.lugaresturisticos;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LugaresTuristicoService {

	@Autowired
	private LugaresTuristicoRepository repo;
	private ModelMapper modelMapper;
	
	public LugaresTuristicoService(LugaresTuristicoRepository repo, ModelMapper modelMapper) {
		
		this.repo = repo;
		this.modelMapper = modelMapper;
	}
	
	public Iterable<LugaresTuristicoResponse> getAll(){//get//read
		List<LugaresTuristicoResponse> allResponse = repo.findAll()
				.stream()
				.sorted(Comparator.comparing(LugaresTuristico::getIdlugarturistico))
				.map(lt ->{
					
					LugaresTuristicoResponse response = modelMapper.map(lt, LugaresTuristicoResponse.class);
					response.setIdlugarturistico(lt.getIdlugarturistico());
					return response;
		})    
	      		.collect(Collectors.toList());

	  return allResponse;
		
	}
	
}
