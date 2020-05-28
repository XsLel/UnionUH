package com.comentariosValoracion.demo.pojosService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.comentariosValoracion.demo.exception.DtoNoEncontradoException;
import com.comentariosValoracion.demo.pojos.Comentario;
import com.comentariosValoracion.demo.pojosRepository.ComentarioDaoRepository;
import com.comentariosValoracion.demo.pojosResponse.ComentarioResponse;
import com.comentariosValoracion.demo.pojos.FechaVisita;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;


import org.springframework.beans.factory.annotation.Autowired;


@Service
public class ComentarioPojoService {
	
@Autowired
private ComentarioDaoRepository comentarioRepository;
private ModelMapper modelMapper;
private ComentarioResponse comentarioResponse;

public ComentarioPojoService(ComentarioDaoRepository comentRepository, ModelMapper modelMapper) {
    this.comentarioRepository = comentRepository;
    this.modelMapper = modelMapper;
   
}

public Iterable<ComentarioResponse> getAll(){//get//read
	List<ComentarioResponse> allUsersResponse = comentarioRepository.findAll()
			.stream()
			.sorted(Comparator.comparing(Comentario::getIdcomentario))
			.map(comnt->{
				System.out.println(comnt.toString());
				
				ComentarioResponse response = modelMapper.map(comnt, ComentarioResponse.class);
				
				System.out.println(response.toString());
				
				response.setIdComentario(comnt.getIdcomentario());
				//response.setIdLugarTuristico(comnt.);
				return response;
	})    
      		.collect(Collectors.toList());

return allUsersResponse;
	
}

public ComentarioResponse getById(Integer comntId) {//get//read

    Comentario comentAct = comentarioRepository.findById(comntId).orElse(null);

    if (null == comentAct) {
        
        throw new DtoNoEncontradoException(ComentarioResponse.class.toString(), comntId);
    }
    
    ComentarioResponse foundComnt = modelMapper.map(comentAct, ComentarioResponse.class);
    
    foundComnt.setIdComentario(comentAct.getIdcomentario());
    
    return foundComnt;
}

public ComentarioResponse save(ComentarioResponse comnt) {//post//create
	System.out.println(comnt.toString());
	
	 Comentario converted = modelMapper.map(comnt,Comentario.class);
	 
	 System.out.println(converted.toString());
	 
	 
	 
	 
	 System.out.println("*****************fecha actual*******************");
	 
	 Date actDate = new Date();
     System.out.println(actDate.toString());
     converted.setFechaAct(actDate.toString());
     
     
     
     Comentario persistedUser = comentarioRepository.save(converted);
    
     ComentarioResponse comentarioResponse = modelMapper.map(persistedUser, ComentarioResponse.class);
     
     return comentarioResponse;
}


	@Transactional(readOnly = true)
	public FechaVisita[] getResponsesDates() {
   	FechaVisita f = new FechaVisita();
   	return f.generateDates();
	
   }
 
}
