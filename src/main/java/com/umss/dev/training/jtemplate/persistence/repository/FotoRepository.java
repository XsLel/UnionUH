package com.umss.dev.training.jtemplate.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.umss.dev.training.jtemplate.common.dto.response.FotoQuerySQL;
import com.umss.dev.training.jtemplate.persistence.domain.Foto;

public interface FotoRepository extends JpaRepository<Foto,Integer> {

	@Query("SELECT new com.umss.dev.training.jtemplate.common.dto.response.FotoQuerySQL(id, url, carousel, food, home) "
			+ "FROM Foto "
			+ "WHERE restaurant_id = ?1 and carousel = true")
	public List<FotoQuerySQL> getCarouselPhotos(int restaurantId);
	
	@Query("SELECT new com.umss.dev.training.jtemplate.common.dto.response.FotoQuerySQL(id, url, carousel, food, home) "
			+ "FROM Foto "
			+ "WHERE restaurant_id = ?1 and home = true")
	public List<FotoQuerySQL> getHomePhotos(int restaurantId);
}
