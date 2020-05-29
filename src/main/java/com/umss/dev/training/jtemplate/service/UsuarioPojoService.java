package com.umss.dev.training.jtemplate.service;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.exception.DtoNoEncontradoException;
import com.umss.dev.training.jtemplate.persistence.domain.Usuario;
import com.umss.dev.training.jtemplate.persistence.repository.ComentarioDaoRepository;
import com.umss.dev.training.jtemplate.persistence.repository.UsuarioDaoRepository;
import com.umss.dev.training.jtemplate.common.dto.response.UsuarioResponse;


//import com.comentariosValoracion.demo.exception.DtoNoEncontradoException;
//import com.comentariosValoracion.demo.pojos.Usuario;
//import com.comentariosValoracion.demo.pojosRepository.ComentarioDaoRepository;
//import com.comentariosValoracion.demo.pojosRepository.UsuarioDaoRepository;
//import com.comentariosValoracion.demo.pojosResponse.UsuarioResponse;


@Service
public class UsuarioPojoService {

@Autowired
private UsuarioDaoRepository usuarioRepository;
private ModelMapper modelMapper;
private UsuarioResponse comentarioResponse;

public UsuarioPojoService(UsuarioDaoRepository usuarioRepository, ModelMapper modelMapper) {
    this.usuarioRepository = usuarioRepository;
    this.modelMapper = modelMapper;
   
}

public Iterable<UsuarioResponse> getAll(){
	List<UsuarioResponse> allUsersResponse = usuarioRepository.findAll()
			.stream()
			.sorted(Comparator.comparing(Usuario::getIdusuario))
			.map(user->{
				System.out.println(user.toString());
				UsuarioResponse response = modelMapper.map(user, UsuarioResponse.class);
				System.out.println(response.toString());
				response.setIdusuario(user.getIdusuario());
				return response;
	})    
      		.collect(Collectors.toList());

return allUsersResponse;
	
}

public UsuarioResponse getById(Integer userId) {

    Usuario usuarioAct = usuarioRepository.findById(userId).orElse(null);

    if (null == usuarioAct) {
        
        throw new DtoNoEncontradoException(UsuarioResponse.class.toString(), userId);
    }
    UsuarioResponse foundUser = modelMapper.map(usuarioAct, UsuarioResponse.class);
    foundUser.setIdusuario(usuarioAct.getIdusuario());
    return foundUser;
}

public UsuarioResponse save(UsuarioResponse usuario) {
	System.out.println(usuario.toString());
	 Usuario converted = modelMapper.map(usuario,Usuario.class);
	 System.out.println(converted.toString());
     Usuario persistedUser = usuarioRepository.save(converted);
    
     UsuarioResponse usaurioResponse = modelMapper.map(persistedUser, UsuarioResponse.class);
   
     return usaurioResponse;
}


}
