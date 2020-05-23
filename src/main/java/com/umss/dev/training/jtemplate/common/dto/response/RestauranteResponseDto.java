package com.umss.dev.training.jtemplate.common.dto.response;

import java.util.ArrayList;
import java.util.List;

public class RestauranteResponseDto {
	
	private int id;
	private String name;
	private String province;
	private String direction;
	private String information;
	private long phone;
	private String website;
	private String email;
	private String commercial;
	private String category;
	private String description;
	private List<FotoResponseDto> photos;
	
	public void addRestaurantSQL(RestauranteQuerySQL restaurantSQL) {
		this.id = restaurantSQL.getId();
		this.name = restaurantSQL.getName();
		this.province = restaurantSQL.getProvince();
		this.direction = restaurantSQL.getDirection();
		this.information = restaurantSQL.getInformation();
		this.phone = restaurantSQL.getPhone();
		this.website = restaurantSQL.getWebsite();
		this.email = restaurantSQL.getEmail();
		this.commercial = restaurantSQL.getCommercial();
		this.category = restaurantSQL.getCategory();
		this.description = restaurantSQL.getDescription();
	}
	
	public void addListFotoSQL(List<FotoQuerySQL> listFotoSQL) {
		photos = new ArrayList<FotoResponseDto>();
		FotoResponseDto item;
		while(!listFotoSQL.isEmpty()) {
			item = listFotoSQL.remove(0).getResponse();
			photos.add(item);
		}
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
	public List<FotoResponseDto> getPhotos() {
		return photos;
	}
	public void setPhotos(List<FotoResponseDto> photos) {
		this.photos = photos;
	}
}
