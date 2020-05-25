package com.comentariosValoracion.demo.pojosResponse;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.comentariosValoracion.demo.pojos.LugarTuristico;
import com.comentariosValoracion.demo.pojos.Usuario;

public class ComentarioResponse {
	 
	private int idComentario;
	private int idUsuario;
	private Usuario usuarioAct;
	private int idLugarTuristico;
	private LugarTuristico lugarTuristicoAct;
	private String tituloComentario;
	private String descripcionComentario;
	private String respuesta1;
	private String respuesta2;
	private String respuesta3;
	private String respuesta4;
	private int calificacionGeneral;
	private int calificacionServicio;
	private int calificacionUbicacion;
	private int calificacionPrecio;
	private int calificacionCalidad;
	private byte[] foto;
	private String fechaVisita;
	private String fechaAct;
	
	
	public int getIdComentario() {
		return idComentario;
	}
	public void setIdComentario(int idComentario) {
		this.idComentario = idComentario;
	}
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public Usuario getUsuarioAct() {
		return usuarioAct;
	}
	public void setUsuarioAct(Usuario usuarioAct) {
		this.usuarioAct = usuarioAct;
	}
	public int getIdLugarTuristico() {
		return idLugarTuristico;
	}
	public void setIdLugarTuristico(int idLugarTuristico) {
		this.idLugarTuristico = idLugarTuristico;
	}
	public LugarTuristico getLugarTuristicoAct() {
		return lugarTuristicoAct;
	}
	public void setLugarTuristicoAct(LugarTuristico lugarTuristicoAct) {
		this.lugarTuristicoAct = lugarTuristicoAct;
	}
	public String getTituloComentario() {
		return tituloComentario;
	}
	public void setTituloComentario(String tituloComentario) {
		this.tituloComentario = tituloComentario;
	}
	public String getDescripcionComentario() {
		return descripcionComentario;
	}
	public void setDescripcionComentario(String descripcionComentario) {
		this.descripcionComentario = descripcionComentario;
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
	public void setFechaVisita(String fechaVisita) {
		this.fechaVisita = fechaVisita;
	}
	public String getFechaAct() {
		return fechaAct;
	}
	public void setFechaAct(String fechaAct) {
		this.fechaAct = fechaAct;
	}
	
	
	@Override
	public String toString() {
		return "ComentarioResponse [idComentario=" + idComentario + ", idUsuario=" + idUsuario + ", usuarioAct="
				+ usuarioAct + ", idLugarTuristico=" + idLugarTuristico + ", lugarTuristicoAct=" + lugarTuristicoAct
				+ ", tituloComentario=" + tituloComentario + ", descripcionComentario=" + descripcionComentario
				+ ", respuesta1=" + respuesta1 + ", respuesta2=" + respuesta2 + ", respuesta3=" + respuesta3
				+ ", respuesta4=" + respuesta4 + ", calificacionGeneral=" + calificacionGeneral
				+ ", calificacionServicio=" + calificacionServicio + ", calificacionUbicacion=" + calificacionUbicacion
				+ ", calificacionPrecio=" + calificacionPrecio + ", calificacionCalidad=" + calificacionCalidad
				+ ", foto=" + Arrays.toString(foto) + ", fechaVisita=" + fechaVisita + ", fechaAct=" + fechaAct + "]";
	}
	
	
	
	
}
