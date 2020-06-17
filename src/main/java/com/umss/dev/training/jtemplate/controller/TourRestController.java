package com.umss.dev.training.jtemplate.controller;

import javax.annotation.security.PermitAll;

import com.umss.dev.training.jtemplate.persistence.domain.Tour;
import com.umss.dev.training.jtemplate.service.TourService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tours")
public class TourRestController {
    private TourService service;

    public TourRestController(TourService service){
        this.service = service;
    }

    @PermitAll
    @GetMapping("/all")
    public ResponseEntity<Iterable<Tour>> findAll() {
        Iterable<Tour> restaurantsResponse = service.findAll();
        return ResponseEntity.ok(restaurantsResponse);
    }
}