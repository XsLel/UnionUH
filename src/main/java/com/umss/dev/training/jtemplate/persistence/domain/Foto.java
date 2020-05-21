package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Foto {
	  
		@Id
	    @GeneratedValue(strategy=GenerationType.AUTO)
	    private int idfoto;
		
		private int idRes;
	  	private String	urlfoto;
	  	private boolean carusel;
	  
	 
	  	public Foto() {}

	  	
	  	

		@Override
		public String toString() {
			return "Foto [idfoto=" + idfoto + ", idRes=" + idRes + ", urlfoto=" + urlfoto + ", carusel=" + carusel
					+ "]";
		}

		
		



		public Foto(int idfoto, int idRes, String urlfoto, boolean carusel) {
			super();
			this.idfoto = idfoto;
			this.idRes = idRes;
			this.urlfoto = urlfoto;
			this.carusel = carusel;
		}




		public int getIdfoto() {
			return idfoto;
		}




		public void setIdfoto(int idfoto) {
			this.idfoto = idfoto;
		}




		public int getIdRes() {
			return idRes;
		}




		public void setIdRes(int idRes) {
			this.idRes = idRes;
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
			result = prime * result + idRes;
			result = prime * result + idfoto;
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
			if (idRes != other.idRes)
				return false;
			if (idfoto != other.idfoto)
				return false;
			if (urlfoto == null) {
				if (other.urlfoto != null)
					return false;
			} else if (!urlfoto.equals(other.urlfoto))
				return false;
			return true;
		}


	  	
	  	
}
