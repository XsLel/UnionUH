package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.GenerationType;
import javax.persistence.*;
@Entity
public class Foto {
	  
		@Id
	    @GeneratedValue(strategy=GenerationType.AUTO)
	    private int idfoto;
		
		@ManyToOne
		@JoinColumn(name="idRestaurante")
		Restaurante restaurante;
		
	  	private String	urlfoto;
	  	private boolean carusel;
	  
	 
	  	public Foto() {}


		public Foto(int idfoto, Restaurante restaurante, String urlfoto, boolean carusel) {
			super();
			this.idfoto = idfoto;
			this.restaurante = restaurante;
			this.urlfoto = urlfoto;
			this.carusel = carusel;
		}


		@Override
		public String toString() {
			return "Foto [idfoto=" + idfoto + ", restaurante=" + restaurante + ", urlfoto=" + urlfoto + ", carusel="
					+ carusel + "]";
		}


		public int getIdfoto() {
			return idfoto;
		}


		public void setIdfoto(int idfoto) {
			this.idfoto = idfoto;
		}


		public Restaurante getRestaurante() {
			return restaurante;
		}


		public void setRestaurante(Restaurante restaurante) {
			this.restaurante = restaurante;
		}


		public String getUrlfoto() {
			return urlfoto;
		}


		public void setUrlfoto(String urlfoto) {
			this.urlfoto = urlfoto;
		}


		public boolean isCarusel() {
			return carusel;
		}


		public void setCarusel(boolean carusel) {
			this.carusel = carusel;
		}


		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + (carusel ? 1231 : 1237);
			result = prime * result + idfoto;
			result = prime * result + ((restaurante == null) ? 0 : restaurante.hashCode());
			result = prime * result + ((urlfoto == null) ? 0 : urlfoto.hashCode());
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
			Foto other = (Foto) obj;
			if (carusel != other.carusel)
				return false;
			if (idfoto != other.idfoto)
				return false;
			if (restaurante == null) {
				if (other.restaurante != null)
					return false;
			} else if (!restaurante.equals(other.restaurante))
				return false;
			if (urlfoto == null) {
				if (other.urlfoto != null)
					return false;
			} else if (!urlfoto.equals(other.urlfoto))
				return false;
			return true;
		}

	  	
	  
		


}
