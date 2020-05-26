package com.umss.dev.training.jtemplate.controller;

import java.net.URI;
import java.net.URISyntaxException;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umss.dev.training.jtemplate.common.dto.request.TouristicPlaceRegistrationDto;
import com.umss.dev.training.jtemplate.common.dto.response.TouristicPlaceResponseDto;
import com.umss.dev.training.jtemplate.service.TouristicPlaceService;

@RestController
@RequestMapping("/touristic-places")
public class TouristicPlaceRestController {

    private final TouristicPlaceService service;

    public TouristicPlaceRestController(TouristicPlaceService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<TouristicPlaceResponseDto> save(
            @Valid @RequestBody final TouristicPlaceRegistrationDto touristicPlaceDto) {

        TouristicPlaceResponseDto touristicPlace = service.save(touristicPlaceDto);
        long id = touristicPlace.getId();
        BodyBuilder bodyBuilder;
        try {
            bodyBuilder = ResponseEntity.created(new URI("/touristic-places/" + id));
        } catch (URISyntaxException e) {
            bodyBuilder = ResponseEntity.status(HttpStatus.CREATED);
        }
        return bodyBuilder.body(touristicPlace);
    }
}