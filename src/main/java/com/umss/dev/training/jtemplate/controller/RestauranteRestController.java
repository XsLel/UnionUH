package com.umss.dev.training.jtemplate.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umss.dev.training.jtemplate.common.dto.request.RestauranteRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.RestauranteResponseDto;
import com.umss.dev.training.jtemplate.service.RestauranteService;


@RestController
@RequestMapping("/api/restaurantes")
public class RestauranteRestController {

private RestauranteService restauranteService;
	
	public RestauranteRestController(RestauranteService restauranteService) {
		this.restauranteService=restauranteService;
	}

    @GetMapping("/findAll")
    public Object findAll() {
        
        return null;
    }
    
    @PermitAll
    @GetMapping("/{id}")
    public ResponseEntity<RestauranteResponseDto> findById(@PathVariable("id")int id) {
    	RestauranteResponseDto restauranteResponse = restauranteService.findById(id);
        return ResponseEntity.ok(restauranteResponse);
    }

    
    @PostMapping("/save")
    public ResponseEntity<RestauranteResponseDto> save(@Valid @RequestBody final RestauranteRegistration restaurante) {
    	RestauranteResponseDto persistedRestaurante = restauranteService.save(restaurante);
        return ResponseEntity.status(HttpStatus.CREATED).body(persistedRestaurante);
    }

   
}