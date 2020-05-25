package com.comentariosValoracion.demo.pojosRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.*;

import java.util.Optional;
import com.comentariosValoracion.demo.pojos.*;

@Repository
public interface UsuarioDaoRepository extends JpaRepository<Usuario,Integer> {

}
