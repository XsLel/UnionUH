package com.umss.dev.training.jtemplate.persistence.domain;


import java.util.*;

import javax.persistence.*;

@Entity(name="UserComment")
@Table(name = "usercomment")
public class UserComment {
	
	@Id 
    @Column(nullable=false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int userId;
	
	@Column(length = 45)
	private String name;
	
	@Column(length = 45)
	private String email;
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
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
		return "UserComment [userId=" + userId + ", name=" + name + ", email=" + email + ", commentaries="
				+ commentaries + "]";
	}

	
	

}
