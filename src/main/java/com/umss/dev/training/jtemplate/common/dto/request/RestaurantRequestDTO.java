package com.umss.dev.training.jtemplate.common.dto.request;
//import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.validation.constraints.*;
//import java.util.HashSet;
//import java.util.Set;

public class RestaurantRequestDTO{

@NotBlank(message = "The name of the restaurant cannot be empty.")
@Size (max = 50, message = "Name must have at most 50 characters.")
private String nameRestaurant;

@NotBlank(message = "The direction restaurant management cannot be left empty")
@Size (max = 50, message = "Name must have at most 50 characters.")
private String restaurantAddress;

@Size(max = 100, message = "additional restaurant information should contain bet 100 characters.")
private String additionalInformation;
 
	
@Size(min = 4, max = 20, message = "direccion web should contain between 4 and 20 characters.")
private String webAddress;


@Size(min = 4, max = 50, message = "publicidad should contain between 4 and 50 characters.")
private String advertising;


@NotBlank(message = " the province cannot remain empty")
//@Size (max = 50, message = "Name must have at most 50 characters.")
private String province;

//@NotBlank(message = " The restaurant phone cannot be empty")
@Size (max = 8, message = "Name must have at most 8 characters.")
private String phone;

@NotBlank(message = " the Restaurant category cannot be left empty")
@Size (max = 30, message = "Name must have at most 30 characters.")
private String category;

//@NotBlank(message = "the restaurant description cannot be left empty")
@Size (max = 500, message = "Name must have at most 500 characters.")
private String description;

//@NotBlank(message = "We suggest that you write an email address.")
@Size (max = 50, message = "Email must have at most 50 characters.")
private String email;

/*@NotBlank(message = "placing a photo is optional")
@Size (max = 50, message = "photo is jpg")
private String fotoRestaurant;*/



    public String getnameRestaurant() {
        return nameRestaurant;
    }

    public void setnombreRestaurant(String nameRestaurant) {
        this.nameRestaurant = nameRestaurant;
    }

    public String getrestaurantAddress() {
        return restaurantAddress;
    }

    public void setrestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }
     
     public String getadditionalInformation() {
        return additionalInformation;
    }

    public void setadditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
    }

    public String getwebAddress() {
        return webAddress;
    }

    public void setwebAddress(String webAddress) {
        this.webAddress = webAddress;

    }
    public String getadvertising() {
        return advertising;
    }

    public void setadvertising(String advertising) {
        this.advertising = advertising;
    }
    /* public String getfotoRestaurant() {
        return fotoRestaurant;
    }

    public void setfotoRestaurant(String fotoRestaurant) {
        this.fotoRestaurant = fotoRestaurant;
    } */   
     public String getprovince() {
        return province;
    }

    public void setprovince(String province) {
        this.province = province;
    }
     public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;    
    }
     public String getphone() {
        return phone;
    }

    public void setphone(String phone) {
        this.phone = phone;
    } 
     public String getcategory() {
        return category;
    }

    public void setcategory(String category){
	this.category = category;
    }

           
     public String getdescription() {
        return description;
    }
    public void setdescription(String description) {
        this.description = description;
    }
}