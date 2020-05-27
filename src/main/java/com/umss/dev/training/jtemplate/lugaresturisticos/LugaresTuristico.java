package com.umss.dev.training.jtemplate.lugaresturisticos;


import javax.persistence.*;

@Entity(name = "LugaresTuristico")
@Table(name = "lugaresturistico")
public class LugaresTuristico {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "idlugarturistico")
    private Long idlugarturistico;
	
	@Column(name = "nombrelugarturistico")
	private String nombrelugarturistico;
	
	@Column(name = "direccionlugarturistico")
	private String direccionlugarturistico;
	
	@Column(name = "descripcionlugarturistico")
	private String descripcionlugarturistico;
	
	@Column(name = "foto")
	private byte[] foto;
	
	
	public LugaresTuristico() {}

	public LugaresTuristico(Long idlugarturistico, String nombrelugarturistico, String direccionlugarturistico,
			String descripcionlugarturistico, byte[] foto) {
		super();
		this.idlugarturistico = idlugarturistico;
		this.nombrelugarturistico = nombrelugarturistico;
		this.direccionlugarturistico = direccionlugarturistico;
		this.descripcionlugarturistico = descripcionlugarturistico;
		this.foto = foto;
	}

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