package com.umss.dev.training.jtemplate.common.dto.response;

import java.math.BigDecimal;

import com.umss.dev.training.jtemplate.persistence.domain.ReviewValueEnum;

public class AccommodationResponseDto {
    
    private Long id;
    private ReviewValueEnum reviewValue;
    private String name;
    private String description;
    private BigDecimal locationLongitude;
    private BigDecimal locationLatitude;
    private String phoneNumber;
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