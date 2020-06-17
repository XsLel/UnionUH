package com.umss.dev.training.jtemplate.lugaresturisticos;

public class LugaresTuristicoResponse {

	private Long idlugarturistico;
	private String nombrelugarturistico;
	private String direccionlugarturistico;
	private String descripcionlugarturistico;
	private String foto;
	private String link;
	
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
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
}
