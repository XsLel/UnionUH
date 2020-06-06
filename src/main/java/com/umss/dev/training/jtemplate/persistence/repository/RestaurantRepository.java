package com.umss.dev.training.jtemplate.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umss.dev.training.jtemplate.persistence.domain.Restaurant;


public interface RestaurantRepository  extends JpaRepository<Restaurant,Integer>{
}