package com.umss.dev.training.jtemplate.restaurant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class RestauranteService  implements InterfaceRestauranteService{

	
	@Autowired
	private InterfaceRestaurante datos;
	@Override
	public List<Restaurante> listarRestaurante() {
		
		return (List<Restaurante>)datos.findAll();
	}


}
