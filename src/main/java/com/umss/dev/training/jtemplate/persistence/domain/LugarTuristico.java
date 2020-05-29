package com.umss.dev.training.jtemplate.persistence.domain;
import java.util.*;

import javax.persistence.*;

@Entity(name="LugarTuristico")
@Table(name = "lugarturistico")
public class LugarTuristico {
	
	@Id 
    @Column(name="idlugarturistico",nullable=false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int idlugarturistico;
	
	@Column(name="nombre",length = 45)
	private String nombre;
	
	@Column(name="descripsion",length = 45)
	private String descripcion;
	
	@Column(name="fotothumbnail")
	private byte[] fotothumbnail;
	
	@OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
	/* @JoinTable
	    (
	        name = "ComenatrioLugarTuristico",
	        joinColumns = @JoinColumn(name = "idlugarturistico"),
	        inverseJoinColumns = @JoinColumn(name = "idLugarTuristico")
	    )*/
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

	@Override
	public String toString() {
		return "LugarTuristico [idlugarturistico=" + idlugarturistico + ", nombre=" + nombre + ", descripcion="
				+ descripcion + ", fotothumbnail=" + Arrays.toString(fotothumbnail) + ", comentarios=" + comentarios
				+ "]";
	}
	
	

}
