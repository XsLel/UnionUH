package com.comentariosValoracion.demo.pojos;


import java.util.*;

import javax.persistence.*;

@Entity(name="Usuario")
@Table(name = "usuario")
public class Usuario {
	
	@Id 
    @Column(name="idusuario",nullable=false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int idusuario;
	
	@Column(name="nombreusuario",length = 45)
	private String nombreusuario;
	
	@Column(name="correo",length = 45)
	private String correo;
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
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
		return "Usuario [idusuario=" + idusuario + ", nombreusuario=" + nombreusuario + ", correo=" + correo
				+ ", comentarios=" + comentarios + "]";
	}
	
	

}
