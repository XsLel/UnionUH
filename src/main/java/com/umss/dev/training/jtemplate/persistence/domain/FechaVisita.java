package com.umss.dev.training.jtemplate.persistence.domain;

import java.util.Arrays;
import java.util.Calendar;



public class FechaVisita{
 private int month;
 private int year;
 private String month_text;
	   
	    
 String MONTH[] = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
		 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};
	    
 Calendar fecha = Calendar.getInstance();
	    
 public FechaVisita(int month, int year, String month_text){
	 this.month=month;
	 this.year=year;
	 this.month_text=month_text;
	     
 }
 public FechaVisita() {
	     
  month = fecha.get(Calendar.MONTH);
  year = fecha.get(Calendar.YEAR);
  month_text = MONTH[fecha.get(Calendar.MONTH)];
	     
 }
	   
 public  int getMonth() {
  return month;
 }

 public void setMonth(int month) {
  this.month = month;
 }

 public int getYear() {
	return year;
 }

 public void setYear(int year) {
  this.year = year;
 }
 public String getMonth_text(){
  return month_text;
	}
 public void setMonth_text(String month_text){
  this.month_text =month_text;
 }

  public int getCurrentMonth() {
	return fecha.get(Calendar.MONTH);   
  }
  public int getCurrentYear() {
    return fecha.get(Calendar.YEAR);
  }
  public String mostrar() {
	return ( month_text+" "+year+ " ") ;
  }
  
  public FechaVisita[] generateDates(){
	        
	     
	FechaVisita[]dates =new FechaVisita[12];
	FechaVisita f = new FechaVisita();
	              
	 int mAct =f.getCurrentMonth();
	 int aAct =f.getCurrentYear();
	 int mAnt=f.getCurrentMonth()-1;

	      
	  for (int i =0; i<12; i++) {
	                   
	     if(i==0 && mAct !=0) {
	                    
	       dates[0]= new FechaVisita(mAct, aAct, MONTH[mAct]); 
	                     
	     }else {
	                     
	       dates[i]=new FechaVisita(mAnt, aAct, MONTH[mAnt]);
	                       
	                       
	           if(mAnt!=0){
	                          
	               mAnt--;
	                           
	           }else{
	               mAnt=11;
	                        
	               aAct =aAct-1;
	                        
	           }       
	       }
	    }
	               
	             
	   for(int i=0; i<dates.length; i++){
	      System.out.println(dates[i].mostrar());
	                
	   }
	            
	        
	   return  dates;
	}
@Override
public String toString() {
	return "FechaVisita [month=" + month + ", year=" + year + ", month_text=" + month_text + ", MONTH="
			+ Arrays.toString(MONTH) + ", fecha=" + fecha + "]";
}
	    
	    
	    
	    
}
