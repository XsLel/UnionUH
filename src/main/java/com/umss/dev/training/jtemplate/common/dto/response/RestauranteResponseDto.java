package com.umss.dev.training.jtemplate.common.dto.response;

public class RestauranteResponseDto {
	
	private int id;
	private String nombre;
	private String  provincia_región;
	private String  Dirección;
	private String  información_adicional;
	private String  Teléfono;
	private String  Direccion_web;
	private String  correo_electronico;
	private String  publicidad_web;
	private String  Categoría;
	private String  descripcion;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getProvincia_región() {
		return provincia_región;
	}
	public void setProvincia_región(String provincia_región) {
		this.provincia_región = provincia_región;
	}
	public String getDirección() {
		return Dirección;
	}
	public void setDirección(String dirección) {
		Dirección = dirección;
	}
	public String getInformación_adicional() {
		return información_adicional;
	}
	public void setInformación_adicional(String información_adicional) {
		this.información_adicional = información_adicional;
	}
	public String getTeléfono() {
		return Teléfono;
	}
	public void setTeléfono(String teléfono) {
		Teléfono = teléfono;
	}
	public String getDireccion_web() {
		return Direccion_web;
	}
	public void setDireccion_web(String direccion_web) {
		Direccion_web = direccion_web;
	}
	public String getCorreo_electronico() {
		return correo_electronico;
	}
	public void setCorreo_electronico(String correo_electronico) {
		this.correo_electronico = correo_electronico;
	}
	public String getPublicidad_web() {
		return publicidad_web;
	}
	public void setPublicidad_web(String publicidad_web) {
		this.publicidad_web = publicidad_web;
	}
	public String getCategoría() {
		return Categoría;
	}
	public void setCategoría(String categoría) {
		Categoría = categoría;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
