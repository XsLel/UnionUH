package com.umss.dev.training.jtemplate.controller;
import javax.annotation.security.PermitAll;

import com.umss.dev.training.jtemplate.common.dto.response.AdventureResponseDto;
import com.umss.dev.training.jtemplate.service.AdventureService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/adventure")

public class AdventureRestController {
    
 
    private AdventureService service;

    public AdventureRestController(AdventureService service){
        this.service = service;
    }

    @PermitAll
    @GetMapping("/all")
    public ResponseEntity<Iterable<AdventureResponseDto>> findAll() {
        Iterable<AdventureResponseDto> adventureResponse = service.findAll();
        return ResponseEntity.ok(adventureResponse);
    }
}
