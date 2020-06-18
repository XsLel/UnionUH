package com.umss.dev.training.jtemplate.persistence.repository;

import com.umss.dev.training.jtemplate.persistence.domain.Accommodation;

import org.springframework.data.jpa.repository.JpaRepository;


public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {
    
}
