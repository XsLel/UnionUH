package com.umss.dev.training.jtemplate.restaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping
public class RestauranteController {
	
	
	@Autowired
	private InterfaceRestauranteService service;
	
	@GetMapping("/listarRestaurante")
	public List<Restaurante> listarRestaurante(Model model) {
		List<Restaurante>restaurantes= service.listarRestaurante();
		model.addAttribute("restaurantes",restaurantes);
		return restaurantes;
	}

	
}
