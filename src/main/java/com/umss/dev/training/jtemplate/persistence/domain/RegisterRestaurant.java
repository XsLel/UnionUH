package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "restaurant")

public class RegisterRestaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String nameRestaurant;
    @Column(nullable = false)
    private String restaurantAddress;
    @Column(nullable = false)
    private String additionalInformation;
    @Column(nullable = false)
    private String province;
    @Column(nullable = false)
    private String webAddress;
    @Column(nullable = false)
    private String phone;
    @Column(nullable = false)
    private String advertising;
    @Column(nullable = false)
    private String category;
    @Column(nullable = false)
    private String description;

    //public ImageIO logo;
    
    @Column(nullable = false, unique = true, length = 50)
    private String email;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }

    public String getnameRestaurant() {
        return nameRestaurant;
    }

    public void setnameRestaurant(String nameRestaurant) {
        this.nameRestaurant = nameRestaurant;
    }

    public String restaurantAddress() {
        return restaurantAddress;
    }

    public void setrestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }

    public String getprovince() {
        return province;
    }

    public void setprovince(String province) {
        this.province = province;
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

    public String phone() {
        return phone;
    }

    public void setphone(String phone) {
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
}