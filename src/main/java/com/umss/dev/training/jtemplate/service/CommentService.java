package com.umss.dev.training.jtemplate.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.umss.dev.training.jtemplate.exception.DtoNotFoundException;
import com.umss.dev.training.jtemplate.persistence.domain.Comment;
import com.umss.dev.training.jtemplate.persistence.repository.CommentRepository;
import com.umss.dev.training.jtemplate.common.dto.response.CommentResponse;
import com.umss.dev.training.jtemplate.persistence.domain.VisitDate;


import java.util.*;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;


import org.springframework.beans.factory.annotation.Autowired;


@Service
public class CommentService {
	
@Autowired
private CommentRepository comentarioRepository;
private ModelMapper modelMapper;

public CommentService(CommentRepository comentRepository, ModelMapper modelMapper) {
    this.comentarioRepository = comentRepository;
    this.modelMapper = modelMapper;
   
}

public Iterable<CommentResponse> getAll(){
	List<CommentResponse> allUsersResponse = comentarioRepository.findAll()
			.stream()
			.sorted(Comparator.comparing(Comment::getCommentId))
			.map(comnt->{
				
				CommentResponse response = modelMapper.map(comnt, CommentResponse.class);
				
				
				response.setCommentId(comnt.getCommentId());
			
				return response;
	})    
      		.collect(Collectors.toList());

return allUsersResponse;
	
}

public CommentResponse getById(Integer comntId) {

	Comment comentAct = comentarioRepository.findById(comntId).orElse(null);

    if (null == comentAct) {
        
        throw new DtoNotFoundException(CommentResponse.class.toString(), comntId);
    }
    
    CommentResponse foundComnt = modelMapper.map(comentAct, CommentResponse.class);
    
    foundComnt.setCommentId(comentAct.getCommentId());
    
    return foundComnt;
}

public CommentResponse save(CommentResponse comnt) {
	
	Comment converted = modelMapper.map(comnt,Comment.class);
	 
	 Date actDate = new Date();
     
     converted.setActualDate(actDate);
     
     
     
     Comment persistedUser = comentarioRepository.save(converted);
    
     CommentResponse comentarioResponse = modelMapper.map(persistedUser, CommentResponse.class);
     
     return comentarioResponse;
}


	@Transactional(readOnly = true)
	public VisitDate[] getResponsesDates() {
		VisitDate f = new VisitDate();
   	return f.generateDates();
	
   }
 
}
