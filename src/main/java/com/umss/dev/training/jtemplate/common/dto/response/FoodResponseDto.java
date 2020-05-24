package com.umss.dev.training.jtemplate.common.dto.response;

public class FoodResponseDto {
	private Long id;
	private String nombre;
	private int precio;
	private String descricion;
	private String categoria;
	private String ingredientes;
	private String diasDisponibles;
	private int CantidadPorciones;
	private String imagen;
	private Boolean isEnabled;
    private Boolean isDeleted;
	
    
    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getPrecio() {
		return precio;
	}
	public void setPrecio(int precio) {
		this.precio = precio;
	}
	public String getDescricion() {
		return descricion;
	}
	public void setDescricion(String descricion) {
		this.descricion = descricion;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getIngredientes() {
		return ingredientes;
	}
	public void setIngredientes(String ingredientes) {
		this.ingredientes = ingredientes;
	}
	public String getDiasDisponibles() {
		return diasDisponibles;
	}
	public void setDiasDisponibles(String diasDisponibles) {
		this.diasDisponibles = diasDisponibles;
	}
	public int getCantidadPorciones() {
		return CantidadPorciones;
	}
	public void setCantidadPorciones(int cantidadPorciones) {
		CantidadPorciones = cantidadPorciones;
	}
	public String getImagen() {
		return imagen;
	}
	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	public Boolean getIsEnabled() {
		return isEnabled;
	}
	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
	}
	public Boolean getIsDeleted() {
		return isDeleted;
	}
	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
    
}
