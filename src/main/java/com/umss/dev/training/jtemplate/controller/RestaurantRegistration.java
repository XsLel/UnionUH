package com.umss.dev.training.jtemplate.controller;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;


import com.umss.dev.training.jtemplate.common.dto.request.RestaurantRequestDTO;
import com.umss.dev.training.jtemplate.common.dto.response.RestaurantDto;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurant;

import com.umss.dev.training.jtemplate.service.RestaurantService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantRegistration {
    
@Autowired
    private RestaurantService service;
    
    public RestaurantRegistration(RestaurantService service) {
        this.service = service;
    }
    @PermitAll
    @PostMapping("/save")
    public ResponseEntity<RestaurantDto> save(@Valid @RequestBody final RestaurantRequestDTO restaurantDto) {

        RestaurantDto persistedUser = service.save(restaurantDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(persistedUser);
    }
    @PermitAll
    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseEntity.ok(service.findAll());
    }
    
    @PermitAll
	@GetMapping("/modify") 
	public List<Restaurant> listRestaurants() {
		return service.getAll();
	} 

    @PermitAll
	@GetMapping("/{id}")
	public ResponseEntity<RestaurantDto> findById(@PathVariable("id") Long id) {
		RestaurantDto restaurantResponse = service.findById(id);
		return ResponseEntity.ok(restaurantResponse);
	}


}