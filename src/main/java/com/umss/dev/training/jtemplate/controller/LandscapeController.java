package com.umss.dev.training.jtemplate.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import com.umss.dev.training.jtemplate.common.dto.response.LandscapeResponse;
import com.umss.dev.training.jtemplate.service.LandscapeService;



@RestController
@RequestMapping("/lugarTuristico")
public class LandscapeController {

	private LandscapeService lugarServ;
	
public LandscapeController(LandscapeService service) {
		
		lugarServ = service;
	}
	
	@GetMapping()
	public Iterable<LandscapeResponse> getLugares(){
		return lugarServ.getAll();
		
	}

	@GetMapping("/{id}")
	public LandscapeResponse getComentario(@PathVariable (value = "id") Integer lugarId){
		
		return lugarServ.getById(lugarId); 
		
	}
	
	@PermitAll
	@PostMapping()
	public LandscapeResponse createComentario(@Valid @RequestBody LandscapeResponse lugar) {
		return lugarServ.save(lugar);
	}
}
