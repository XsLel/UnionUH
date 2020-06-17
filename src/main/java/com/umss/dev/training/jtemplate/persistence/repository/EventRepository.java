package com.umss.dev.training.jtemplate.persistence.repository;

import com.umss.dev.training.jtemplate.persistence.domain.Event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import org.springframework.data.jpa.repository.Query;
@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    
}
