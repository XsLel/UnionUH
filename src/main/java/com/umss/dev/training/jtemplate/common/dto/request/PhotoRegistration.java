package com.umss.dev.training.jtemplate.common.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class PhotoRegistration {
	
	@NotBlank(message = "El campo URL no puede estar vacío")
	private String url;
	private boolean carousel = false;
	@NotNull(message = "El campo Food no puede estar vacío")
	private boolean food;
	private boolean home = false;
	
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public boolean isCarousel() {
		return carousel;
	}
	public void setCarousel(boolean carousel) {
		this.carousel = carousel;
	}
	public boolean isFood() {
		return food;
	}
	public void setFood(boolean food) {
		this.food = food;
	}
	public boolean isHome() {
		return home;
	}
	public void setHome(boolean home) {
		this.home = home;
	}
}
