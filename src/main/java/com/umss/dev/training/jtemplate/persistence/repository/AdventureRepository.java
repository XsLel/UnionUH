package com.umss.dev.training.jtemplate.persistence.repository;
import com.umss.dev.training.jtemplate.persistence.domain.Adventure;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdventureRepository extends JpaRepository<Adventure, Long> {
    
}
