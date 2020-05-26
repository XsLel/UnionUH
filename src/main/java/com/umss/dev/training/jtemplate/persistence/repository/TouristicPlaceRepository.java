package com.umss.dev.training.jtemplate.persistence.repository;

import com.umss.dev.training.jtemplate.persistence.domain.TouristicPlace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TouristicPlaceRepository extends JpaRepository<TouristicPlace,Long> {

}