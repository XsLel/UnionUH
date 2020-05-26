package com.umss.dev.training.jtemplate.lugaresturisticos;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/lugaresturistico")
public class LugaresTuristicoController {
	
	private LugaresTuristicoService service;

	public LugaresTuristicoController(LugaresTuristicoService service) {
		
		this.service = service;
	}
	
	@GetMapping()
	public Iterable<LugaresTuristicoResponse> getLugares(){
		return service.getAll();
	}
}
