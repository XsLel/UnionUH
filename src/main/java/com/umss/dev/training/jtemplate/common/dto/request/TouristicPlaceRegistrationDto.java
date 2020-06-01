package com.umss.dev.training.jtemplate.common.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class TouristicPlaceRegistrationDto {

    @NotBlank(message = "Name can not be empty.")
    @Size(max = 255, message = "Name must have at most 255 characters.")
    private String name;

    @NotBlank(message = "Description can not be empty.")
    private String description;

    @NotBlank(message = "Address can not be empty.")
    private String address;

    @NotBlank(message = "Schedules can not be empty.")
    private String schedules;

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
