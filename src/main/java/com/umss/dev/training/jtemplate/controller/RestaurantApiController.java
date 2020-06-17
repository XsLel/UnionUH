package com.umss.dev.training.jtemplate.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import com.umss.dev.training.jtemplate.persistence.domain.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.umss.dev.training.jtemplate.common.dto.request.PhotoRegistration;
import com.umss.dev.training.jtemplate.common.dto.request.RestaurantRegistration;
import com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto;
import com.umss.dev.training.jtemplate.common.dto.response.RestaurantResponseDto;
import com.umss.dev.training.jtemplate.service.RestaurantService;

import java.util.List;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantApiController {

	@Autowired
	private RestaurantService restaurantService;

	public RestaurantApiController(RestaurantService restaurantService) {
		this.restaurantService = restaurantService;
	}

	@PermitAll
	@GetMapping("/restaurants")
	public List<Restaurant> listRestaurants() {
		return restaurantService.getAll();
	}

	@PermitAll	
    @GetMapping("/filter/{reviewValue}")	
    public ResponseEntity<Iterable<Restaurant>> filterByReviewValue(@PathVariable("reviewValue") double reviewValue) {	
        Iterable<Restaurant> restaurantsResponse = restaurantService.filterByReviewValue(reviewValue);
		return ResponseEntity.ok(restaurantsResponse);
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