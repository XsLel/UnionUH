package com.umss.dev.training.jtemplate.common.dto.response;

//import com.umss.dev.training.jtemplate.common.dto.request.RoleRegistrationDto;

//import java.util.Set;

public class RegisterRestaurantDto {

    private String nameRestaurant;
    private String restaurantAddress;
    private String additionalInformation;
    private String email;
    private String webAddress;
    private Number phone;
    private String advertising;
    private String category;
    private String description;
    private String  province;

  



    public String getnameRestaurant() {
        return nameRestaurant;
    }

    public void setnameRestaurant(String nameRestaurant) {
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

    public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;
    }

    public String getwebAddress() {
        return webAddress;
    }

    public void setwebAddress(String webAddress) {
        this.webAddress = webAddress;
    }

    public Number getphone() {
        return phone;
    }

    public void setphone(Number phone) {
        this.phone = phone;
    }
    public String getadvertising() {
        return advertising;
    }

    public void setadvertising(String advertising) {
        this.advertising = advertising;
    }

    
    public String getcategory() {
        return category;
    }

    public void setcategory(String category) {
        this.category = category;
    
    }
    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;

    }
    public String getprovince() {
        return province;
    }

    public void setprovince(String province) {
        this.province = province; 
    }       
}