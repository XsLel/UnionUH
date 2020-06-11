package com.umss.dev.training.jtemplate.lugaresturisticos;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public Iterable<CalLTResponse> getLugares(){
		return service.getAll();
	}
	
	@PostMapping()
	public LugaresTuristicoResponse save(@RequestBody final LugaresTuristicoResponse lt) {
		LugaresTuristicoResponse res = service.save(lt);
		return res;
	}

	@GetMapping("/count")
	public Long getCount(){
		return service.getCount();
	}


}
