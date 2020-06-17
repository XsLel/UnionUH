package com.umss.dev.training.jtemplate.lugaresturisticos;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.ArrayList;

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

	public List<CalLTResponse> getAllList(){
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
					response.setLink(lt.getLink());
					response.setPromedio(service.getPromedio(lt.getIdlugarturistico()));
					return response;
		})    
	      		.collect(Collectors.toList());
		Collections.sort(allResponse,Collections.reverseOrder());
	  return allResponse;
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
					response.setLink(lt.getLink());
					response.setPromedio(service.getPromedio(lt.getIdlugarturistico()));
					return response;
		})    
	      		.collect(Collectors.toList());
		Collections.sort(allResponse,Collections.reverseOrder());
	  return allResponse;
	}

    public Iterable<CalLTResponse> getByidMosaico(int id){
		List<CalLTResponse> allResponse = getAllList();
		List<CalLTResponse> res = new ArrayList<>();
		int i = id;
		while(i < id + 6  && i < allResponse.size()){
			res.add(allResponse.get(i));
			i++;
		}
		return res;
	}

	public Iterable<CalLTResponse> getByid(int id){
		List<CalLTResponse> allResponse = getAllList();
		List<CalLTResponse> res = new ArrayList<>();
		int i = id;
		while(i < id + 5 && i < allResponse.size()){
			res.add(allResponse.get(i));
			i++;
		}
		return res;
	}

	public Long getCount(){
		Long aux = repo.count();
		return aux;
	}
	
	public LugaresTuristicoResponse save(LugaresTuristicoResponse ltRes) {
		LugaresTuristico aux = modelMapper.map(ltRes, LugaresTuristico.class);
		aux = repo.save(aux);
		LugaresTuristicoResponse response = modelMapper.map(aux, LugaresTuristicoResponse.class);
        return response;
    }
}
