package com.umss.dev.training.jtemplate.lugaresturisticos;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalificacionService {
	
	@Autowired
	private CalificacionRepository repo;
	private ModelMapper modelMapper;
	
	public CalificacionService(CalificacionRepository repo, ModelMapper modelMapper) {
		
		this.repo = repo;
		this.modelMapper = modelMapper;
	}
	
	public Iterable<CalificacionResponse> getAll(){//get//read
		List<CalificacionResponse> allResponse = repo.findAll()
				.stream()
				.sorted(Comparator.comparing(Calificacion::getIdcalificacion))
				.map(cal ->{
					
					CalificacionResponse response = modelMapper.map(cal, CalificacionResponse.class);
					response.setIdcalificación(cal.getIdcalificacion());
					return response;
		})    
	      		.collect(Collectors.toList());

	  return allResponse;
		
	}
	
	public Long getPromedio(Long id) {
		Long res = 0L;
		Long cont = 0L;
		List<Calificacion> lista = repo.findAll();
		for(Calificacion item : lista) {
			if(item.getIdlugarturistico() == id) {
				res += item.getScore();
				cont++;
			}
		}
		return res/cont;
	}
}
