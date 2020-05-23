package com.umss.dev.training.jtemplate.common.dto.response;

public class FotoResponseDto {

	private int id;
	private String url;
	private boolean carousel;
	private boolean food;
	private boolean home;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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