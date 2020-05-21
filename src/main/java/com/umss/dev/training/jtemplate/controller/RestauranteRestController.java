package com.umss.dev.training.jtemplate.controller;

import javax.validation.Valid;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umss.dev.training.jtemplate.persistence.domain.Restaurante;


@RestController
@RequestMapping("/api/restaurantes")
public class RestauranteRestController {

	

    @GetMapping("/findAll")
    public Object findAll() {
        
        return null;
    }

   
    @GetMapping("/{id}")
    public Object findById(@PathVariable("id")int id) {
       return null;
    }

    
    @PostMapping("/save")
    public Object save(@Valid @RequestBody final Restaurante restaurante) {

        return null;
    }

   
}