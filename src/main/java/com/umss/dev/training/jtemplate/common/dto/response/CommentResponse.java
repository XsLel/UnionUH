package com.umss.dev.training.jtemplate.common.dto.response;

import java.util.Date;


public class CommentResponse {
	 
private int commentId;

private int userId;

private int landscapeId;

private String title;

private String description;

private String answer1;

private String answer2;

private String answer3;

private String answer4;

private int generalRating;

private int serviceRating;

private int locationRating;

private int priceRating;

private int cualityRating;

private String foto;

private String visitDate;

private Date actualDate;


public int getCommentId() {
	return commentId;
}

public void setCommentId(int commentId) {
	this.commentId = commentId;
}

public int getUserId() {
	return userId;
}

public void setUserId(int userId) {
	this.userId = userId;
}

public int getLandscapeId() {
	return landscapeId;
}

public void setLandscapeId(int landscapeId) {
	this.landscapeId = landscapeId;
}

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}

public String getAnswer1() {
	return answer1;
}

public void setAnswer1(String answer1) {
	this.answer1 = answer1;
}

public String getAnswer2() {
	return answer2;
}

public void setAnswer2(String answer2) {
	this.answer2 = answer2;
}

public String getAnswer3() {
	return answer3;
}

public void setAnswer3(String answer3) {
	this.answer3 = answer3;
}

public String getAnswer4() {
	return answer4;
}

public void setAnswer4(String answer4) {
	this.answer4 = answer4;
}

public int getGeneralRating() {
	return generalRating;
}

public void setGeneralRating(int generalRating) {
	this.generalRating = generalRating;
}

public int getServiceRating() {
	return serviceRating;
}

public void setServiceRating(int serviceRating) {
	this.serviceRating = serviceRating;
}

public int getLocationRating() {
	return locationRating;
}

public void setLocationRating(int locationRating) {
	this.locationRating = locationRating;
}

public int getPriceRating() {
	return priceRating;
}

public void setPriceRating(int priceRating) {
	this.priceRating = priceRating;
}

public int getCualityRating() {
	return cualityRating;
}

public void setCualityRating(int cualityRating) {
	this.cualityRating = cualityRating;
}

public String getFoto() {
	return foto;
}

public void setFoto(String foto) {
	this.foto = foto;
}

public String getVisitDate() {
	return visitDate;
}

public void setVisitDate(String visitDate) {
	this.visitDate = visitDate;
}

public Date getActualDate() {
	return actualDate;
}

public void setActualDate(Date actualDate) {
	this.actualDate = actualDate;
}

@Override
public String toString() {
	return "CommentResponse [commentId=" + commentId + ", userId=" + userId + ", landscapeId=" + landscapeId
			+ ", title=" + title + ", description=" + description + ", answer1=" + answer1 + ", answer2=" + answer2
			+ ", answer3=" + answer3 + ", answer4=" + answer4 + ", generalRating=" + generalRating + ", serviceRating="
			+ serviceRating + ", locationRating=" + locationRating + ", priceRating=" + priceRating + ", cualityRating="
			+ cualityRating + ", foto=" + foto + ", visitDate=" + visitDate + ", actualDate=" + actualDate + "]";
}

	
	
}
