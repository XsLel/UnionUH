package com.umss.dev.training.jtemplate.common.dto.request;

import java.util.List;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class RestaurantRegistration {
	
	@NotBlank(message = "El campo no debe estar vacío")
	private String name;
	@NotBlank(message = "El campo no debe estar vacío")
	private String province;
	@NotBlank(message = "El campo no debe estar vacío")
	private String direction;
	@NotBlank(message = "El campo no debe estar vacío")
	private String information;
	@NotNull(message = "El campo no debe estar vacío")
	private long phone;
	@NotBlank(message = "El campo no debe estar vacío")
	private String website;
	@Email(message = "Este campo debe ser un email")
	@NotBlank(message = "El campo no debe estar vacío")
	private String email;
	@NotBlank(message = "El campo no debe estar vacío")
	private String commercial;
	@NotBlank(message = "El campo no debe estar vacío")
	private String category;
	@NotBlank(message = "El campo no debe estar vacío")
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
