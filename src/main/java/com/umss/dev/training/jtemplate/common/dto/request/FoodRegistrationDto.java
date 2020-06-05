package com.umss.dev.training.jtemplate.common.dto.request;


import javax.persistence.Column;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnore;


public class FoodRegistrationDto {
	@Column
	@NotBlank
	@Size(min = 1,max = 30,message = "el tamaño del nombre es muy grande")
	@Pattern(regexp = "[a-zA-Z].+",message = "el nombre de la comida tiene simbolos o numeros")
	private String name;
	@Column
	@NonNull
	@Min(1)
	@Max(500)
	private int price;
	@Column
	@NotBlank
	@Size(min=10,max=2000,message = "este campo tiene que tener como minimo 10 caracteres")
	private String description;
	@Column
	private String category;
	@Column
	@NotBlank
	@Size(min=3,max=500,message = "el tamaño tiene que estar entre 3 y 500")
	@Pattern(regexp = "[a-zA-Z].+",message = "los ingredietnes de la comida tiene simbolos o numeros")
	private String ingredients;
	@Column
	private String days;
	@Column
	@Min(1)
	@Max(20)
	private int servings;
	@Column
	private String image;
	  @JsonIgnore
	 private Boolean isEnabled;
	  @JsonIgnore
	    private Boolean isDeleted;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getIngredients() {
		return ingredients;
	}
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	public int getServings() {
		return servings;
	}
	public void setServings(int servings) {
		this.servings = servings;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Boolean getIsEnabled() {
		return isEnabled;
	}
	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
	}
	public Boolean getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
	 
	  
	
	
}
