package com.umss.dev.training.jtemplate.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umss.dev.training.jtemplate.persistence.domain.Restaurante;


public interface RestauranteRepository  extends JpaRepository<Restaurante,Integer>{
}