package com.comentariosValoracion.demo.pojosResponse;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.OneToMany;

import com.comentariosValoracion.demo.pojos.Comentario;

public class UsuarioResponse {
	
	private int idusuario;
	private String nombreusuario;
	private String correo;
	private List<Comentario> comentarios = new ArrayList<>();
	
	public int getIdusuario() {
		return idusuario;
	}
	public void setIdusuario(int idusuario) {
		this.idusuario = idusuario;
	}
	public String getNombreusuario() {
		return nombreusuario;
	}
	public void setNombreusuario(String nombreusuario) {
		this.nombreusuario = nombreusuario;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public List<Comentario> getComentarios() {
		return comentarios;
	}
	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}
	@Override
	public String toString() {
		return "UsuarioResponse [idusuario=" + idusuario + ", nombreusuario=" + nombreusuario + ", correo=" + correo
				+ ", comentarios=" + comentarios + "]";
	}
	
	

}
