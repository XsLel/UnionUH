package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="Questiont")
@Table(name = "question")
public class Question {
	
	@Id 
    @Column(nullable=false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int questionId;
	
	@Column(nullable = false,length = 300)
	private String phrasedQuestion;

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public String getPhrasedQuestion() {
		return phrasedQuestion;
	}

	public void setPhrasedQuestion(String phrasedQuestion) {
		this.phrasedQuestion = phrasedQuestion;
	}

	@Override
	public String toString() {
		return "Question [questionId=" + questionId + ", phrasedQuestion=" + phrasedQuestion + "]";
	}
	
	
	

}
