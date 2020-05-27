package com.umss.dev.training.jtemplate.common.dto.request;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class RestaurantRegistration {
	
	@NotBlank(message = "The NAME field cannot be empty")
	private String name;
	@NotBlank(message = "The PROVINCE field cannot be empty")
	private String province;
	@NotBlank(message = "The DIRECTION field cannot be empty")
	private String direction;
	@NotBlank(message = "The INFORMATION field cannot be empty")
	private String information;
	@NotNull(message = "The PHONE field cannot be empty")
	private long phone;
	@NotBlank(message = "The WEBSITE field cannot be empty")
	private String website;
	@Email(message = "This field must be an EMAIL")
	@NotBlank(message = "The EMAIL field cannot be empty")
	private String email;
	@NotBlank(message = "The COMMERCIAL field cannot be empty")
	private String commercial;
	@NotBlank(message = "The CATEGORY field cannot be empty")
	private String category;
	@NotBlank(message = "The DESCRIPTION field cannot be empty")
	private String description;
	
	private List<PhotoRegistration> photos;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public String getInformation() {
		return information;
	}
	public void setInformation(String information) {
		this.information = information;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCommercial() {
		return commercial;
	}
	public void setCommercial(String commercial) {
		this.commercial = commercial;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<PhotoRegistration> getPhotos() {
		return photos;
	}
	public void setPhotos(List<PhotoRegistration> photos) {
		this.photos = photos;
	}
}
