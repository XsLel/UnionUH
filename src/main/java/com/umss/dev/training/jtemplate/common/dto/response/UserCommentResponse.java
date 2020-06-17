package com.umss.dev.training.jtemplate.common.dto.response;

import java.util.ArrayList;
import java.util.List;


import com.umss.dev.training.jtemplate.persistence.domain.Comment;

public class UserCommentResponse {
	
	private int userId;
	
	private String name;
	
	private String email;
	
	private List<Comment> commentaries = new ArrayList<>();

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Comment> getCommentaries() {
		return commentaries;
	}

	public void setCommentaries(List<Comment> commentaries) {
		this.commentaries = commentaries;
	}

	@Override
	public String toString() {
		return "UserCommentResponse [userId=" + userId + ", name=" + name + ", email=" + email + ", commentaries="
				+ commentaries + "]";
	}
	
	
	

}
