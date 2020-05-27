package com.umss.dev.training.jtemplate.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umss.dev.training.jtemplate.common.dto.request.PhotoRegistration;
import com.umss.dev.training.jtemplate.common.dto.request.RestaurantRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto;
import com.umss.dev.training.jtemplate.common.dto.response.RestaurantResponseDto;
import com.umss.dev.training.jtemplate.service.RestaurantService;

@RestController
@RequestMapping("/api/restaurantes")
public class RestaurantRestController {

	@Autowired
	private RestaurantService restaurantService;

	public RestaurantRestController(RestaurantService restaurantService) {
		this.restaurantService = restaurantService;
	}

	@PermitAll
	@GetMapping("/{id}")
	public ResponseEntity<RestaurantResponseDto> findById(@PathVariable("id") int id) {
		RestaurantResponseDto restaurantResponse = restaurantService.findById(id);
		return ResponseEntity.ok(restaurantResponse);
	}

	@PostMapping("/save")
	public ResponseEntity<RestaurantResponseDto> save(@Valid @RequestBody final RestaurantRegistration restaurant) {
		RestaurantResponseDto persistedRestaurant = restaurantService.save(restaurant);
		return ResponseEntity.status(HttpStatus.CREATED).body(persistedRestaurant);
	}
	
	@PostMapping("/{id}/photos")
	public ResponseEntity<PhotoResponseDto> savePhoto(@PathVariable("id") int id, @Valid @RequestBody final PhotoRegistration photo) {
		PhotoResponseDto persistedPhoto = restaurantService.savePhoto(id,photo);
		return ResponseEntity.status(HttpStatus.CREATED).body(persistedPhoto);
	}
}