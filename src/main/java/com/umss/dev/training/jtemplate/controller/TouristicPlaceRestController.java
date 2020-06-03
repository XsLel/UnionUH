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
@RequestMapping("/api/touristic-places")
public class TouristicPlaceRestController {

    private final TouristicPlaceService service;

    public TouristicPlaceRestController(TouristicPlaceService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<TouristicPlaceResponseDto> save(
            @Valid @RequestBody final TouristicPlaceRegistrationDto touristicPlaceReq) {

        ResponseEntity<TouristicPlaceResponseDto> response;
        BodyBuilder bodyBuilder;
        TouristicPlaceResponseDto touristicPlaceRes = service.save(touristicPlaceReq);
        long id = touristicPlaceRes.getId();
        try {
            bodyBuilder = ResponseEntity.created(new URI("/touristic-places/" + id));
        } catch (URISyntaxException ex) {
            bodyBuilder = ResponseEntity.status(HttpStatus.CREATED);
        }
        response = bodyBuilder.body(touristicPlaceRes);

        return response;
    }
}
