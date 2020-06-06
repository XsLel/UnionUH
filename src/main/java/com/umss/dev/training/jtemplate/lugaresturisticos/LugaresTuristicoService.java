package com.umss.dev.training.jtemplate.lugaresturisticos;

import java.util.Collections;
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
	private CalificacionService service;
	private ModelMapper modelMapper;
	
	public LugaresTuristicoService(LugaresTuristicoRepository repo, CalificacionService service, ModelMapper modelMapper) {
		
		this.repo = repo;
		this.service = service;
		this.modelMapper = modelMapper;
	}
	
	public Iterable<CalLTResponse> getAll(){//get//read
		List<CalLTResponse> allResponse = repo.findAll()
				.stream()
				.sorted(Comparator.comparing(LugaresTuristico::getIdlugarturistico))
				.map(lt ->{
					
					CalLTResponse response = new CalLTResponse();
					response.setIdlugarturistico(lt.getIdlugarturistico());
					response.setDescripcionlugarturistico(lt.getDescripcionlugarturistico());
					response.setDireccionlugarturistico(lt.getDireccionlugarturistico());
					response.setFoto(lt.getFoto());
					response.setNombrelugarturistico(lt.getNombrelugarturistico());
					response.setPromedio(service.getPromedio(lt.getIdlugarturistico()));
					return response;
		})    
	      		.collect(Collectors.toList());

				 Collections.sort(allResponse);

	  return allResponse;
		
	}
	
	public LugaresTuristicoResponse save(LugaresTuristicoResponse ltRes) {
		LugaresTuristico aux = modelMapper.map(ltRes, LugaresTuristico.class);
		aux = repo.save(aux);
		LugaresTuristicoResponse response = modelMapper.map(aux, LugaresTuristicoResponse.class);
        return response;
    }
}
