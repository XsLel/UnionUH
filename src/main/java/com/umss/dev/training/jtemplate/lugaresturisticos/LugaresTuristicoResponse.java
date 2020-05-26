package com.umss.dev.training.jtemplate.lugaresturisticos;

public class LugaresTuristicoResponse {

	private Long idlugarturistico;
	private String nombrelugarturistico;
	private String direccionlugarturistico;
	private String descripcionlugarturistico;
	private byte[] foto;
	
	public Long getIdlugarturistico() {
		return idlugarturistico;
	}
	public void setIdlugarturistico(Long idlugarturistico) {
		this.idlugarturistico = idlugarturistico;
	}
	public String getNombrelugarturistico() {
		return nombrelugarturistico;
	}
	public void setNombrelugarturistico(String nombrelugarturistico) {
		this.nombrelugarturistico = nombrelugarturistico;
	}
	public String getDireccionlugarturistico() {
		return direccionlugarturistico;
	}
	public void setDireccionlugarturistico(String direccionlugarturistico) {
		this.direccionlugarturistico = direccionlugarturistico;
	}
	public String getDescripcionlugarturistico() {
		return descripcionlugarturistico;
	}
	public void setDescripcionlugarturistico(String descripcionlugarturistico) {
		this.descripcionlugarturistico = descripcionlugarturistico;
	}
	public byte[] getFoto() {
		return foto;
	}
	public void setFoto(byte[] foto) {
		this.foto = foto;
	}
}
