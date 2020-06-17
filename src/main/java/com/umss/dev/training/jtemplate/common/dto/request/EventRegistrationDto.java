package com.umss.dev.training.jtemplate.common.dto.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class EventRegistrationDto {
    
    
    private String title;
    @Size(min = 5, max =20 , message = "Debe tener minimamente 5 caracteres y máximo 20")
    @NotNull
    private String date;
    @Size(min = 10, max = 20 , message = "Debe tener minimamente 10 caracteres y máximo 20")
    @NotNull

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDate(){
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }

}