package com.umss.dev.training.jtemplate.lugaresturisticos;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/calificacion")
public class CalificacionController {
	
	private CalificacionService service;

	public CalificacionController(CalificacionService service) {
		
		this.service = service;
	}
	
	@GetMapping()
	public Iterable<CalificacionResponse> getCalificaciones(){
		return service.getAll();
	}
}
