package com.umss.dev.training.jtemplate.controller;
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

import com.umss.dev.training.jtemplate.persistence.domain.LugarTuristico;
import com.umss.dev.training.jtemplate.common.dto.response.LugarTuristicoResponse;
import com.umss.dev.training.jtemplate.service.LugarTuristicoPojoService;
import com.umss.dev.training.jtemplate.persistence.domain.FechaVisita;


@RestController
@RequestMapping("/lugarTuristico")
public class LugarTuristicoController {

	private LugarTuristicoPojoService lugarServ;
	
public LugarTuristicoController(LugarTuristicoPojoService service) {
		
		lugarServ = service;
	}
	
	@GetMapping()
	public Iterable<LugarTuristicoResponse> getLugares(){
		return lugarServ.getAll();
		
	}

	@GetMapping("/{id}")
	public LugarTuristicoResponse getComentario(@PathVariable (value = "id") Integer lugarId){
		
		return lugarServ.getById(lugarId); 
		
	}
	
	@PermitAll
	@PostMapping()
	public LugarTuristicoResponse createComentario(@Valid @RequestBody LugarTuristicoResponse lugar) {
		return lugarServ.save(lugar);
	}
}
