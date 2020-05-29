package com.umss.dev.training.jtemplate.persistence.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import java.util.Optional;
import com.umss.dev.training.jtemplate.persistence.domain.Comentario;


@Repository
public interface ComentarioDaoRepository extends JpaRepository<Comentario,Integer> {

}
