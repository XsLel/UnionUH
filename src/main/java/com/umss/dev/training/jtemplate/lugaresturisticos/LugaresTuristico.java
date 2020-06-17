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
	private String foto;

	@Column(name= "link")
	private String link;
	
	
	public LugaresTuristico() {}

	public LugaresTuristico(Long idlugarturistico, String nombrelugarturistico, String direccionlugarturistico,
			String descripcionlugarturistico, String foto, String link) {
		super();
		this.idlugarturistico = idlugarturistico;
		this.nombrelugarturistico = nombrelugarturistico;
		this.direccionlugarturistico = direccionlugarturistico;
		this.descripcionlugarturistico = descripcionlugarturistico;
		this.foto = foto;
		this.link = link;
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