package com.umss.dev.training.jtemplate.controller;


import javax.annotation.security.PermitAll;

import com.umss.dev.training.jtemplate.common.dto.response.EventResponseDto;
import com.umss.dev.training.jtemplate.service.EventService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/event")
public class EventController {
    
    private EventService service;

    public EventController(EventService service){
        this.service = service;
    }

    @PermitAll
    @GetMapping("/all")
    public ResponseEntity<Iterable<EventResponseDto>> findAll() {
        Iterable<EventResponseDto> eventResponse = service.findAll();
        return ResponseEntity.ok(eventResponse);
    }
}
    
    


