package com.umss.dev.training.jtemplate.common.dto.request;

import java.math.BigDecimal;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;

import com.umss.dev.training.jtemplate.persistence.domain.ReviewValueEnum;

public class AccommodationRegistrationDto {
    
    @NotNull
    private ReviewValueEnum rating;
    @NotBlank(message = "Nombre no puede estar vacio.")
    @Size(min = 2, max = 250, message = "Email no es válido.")
    private String name;
    @Null
    @Size(min = 5, max = 255, message = "Descripción no es válida.")
    private String description;
    @NotNull
    private BigDecimal locationLongitude;
    @NotNull
    private BigDecimal locationLatitude;
    @NotBlank(message = "Número de teléfono no puede estar vacío.")
    @Size(min = 5, max = 20, message = "Número de teléfono inválido")
    private String phoneNumber;
    @NotEmpty(message = "Categoría no puede estar vacío.")
    private String category;

    public ReviewValueEnum getRating(){
        return rating;
    }

    public void setRating(ReviewValueEnum rating){
        this.rating = rating;
    }

    public String getName(){
        return name;
    }

    public void setName(final String name){
        this.name = name;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(final String description){
        this.description = description;
    }

    public BigDecimal getLocationLongitude(){
        return locationLongitude;
    }

    public void setLocationLongitude(final BigDecimal locationLongitude){
        this.locationLongitude = locationLongitude;
    }

    public BigDecimal getLocationLatitude(){
        return locationLatitude;
    }

    public void setLocationLatitude(final BigDecimal locationLatitude){
        this.locationLatitude = locationLatitude;
    }

    public String getPhoneNumber(){
        return phoneNumber;
    }

    public void setPhoneNumber(final String phoneNumber){
        this.phoneNumber = phoneNumber;
    }

    public String getCategory(){
        return category;
    }

    public void setCategory(String category){
        this.category = category;
    }
}

