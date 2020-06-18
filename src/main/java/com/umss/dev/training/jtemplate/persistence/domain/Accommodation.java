package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "accommodations")
public class Accommodation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private ReviewValueEnum reviewValue;
    @Column(nullable = false)
    private String name;
    @Column(nullable = true)
    private String description;
    @Column(nullable = false)
    private BigDecimal locationLongitude;
    @Column(nullable = false)
    private BigDecimal locationLatitude;
    @Column(nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    private String category;

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public ReviewValueEnum getReviewValue(){
        return reviewValue;
    }

    public void setReviewValue(ReviewValueEnum reviewValue){
        this.reviewValue = reviewValue;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public BigDecimal getLocationLongitude(){
        return locationLongitude;
    }

    public void setLocationLongitude(BigDecimal locationLongitude){
        this.locationLongitude = locationLongitude;
    }

    public BigDecimal getLocationLatitude(){
        return locationLatitude;
    }

    public void setLocationLatitude(BigDecimal locationLatitude){
        this.locationLatitude = locationLatitude;
    }

    public String getPhoneNumber(){
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public String getCategory(){
        return category;
    }

    public void setCategory(String category){
        this.category = category;
    }

}
