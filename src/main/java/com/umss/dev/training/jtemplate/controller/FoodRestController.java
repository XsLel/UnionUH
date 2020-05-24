package com.umss.dev.training.jtemplate.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umss.dev.training.jtemplate.common.dto.request.FoodRegistrationDto;
import com.umss.dev.training.jtemplate.common.dto.response.FoodResponseDto;
import com.umss.dev.training.jtemplate.service.FoodService;



@RestController
@RequestMapping("/api/food")
public class FoodRestController {
	
	@Autowired
	private FoodService userService;
	
	@GetMapping
	
	public String comida() {
		
		return "index";
		
	}
	
	@PostMapping
	public ResponseEntity<FoodResponseDto> save(@Valid @RequestBody final FoodRegistrationDto foodDto) {
		FoodResponseDto persistedUser = userService.save(foodDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(persistedUser);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable("id") final Long userId) {
		userService.delete(userId);
		return ResponseEntity.noContent().build();
	}
	
}