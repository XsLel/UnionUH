package com.umss.dev.training.jtemplate.common.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class RestauranteRegistration {
	
	@NotBlank(message = "El campo NOMBRE no debe estar vacío")
	private String nombre;
	@NotBlank(message = "El campo PROVINCIA no debe estar vacío")
	private String  provincia_región;
	@NotBlank(message = "El campo DIRECCION no debe estar vacío")
	private String  Dirección;
	@NotBlank(message = "El campo INFORMACION no debe estar vacío")
	private String  información_adicional;
	@NotBlank(message = "El campo TELEFONO no debe estar vacío")
	private String  Teléfono;
	@NotBlank(message = "El campo DIRECCION WEB no debe estar vacío")
	private String  Direccion_web;
	@Email(message = "Este campo debe ser un email")
	@NotBlank(message = "El campo EMAIL no debe estar vacío")
	private String  correo_electronico;
	@NotBlank(message = "El campo PUBLICIDAD no debe estar vacío")
	private String  publicidad_web;
	@NotBlank(message = "El campo CATEGORIA no debe estar vacío")
	private String  Categoría;
	@NotBlank(message = "El campo DESCRIPCION no debe estar vacío")
	private String  descripcion;
	
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
