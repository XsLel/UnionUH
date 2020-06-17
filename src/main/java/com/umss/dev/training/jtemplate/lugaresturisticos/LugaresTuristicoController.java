package com.umss.dev.training.jtemplate.lugaresturisticos;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

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

	@GetMapping("/{id}")
	public Iterable<CalLTResponse> findById(@PathVariable("id") int id){
		return service.getByid(id);
	}

	@GetMapping("/mosaico/{id}")
	public Iterable<CalLTResponse> findByIdMosaico(@PathVariable("id") int id){
		return service.getByidMosaico(id);
	}

	@GetMapping("/count/{id}")
	public int getCount(@PathVariable("id") int id){
		int cont = 0;
		Long res = service.getCount();
		int aux = Integer.parseInt(res +"");
		if(id == 1){
			while(aux >= 5){
				cont ++;
				aux -= 5;
			}
			if(aux > 0){
				cont++;
			}
		}else{
			while(aux >= 6){
				cont ++;
				aux -= 6;
			}
			if(aux > 0){
				cont++;
			}
		}
		return cont;
	}

	@PostMapping()
	public LugaresTuristicoResponse save(@RequestBody final LugaresTuristicoResponse lt) {
		LugaresTuristicoResponse res = service.save(lt);
		return res;
	}
}
