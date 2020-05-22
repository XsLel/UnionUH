package com.umss.dev.training.jtemplate.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.umss.dev.training.jtemplate.persistence.domain.Foto;
import com.umss.dev.training.jtemplate.persistence.domain.Restaurante;

public interface FotoRepository extends JpaRepository<Foto,Integer> {

}
