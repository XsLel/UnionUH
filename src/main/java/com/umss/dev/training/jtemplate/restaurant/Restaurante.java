package com.umss.dev.training.jtemplate.restaurant;

import javax.persistence.*;

@Entity
@Table(name = "restaurante")
public class Restaurante {

	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private long id;
	@Column(nullable = false, length = 100)
     private String Nombre_restaurante;
     @Column(nullable = false, length = 100)
	 private String Direccion;
     @Column(nullable = true, length = 600)
	 private String Informacion_adicional;
     @Column(nullable = false)
	 private int Telefono;
     @Column(nullable = true, length = 100)
	 private String Dirreccion_web;
     @Column(nullable = true, length = 50)
	 private String Correo_electronico;
     @Column(nullable = true, length = 100)
	 private String Publicidad_web;
     @Column(nullable = false, length = 150)
	 private String categoria;
     @Column(nullable = true, length = 600)
	 private String Descripcion;
     @Column(nullable = false, length = 300)
	 private String Imagen;
     @Column(nullable = false, length = 50)
	 private String Provincia;
     @Column(nullable = false, length = 500)
	 private String platos;
     
    public Restaurante() {
    	//auto generate
    }
     
	public Restaurante(long id,String nombre_restaurante, String direccion, String informacion_adicional, int telefono,
			String dirreccion_web, String correo_electronico, String publicidad_web, String categoria,
			String descripcion, String imagen, String provincia, String platos) {
		super();
		this.id =id;
		this.Nombre_restaurante = nombre_restaurante;
		this.Direccion = direccion;
		this.Informacion_adicional = informacion_adicional;
		this.Telefono = telefono;
		this.Dirreccion_web = dirreccion_web;
		this.Correo_electronico = correo_electronico;
		this.Publicidad_web = publicidad_web;
		this.categoria = categoria;
		this.Descripcion = descripcion;
		this.Imagen = imagen;
		this.Provincia = provincia;
		this.platos = platos;
	}
	 public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getNombre_restaurante() {
		return Nombre_restaurante;
	}
	public void setNombre_restaurante(String nombre_restaurante) {
		this.Nombre_restaurante = nombre_restaurante;
	}
	public String getDireccion() {
		return Direccion;
	}
	public void setDireccion(String direccion) {
		this.Direccion = direccion;
	}
	public String getInformacion_adicional() {
		return Informacion_adicional;
	}
	public void setInformacion_adicional(String informacion_adicional) {
		this.Informacion_adicional = informacion_adicional;
	}
	public int getTelefono() {
		return Telefono;
	}
	public void setTelefono(int telefono) {
		this.Telefono = telefono;
	}
	public String getDirreccion_web() {
		return Dirreccion_web;
	}
	public void setDirreccion_web(String dirreccion_web) {
		this.Dirreccion_web = dirreccion_web;
	}
	public String getCorreo_electronico() {
		return Correo_electronico;
	}
	public void setCorreo_electronico(String correo_electronico) {
		this.Correo_electronico = correo_electronico;
	}
	public String getPublicidad_web() {
		return Publicidad_web;
	}
	public void setPublicidad_web(String publicidad_web) {
		this.Publicidad_web = publicidad_web;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getDescripcion() {
		return Descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.Descripcion = descripcion;
	}
	public String getImagen() {
		return Imagen;
	}
	public void setImagen(String imagen) {
		this.Imagen = imagen;
	}
	public String getProvincia() {
		return Provincia;
	}
	public void setProvincia(String provincia) {
		this.Provincia = provincia;
	}
	public String getPlatos() {
		return platos;
	}
	public void setPlatos(String platos) {
		this.platos = platos;
	}
     
     


}
