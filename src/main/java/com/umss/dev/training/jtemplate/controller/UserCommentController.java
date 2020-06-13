package com.umss.dev.training.jtemplate.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umss.dev.training.jtemplate.common.dto.response.UserCommentResponse;
import com.umss.dev.training.jtemplate.service.UserCommentService;

@RestController
@RequestMapping("/usuario")
public class UserCommentController {
	
private UserCommentService usaurioServ;
	
	public UserCommentController(UserCommentService service) {
		
		usaurioServ = service;
	}
	
	@GetMapping()
	public Iterable<UserCommentResponse> getComentarios(){
		return usaurioServ.getAll();
		
	}

	@GetMapping("/{id}")
	public UserCommentResponse getComentario(@PathVariable (value = "id") Integer userId){
		
		return usaurioServ.getById(userId); 
		
	}

	
	@PermitAll
	@PostMapping()
	public UserCommentResponse createComentario(@Valid @RequestBody UserCommentResponse user) {
		return usaurioServ.save(user);
	}
	

}
