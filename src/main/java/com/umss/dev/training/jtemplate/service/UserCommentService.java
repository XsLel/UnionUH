package com.umss.dev.training.jtemplate.service;

import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.exception.DtoNotFoundException;
import com.umss.dev.training.jtemplate.persistence.domain.UserComment;
import com.umss.dev.training.jtemplate.persistence.repository.UserCommentRepository;
import com.umss.dev.training.jtemplate.common.dto.response.UserCommentResponse;



@Service
public class UserCommentService {

@Autowired
private UserCommentRepository usuarioRepository;
private ModelMapper modelMapper;


public UserCommentService(UserCommentRepository usuarioRepository, ModelMapper modelMapper) {
    this.usuarioRepository = usuarioRepository;
    this.modelMapper = modelMapper;
   
}

public Iterable<UserCommentResponse> getAll(){
	List<UserCommentResponse> allUsersResponse = usuarioRepository.findAll()
			.stream()
			.sorted(Comparator.comparing(UserComment::getUserId))
			.map(user->{
				
				UserCommentResponse response = modelMapper.map(user, UserCommentResponse.class);
				
				response.setUserId(user.getUserId());
				return response;
	})    
      		.collect(Collectors.toList());

return allUsersResponse;
	
}

public UserCommentResponse getById(Integer userId) {

    UserComment usuarioAct = usuarioRepository.findById(userId).orElse(null);

    if (null == usuarioAct) {
        
        throw new DtoNotFoundException(UserCommentResponse.class.toString(), userId);
    }
    UserCommentResponse foundUser = modelMapper.map(usuarioAct, UserCommentResponse.class);
    foundUser.setUserId(usuarioAct.getUserId());
    return foundUser;
}

public UserCommentResponse save(UserCommentResponse usuario) {
	
	 UserComment converted = modelMapper.map(usuario,UserComment.class);
	
     UserComment persistedUser = usuarioRepository.save(converted);
    
     UserCommentResponse usaurioResponse = modelMapper.map(persistedUser, UserCommentResponse.class);
   
     return usaurioResponse;
}


}
