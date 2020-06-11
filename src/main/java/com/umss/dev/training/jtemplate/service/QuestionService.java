package com.umss.dev.training.jtemplate.service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.response.QuestionResponse;
import com.umss.dev.training.jtemplate.exception.DtoNotFoundException;
import com.umss.dev.training.jtemplate.persistence.domain.Question;
import com.umss.dev.training.jtemplate.persistence.repository.QuestionRepository;

@Service
public class QuestionService {

	@Autowired
	private QuestionRepository questionRepository;
	private ModelMapper modelMapper;
	
	public QuestionService(QuestionRepository questionRepository, ModelMapper modelMapper) {
	    this.questionRepository = questionRepository;
	    this.modelMapper = modelMapper;
	   
	}
	
	public Iterable<QuestionResponse> getAll(){
		List<QuestionResponse> allUsersResponse = questionRepository.findAll()
				.stream()
				.sorted(Comparator.comparing(Question::getQuestionId))
				.map(quest->{
					
					QuestionResponse response = modelMapper.map(quest, QuestionResponse.class);
					
					
					response.setQuestionId(quest.getQuestionId());
				
					return response;
		})    
	      		.collect(Collectors.toList());

	return allUsersResponse;
		
	}
	
	public QuestionResponse getById(Integer questionId) {

		Question questionAct = questionRepository.findById(questionId).orElse(null);

	    if (null == questionAct) {
	        
	        throw new DtoNotFoundException(QuestionResponse.class.toString(), questionId);
	    }
	    
	    QuestionResponse foundQuestion = modelMapper.map(questionAct, QuestionResponse.class);
	    
	    foundQuestion.setQuestionId(questionAct.getQuestionId());
	    
	    return foundQuestion;
	}
	
	public QuestionResponse save(QuestionResponse question) {
		
		Question converted = modelMapper.map(question,Question.class);
		 
	     
	     Question persistedUser = questionRepository.save(converted);
	    
	     QuestionResponse questionResponse = modelMapper.map(persistedUser, QuestionResponse.class);
	     
	     return questionResponse;
	}

}
