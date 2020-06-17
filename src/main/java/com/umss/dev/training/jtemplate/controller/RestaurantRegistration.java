package com.umss.dev.training.jtemplate.controller;

import java.util.List;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import com.umss.dev.training.jtemplate.common.dto.request.RegisterRestaurantRequestDTO;
import com.umss.dev.training.jtemplate.common.dto.response.RegisterRestaurantDto;
import com.umss.dev.training.jtemplate.persistence.domain.RegisterRestaurant;
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
    public ResponseEntity<RegisterRestaurantDto> save(@Valid @RequestBody final RegisterRestaurantRequestDTO restaurantDto) {

        RegisterRestaurantDto persistedUser = service.save(restaurantDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(persistedUser);
    }
    @PermitAll
    @GetMapping
    public ResponseEntity<Object> findAll() {
        return ResponseEntity.ok(service.findAll());
    }
    
    @PermitAll
	@GetMapping("/modify") 
	public List<RegisterRestaurant> listRestaurants() {
		return service.getAll();
	}
 
    @PermitAll
	@GetMapping("/{id}")
	public ResponseEntity<RegisterRestaurantDto> findById(@PathVariable("id") Long id) {
		RegisterRestaurantDto restaurantResponse = service.findById(id);
		return ResponseEntity.ok(restaurantResponse);
	}


}