package com.umss.dev.training.jtemplate.common.dto.response;


public class QuestionResponse {
	
	private int questionId;

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
		return "QuestionResponse [questionId=" + questionId + ", phrasedQuestion=" + phrasedQuestion + "]";
	}
	
	

}
