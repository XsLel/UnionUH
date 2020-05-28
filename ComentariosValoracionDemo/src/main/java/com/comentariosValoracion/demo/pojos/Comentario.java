package com.comentariosValoracion.demo.pojos;

import java.util.Arrays;
import java.util.Date;
import javax.persistence.*;


@Entity(name="Comentario")
@Table(name = "comentario")
public class Comentario {
	
	@Id 
    @Column(name="idComentario",nullable=false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int idComentario;
	
	@Column(name="idUsuario",nullable = false)
	private int idUsuario;
	
	@Column(name="idLugarTuristico",nullable = false)
	private int idLugarTuristico;
	
	
	@Column(name="tituloComentario",nullable = false, length = 45)
	private String tituloComentario;
	
	@Column(name="DescripComentario",nullable = false, length = 300)
	private String descripcionComentario;
	
	@Column(name="respuesta1")
	private String respuesta1;
	
	@Column(name="respuesta2")
	private String respuesta2;
	
	@Column(name="respuesta3")
	private String respuesta3;
	
	@Column(name="respuesta4")
	private String respuesta4;
	
	@Column(name="calificacionGeneral",nullable = false)
	private int calificacionGeneral;
	
	@Column(name="calificacionServicio")
	private int calificacionServicio;
	
	@Column(name="calificacionUbicacion")
	private int calificacionUbicacion;
	
	@Column(name="calificacionPrecio")
	private int calificacionPrecio;
	
	@Column(name="calificacionCalidad")
	private int calificacionCalidad;
	
	@Column(name="foto")
	private byte[] foto;
	
	//@Temporal(TemporalType.DATE)
	@Column(name="fechasVisita")
	private String fechaVisita;
	
	//@Temporal(TemporalType.DATE)
	@Column(name="fechaAct")
	private String fechaAct;
	
	
	public Comentario() {
		
	}
	
	public Comentario(int idUsuario, int idLugarTuristico, String tituloComentario, String descripcionComentario,
			String respuesta1, String respuesta2, String respuesta3, String respuesta4, int calificacionGeneral,
			int calificacionServicio, int calificacionUbicacion, int calificacionPrecio, int calificacionCalidad,
			byte[] foto,String fechaVisita, String fechaAct, LugarTuristico LugarTuristicoAct, Usuario usuarioAct) {
		
		
		this.tituloComentario = tituloComentario;
		this.descripcionComentario = descripcionComentario;
		this.respuesta1 = respuesta1;
		this.respuesta2 = respuesta2;
		this.respuesta3 = respuesta3; 
		this.respuesta4 = respuesta4;
		this.calificacionGeneral = calificacionGeneral;
		this.calificacionServicio = calificacionServicio;
		this.calificacionUbicacion = calificacionUbicacion;
		this.calificacionPrecio = calificacionPrecio;
		this.calificacionCalidad = calificacionCalidad;
		this.foto = foto;
		this.fechaVisita = fechaVisita;	
		this.fechaAct = fechaAct;
		//this.lugarTuristicoAct = LugarTuristicoAct;
		//this.usuarioAct = usuarioAct;
	}
	public Comentario(int idUsuario, int idLugarTuristico, String tituloComentario, String descripcionComentario, int calificacionGeneral,
			String fecha, String fechaAct, LugarTuristico LugarTuristicoAct, Usuario usuarioAct) {
		
		
		this.tituloComentario = tituloComentario;
		this.descripcionComentario = descripcionComentario;
		this.fechaVisita = fecha;
		this.fechaAct = fechaAct;
		//this.lugarTuristicoAct = LugarTuristicoAct;
		//this.usuarioAct = usuarioAct;
	}
	
	public int getIdcomentario() {
		return idComentario;
	}
	public void setIdcomentario(int idComentario) {
		this.idComentario = idComentario;
	}
	
	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	
	public int getIdLugarTuristico() {
		return idLugarTuristico;
	}

	public void setIdLugarTuristico(int idLugarTuristico) {
		this.idLugarTuristico = idLugarTuristico;
	}

	
	
	public String getTitulocomentario() {
		return tituloComentario;
	}
	public void setTitulocomentario(String tituloComentario) {
		this.tituloComentario = tituloComentario;
	}
	
	
	public String getDescripcioncomentario() {
		return descripcionComentario;
	}
	public void setDescripcioncomentario(String descripComentario) {
		this.descripcionComentario = descripComentario;
	}
	
	
	public String getRespuesta1() {
		return respuesta1;
	}
	public void setRespuesta1(String respuesta1) {
		this.respuesta1 = respuesta1;
	}
	
	
	public String getRespuesta2() {
		return respuesta2;
	}
	public void setRespuesta2(String respuesta2) {
		this.respuesta2 = respuesta2;
	}
	
	
	public String getRespuesta3() {
		return respuesta3;
	}
	public void setRespuesta3(String respuesta3) {
		this.respuesta3 = respuesta3;
	}
	
	
	public String getRespuesta4() {
		return respuesta4;
	}
	public void setRespuesta4(String respuesta4) {
		this.respuesta4 = respuesta4;
	}
	
	
	public int getCalificacionGeneral() {
		return calificacionGeneral;
	}
	public void setCalificacionGeneral(int calificacionGeneral) {
		this.calificacionGeneral = calificacionGeneral;
	}
	
	
	public int getCalificacionServicio() {
		return calificacionServicio;
	}
	public void setCalificacionServicio(int calificacionServicio) {
		this.calificacionServicio = calificacionServicio;
	}
	
	
	public int getCalificacionUbicacion() {
		return calificacionUbicacion;
	}
	public void setCalificacionUbicacion(int calificacionUbicacion) {
		this.calificacionUbicacion = calificacionUbicacion;
	}
	
	
	public int getCalificacionPrecio() {
		return calificacionPrecio;
	}
	public void setCalificacionPrecio(int calificacionPrecio) {
		this.calificacionPrecio = calificacionPrecio;
	}
	
	
	public int getCalificacionCalidad() {
		return calificacionCalidad;
	}
	public void setCalificacionCalidad(int calificacionCalidad) {
		this.calificacionCalidad = calificacionCalidad;
	}
	
	
	public byte[] getFoto() {
		return foto;
	}
	public void setFoto(byte[] foto) {
		this.foto = foto;
	}
	
	
	public String getFechaVisita() {
		return fechaVisita;
	}
	public void setFechaVisita(String fecha) {
		this.fechaVisita = fecha;
	}
	
	
	public String getFechaAct() {
		return fechaAct;
	}
	public void setFechaAct(String fecha) {
		this.fechaAct = fecha;
	}
	

	@Override
	public String toString() {
		return "Comentario [idComentario=" + idComentario + ", usuarioAct= **" + "**, lugarTuristicoAct=///"
				 + "///, tituloComentario=" + tituloComentario + ", descripcionComentario="
				+ descripcionComentario + ", respuesta1=" + respuesta1 + ", respuesta2=" + respuesta2 + ", respuesta3="
				+ respuesta3 + ", respuesta4=" + respuesta4 + ", calificacionGeneral=" + calificacionGeneral
				+ ", calificacionServicio=" + calificacionServicio + ", calificacionUbicacion=" + calificacionUbicacion
				+ ", calificacionPrecio=" + calificacionPrecio + ", calificacionCalidad=" + calificacionCalidad
				+ ", foto=" + Arrays.toString(foto) + ", fechaVisita=" + fechaVisita + ", fechaAct=" + fechaAct + "]";
	}
	
	

}
