package com.umss.dev.training.jtemplate.common.dto.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class AdventureRegistrationDto {

    @NotNull
    @Size(min = 5, max = 255, message = "El nombre no es válido")
    private String nameAdventure;
    @NotNull
    @Size(min = 5, max = 255, message = "El nombre de la agencia no es válido")
    private String nameAgency;
    @NotNull
    @Size(min = 5, max = 255, message = "La duración no es válida")
    @NotNull
    private String duration;
    @NotNull
    private String phoneNumber;

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