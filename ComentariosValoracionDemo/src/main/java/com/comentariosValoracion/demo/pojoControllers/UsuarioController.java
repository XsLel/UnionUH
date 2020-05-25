package com.comentariosValoracion.demo.pojoControllers;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.comentariosValoracion.demo.pojosResponse.UsuarioResponse;
import com.comentariosValoracion.demo.pojosService.UsuarioPojoService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
private UsuarioPojoService usaurioServ;
	
	public UsuarioController(UsuarioPojoService service) {
		
		usaurioServ = service;
	}
	
	@GetMapping()
	public Iterable<UsuarioResponse> getComentarios(){
		return usaurioServ.getAll();
		
	}

	@GetMapping("/{id}")
	public UsuarioResponse getComentario(@PathVariable (value = "id") Integer userId){
		
		return usaurioServ.getById(userId); 
		
	}
	
	@PermitAll
	@PostMapping()
	public UsuarioResponse createComentario(@Valid @RequestBody UsuarioResponse user) {
		return usaurioServ.save(user);
	}
	

}
