package com.umss.dev.training.jtemplate.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.umss.dev.training.jtemplate.common.dto.response.QuestionResponse;
import com.umss.dev.training.jtemplate.service.QuestionService;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

@RestController
@RequestMapping("/question")
public class QuestionController {

	private QuestionService questionService;
	
	public QuestionController(QuestionService service) {
		
		questionService = service;
	}
	
	@GetMapping()
	public Iterable<QuestionResponse> getQuestions(){
		return questionService.getAll();
		
	}

	@GetMapping("/{id}")
	public QuestionResponse getQuestion(@PathVariable (value = "id") Integer questionId){
		
		return questionService.getById(questionId); 
		
	}
	
	@PermitAll
	@PostMapping() 
	public QuestionResponse createCommentary(@Valid @RequestBody QuestionResponse question) {
		
		return questionService.save(question);
	}
}


