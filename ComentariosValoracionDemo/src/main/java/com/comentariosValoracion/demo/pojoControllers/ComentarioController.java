package com.comentariosValoracion.demo.pojoControllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import com.comentariosValoracion.demo.pojos.Comentario;
import com.comentariosValoracion.demo.pojosResponse.ComentarioResponse;
import com.comentariosValoracion.demo.pojosService.*;
import com.comentariosValoracion.demo.pojos.FechaVisita;

@RestController
@RequestMapping("/api/comentario")
public class ComentarioController {
	//@Autowired
	
	private ComentarioPojoService comentServ;
	
	public ComentarioController(ComentarioPojoService service) {
		
		comentServ = service;
	}
	
	@GetMapping() // localhost:8585/comentario
	public Iterable<ComentarioResponse> getComentarios(){
		return comentServ.getAll();
		
	}

	@GetMapping("/{id}")//localhost:8585/comentario/1
	public ComentarioResponse getComentario(@PathVariable (value = "id") Integer comentId){
		
		return comentServ.getById(comentId); 
		
	}
	
	@PermitAll
	@PostMapping() ///localhost:8585/comentario
	public ComentarioResponse createComentario(@Valid @RequestBody ComentarioResponse coment) {
		return comentServ.save(coment);
	}
	
	
	
	  @PermitAll
	    @GetMapping("/fechas")
	    public FechaVisita[] getFechas() {
	    	
	    	return comentServ.getResponsesDates();
	    	
	    }
	

}
