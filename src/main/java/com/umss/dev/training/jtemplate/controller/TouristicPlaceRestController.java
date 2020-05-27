package com.umss.dev.training.jtemplate.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.SQLException;
import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

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
            @Valid @RequestBody final TouristicPlaceRegistrationDto touristicPlaceReq) {

        ResponseEntity<TouristicPlaceResponseDto> response;

        try {
            BodyBuilder bodyBuilder;
            TouristicPlaceResponseDto touristicPlaceRes = service.save(touristicPlaceReq);
            long id = touristicPlaceRes.getId();
            try {
                bodyBuilder = ResponseEntity.created(new URI("/touristic-places/" + id));
            } catch (URISyntaxException ex) {
                bodyBuilder = ResponseEntity.status(HttpStatus.CREATED);
            }
            response = bodyBuilder.body(touristicPlaceRes);
        } catch (SQLException ex) {
            int errorCode = ex.getErrorCode();
            if (errorCode == 1062) // Duplicate entry for name field
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getLocalizedMessage(), ex);
            else
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, ex.getLocalizedMessage(), ex);
        }

        return response;
    }
}
