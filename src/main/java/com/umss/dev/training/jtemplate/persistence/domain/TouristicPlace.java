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
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String schedules;

    // public TouristicPlace(Long id, String name, String description, String address, String schedules) {
    //     this.id = id;
    //     this.name = name;
    //     this.description = description;
    //     this.address = address;
    //     this.schedules = schedules;
    // }

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
}
