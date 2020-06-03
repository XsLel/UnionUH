package com.umss.dev.training.jtemplate.lugaresturisticos;

public class CalificacionResponse {

	private Long idcalificación;
	private Long idlugarturistico;
	private Long score;
	
	public Long getIdcalificación() {
		return idcalificación;
	}
	public void setIdcalificación(Long idcalificación) {
		this.idcalificación = idcalificación;
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
