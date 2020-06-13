package com.umss.dev.training.jtemplate.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;
import com.umss.dev.training.jtemplate.common.dto.response.CommentResponse;
import com.umss.dev.training.jtemplate.service.CommentService;

import com.umss.dev.training.jtemplate.persistence.domain.VisitDate;


@RestController
@RequestMapping("/commentary")
public class CommentController {
	
	
	private CommentService comentServ;
	
	public CommentController(CommentService service) {
		
		comentServ = service;
	}
	
	@GetMapping()
	public Iterable<CommentResponse> getComments(){
		return comentServ.getAll();
		
	}

	@GetMapping("/{id}")
	public CommentResponse getCommentary(@PathVariable (value = "id") Integer comentId){
		
		return comentServ.getById(comentId); 
		
	}
	
	@PermitAll
	@PostMapping() 
	public CommentResponse createCommentary(@Valid @RequestBody CommentResponse coment) {
		
		return comentServ.save(coment);
	}
	
	  @PermitAll
	    @GetMapping("/dates")
	    public VisitDate[] getFechas() {
	    	
	    	return comentServ.getResponsesDates();
	    	
	    }
	

}
