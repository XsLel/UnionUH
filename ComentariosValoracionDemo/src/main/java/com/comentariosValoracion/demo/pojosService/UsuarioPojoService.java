package com.comentariosValoracion.demo.pojosService;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.comentariosValoracion.demo.exception.DtoNoEncontradoException;
import com.comentariosValoracion.demo.pojos.Usuario;
import com.comentariosValoracion.demo.pojos.Usuario;
import com.comentariosValoracion.demo.pojosRepository.ComentarioDaoRepository;
import com.comentariosValoracion.demo.pojosRepository.UsuarioDaoRepository;
import com.comentariosValoracion.demo.pojosResponse.UsuarioResponse;
import com.comentariosValoracion.demo.pojosResponse.UsuarioResponse;
import com.comentariosValoracion.demo.pojosResponse.UsuarioResponse;

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
