package com.umss.dev.training.jtemplate.lugaresturisticos;

import javax.persistence.*;

@Entity(name = "Calificacion")
@Table(name = "calificacion")
public class Calificacion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idcalificacion")
    private Long idcalificacion;
	
	@Column(name="idlugarturistico")
	private Long idlugarturistico;
	
	@Column(name = "score")
	private Long score;
	
	public Calificacion() {}

	public Calificacion(Long idcalificacion, Long idlugarturistico, Long score) {
		super();
		this.idcalificacion = idcalificacion;
		this.idlugarturistico = idlugarturistico;
		this.score = score;
	}

	public Long getIdcalificacion() {
		return idcalificacion;
	}

	public void setIdcalificacion(Long idcalificación) {
		this.idcalificacion = idcalificación;
	}

	public Long getIdlugarturistico() {
		return idlugarturistico;
	}

	public void setIdlugarturistico(Long idlugarturistico) {
		this.idlugarturistico = idlugarturistico;
	}

	public Long getScore() {
		return score;
	}

	public void setScore(Long score) {
		this.score = score;
	}
	
}
