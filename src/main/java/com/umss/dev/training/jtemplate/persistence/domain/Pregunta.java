package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name="Pregunta")
@Table(name = "pregunta")

public class Pregunta {

	@Id 
    @Column(name="idpregunta",nullable=false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int idpregunta;
	
	@Column(name="contenido",length = 50)
	private String contenido;

	public int getIdpregunta() {
		return idpregunta;
	}

	public void setIdpregunta(int idpregunta) {
		this.idpregunta = idpregunta;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	@Override
	public String toString() {
		return "Pregunta [idpregunta=" + idpregunta + ", contenido=" + contenido + "]";
	}
	
	
}
