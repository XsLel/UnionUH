package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.*;

@Entity
@Table(name = "tours")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String companyName;
    @Column(nullable = true)
    private String place;
    @Column(nullable = true)
    private String duration;
    @Column(nullable = true)
    private String contactInformation;

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getCompanyName(){
        return companyName;
    }

    public void setCompanyName(String companyName){
        this.companyName = companyName;
    }

    public String getPlace(){
        return place;
    }

    public void setPlace(String place){
        this.place = place;
    }

    public String getDuration(){
        return duration;
    }

    public void setDuration(String duration){
        this.duration = duration;
    }

    public String getContactInformation(){
        return contactInformation;
    }

    public void setContactInformation(String contactInformation){
        this.contactInformation = contactInformation;
    }
}