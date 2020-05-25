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

import com.comentariosValoracion.demo.pojos.LugarTuristico;
import com.comentariosValoracion.demo.pojosResponse.LugarTuristicoResponse;

import com.comentariosValoracion.demo.pojosService.LugarTuristicoPojoService;


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
