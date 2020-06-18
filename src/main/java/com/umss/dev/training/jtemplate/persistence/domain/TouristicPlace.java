package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.*;

@Entity
@Table(name = "touristic_place")
public class TouristicPlace {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false, unique = true, length = 255)
    private String name;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;
    @Column(nullable = false, columnDefinition = "TEXT")
    private String address;
    @Column(nullable = false)
    private String schedules;
    @Column(nullable = false)
    private double lat;
    @Column(nullable = false)
    private double lng;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSchedules() {
        return schedules;
    }

    public void setSchedules(String schedules) {
        this.schedules = schedules;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }
}
