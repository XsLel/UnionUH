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
	  
	 
	  	public Foto() {}


		public Foto(int idfoto, int idRes, String direccion) {
			super();
			this.idfoto = idfoto;
			this.idRes = idRes;
			this.urlfoto = direccion;
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


		public String getDireccion() {
			return urlfoto;
		}


		public void setDireccion(String direccion) {
			this.urlfoto = direccion;
		}
		
	  	
		
	  	
	  	
}
