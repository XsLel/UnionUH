package com.umss.dev.training.jtemplate.common.dto.response;

public class AdventureResponseDto {
    
    private Long id;
    private String nameAdventure;
    private String nameAgency;
    private String duration;
    private String phoneNumber;
   

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    
    public String getName(){
        return nameAdventure;
    }

    public void setName(String name){
        this.nameAdventure = name;
    }
    public String getNameA(){
        return nameAgency;
    }

    public void setNameA(String nameA){
        this.nameAgency = nameA;
    }
    public String getDuration(){
        return duration;
    }

    public void setDuration(String duration){
        this.duration = duration;
    }

  
    public String getPhoneNumber(){
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }


}

    
