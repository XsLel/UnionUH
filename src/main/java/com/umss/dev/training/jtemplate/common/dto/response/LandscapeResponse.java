package com.umss.dev.training.jtemplate.common.dto.response;

import java.util.ArrayList;
import java.util.List;


import com.umss.dev.training.jtemplate.persistence.domain.Comment;

public class LandscapeResponse {
	
private int landscapeId;
	
	
	private String name;

	private String description;

	private String fotothumbnail;
	
	private List<Comment> commentaries = new ArrayList<>();

	public int getLandscapeId() {
		return landscapeId;
	}

	public void setLandscapeId(int landscapeId) {
		this.landscapeId = landscapeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFotothumbnail() {
		return fotothumbnail;
	}

	public void setFotothumbnail(String fotothumbnail) {
		this.fotothumbnail = fotothumbnail;
	}

	public List<Comment> getCommentaries() {
		return commentaries;
	}

	public void setCommentaries(List<Comment> commentaries) {
		this.commentaries = commentaries;
	}

	@Override
	public String toString() {
		return "LandscapeResponse [landscapeId=" + landscapeId + ", name=" + name + ", description=" + description
				+ ", fotothumbnail=" + fotothumbnail + ", commentaries=" + commentaries + "]";
	}

	
	

}
