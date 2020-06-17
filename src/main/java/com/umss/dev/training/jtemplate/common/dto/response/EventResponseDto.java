package com.umss.dev.training.jtemplate.common.dto.response;

public class EventResponseDto {
    
    private Long id;
    private String title;
    private String date;

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

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

    
