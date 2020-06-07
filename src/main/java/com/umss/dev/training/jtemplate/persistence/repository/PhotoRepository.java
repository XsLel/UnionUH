package com.umss.dev.training.jtemplate.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Photo;

public interface PhotoRepository extends JpaRepository<Photo,Integer> {

	@Query("SELECT new com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto(id, url, carousel, food, home) "
			+ "FROM Photo "
			+ "WHERE restaurant_id = ?1 and carousel = true")
	public List<PhotoResponseDto> getCarouselPhotos(int restaurantId);
	
	@Query("SELECT new com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto(id, url, carousel, food, home) "
			+ "FROM Photo "
			+ "WHERE restaurant_id = ?1 and home = true")
	public List<PhotoResponseDto> getHomePhotos(int restaurantId);
	
	@Query("SELECT url "
			+ "FROM Photo "
			+ "WHERE restaurant_id = ?1 and food = false")
	public List<String> getRestaurantGallery(int restaurantId);
}
