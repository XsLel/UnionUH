package com.umss.dev.training.jtemplate.persistence.repository;

import com.umss.dev.training.jtemplate.persistence.domain.RegisterRestaurant;

import org.springframework.data.jpa.repository.JpaRepository;


public interface RegisterRestaurantRepository extends JpaRepository<RegisterRestaurant, Integer> {

}
