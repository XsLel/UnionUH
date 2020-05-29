package com.umss.dev.training.jtemplate.common.dto.response;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.umss.dev.training.jtemplate.persistence.domain.Comentario;

public class LugarTuristicoResponse {
	
	private int idlugarturistico;
	private String nombre;
	private String descripcion;
	private byte[] fotothumbnail;
	private List<Comentario> comentarios = new ArrayList<>();
	public int getIdlugarturistico() {
		return idlugarturistico;
	}
	public void setIdlugarturistico(int idlugarturistico) {
		this.idlugarturistico = idlugarturistico;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public byte[] getFotothumbnail() {
		return fotothumbnail;
	}
	public void setFotothumbnail(byte[] fotothumbnail) {
		this.fotothumbnail = fotothumbnail;
	}
	public List<Comentario> getComentarios() {
		return comentarios;
	}
	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}
	
	

}
