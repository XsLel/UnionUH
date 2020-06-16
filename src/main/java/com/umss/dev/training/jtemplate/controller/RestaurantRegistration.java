package com.umss.dev.training.jtemplate.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import com.umss.dev.training.jtemplate.common.dto.request.RegisterRestaurantRequestDTO;
import com.umss.dev.training.jtemplate.common.dto.response.RegisterRestaurantDto;
import com.umss.dev.training.jtemplate.service.RestaurantService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/restaurant")
public class RestaurantRegistration {
    

    private RestaurantService service;

    @PermitAll
    @PostMapping("/save")
    public ResponseEntity<RegisterRestaurantDto> save(@Valid @RequestBody final RegisterRestaurantRequestDTO restaurantDto) {

        RegisterRestaurantDto persistedUser = service.save(restaurantDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(persistedUser);
    }

}