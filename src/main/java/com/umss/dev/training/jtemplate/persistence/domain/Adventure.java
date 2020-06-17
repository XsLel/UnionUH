package com.umss.dev.training.jtemplate.persistence.domain;

import javax.persistence.*;

@Entity
@Table(name = "Adventure")
public class Adventure {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private String nameAdventure;
    @Column(nullable = true)
    private String nameAgency;
    @Column(nullable = false)
    private String duration;
    @Column(nullable = false)
    private String phoneNumber;

    @ManyToMany(cascade = CascadeType.ALL)

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return nameAdventure;
    }

    public void setName(String name) {
        this.nameAdventure = name;
    }

    public String getNameAgency() {
        return nameAgency;
    }

    public void setNameAgency(String nameA) {
        this.nameAgency = nameA;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}