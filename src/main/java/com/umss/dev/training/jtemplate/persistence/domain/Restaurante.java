package com.umss.dev.training.jtemplate.persistence.domain;



import java.util.List;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.*;
import javax.persistence.Transient;





@Entity


public class Restaurante {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)

    private int idRestaurante;
    @OneToMany(mappedBy="idfoto")
    List<Foto> fotoslist;
    
    

  private String nombre;
  private String  provincia_región;
  private String  Dirección;
  private String  información_adicional;
  private String  Teléfono;
  private String  Direccion_web ;
  private String  correo_electronico;
  private String  publicidad_web;
  private String  Categoría;
  private String  descripcion ;
  @Transient
  private String axu;
 
  
  public Restaurante() {}



public Restaurante(int idRestaurante, String provincia_región, String dirección, String información_adicional, String teléfono,
		String direccion_web, String correo_electronico, String publicidad_web, String categoría, String descripcion) {
	super();
	this.idRestaurante = idRestaurante;

	this.provincia_región = provincia_región;
	Dirección = dirección;
	this.información_adicional = información_adicional;
	Teléfono = teléfono;
	Direccion_web = direccion_web;
	this.correo_electronico = correo_electronico;
	this.publicidad_web = publicidad_web;
	Categoría = categoría;
	this.descripcion = descripcion;
}


public int getId() {

	return idRestaurante;
}


public List<Foto> getFotoslist() {
	return fotoslist;
}


public void setFotoslist(List<Foto> fotoslist) {
	this.fotoslist = fotoslist;
}


public void setId(int idRestaurante) {
	this.idRestaurante = idRestaurante;

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


@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;

	result = prime * result + idRestaurante;



	return result;
}


@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Restaurante other = (Restaurante) obj;

	if (idRestaurante != other.idRestaurante)

		return false;
	return true;
}
  

    
}