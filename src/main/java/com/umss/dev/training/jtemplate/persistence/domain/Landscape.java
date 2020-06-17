package com.umss.dev.training.jtemplate.persistence.domain;
import java.util.*;

import javax.persistence.*;

@Entity(name="Landscape")
@Table(name = "landscape")
public class Landscape {
	
	@Id 
    @Column(nullable=false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int landscapeId;
	
	@Column(length = 45)
	private String name;
	
	@Column(nullable = true,length = 45)
	private String description;
	
	@Column(nullable = true)
	private String fotothumbnail;
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
	
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
		return "Landscape [landscapeId=" + landscapeId + ", name=" + name + ", description=" + description
				+ ", fotothumbnail=" + fotothumbnail + ", commentaries=" + commentaries + "]";
	}

	
	

}
