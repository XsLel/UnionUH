package com.umss.dev.training.jtemplate.common.dto.response;

import com.umss.dev.training.jtemplate.common.dto.request.RoleRegistrationDto;

import java.util.Set;

public class RegisterRestaurantDto {
    private String nombreRestaurante;
    private String direccionRestaurante;
    private String provincia;
    private String informacionAdicional;
    private String email;
    private String direccionWeb;
    private Integer telefono;
    private String publicidad;
    private String categoria;
    //private ImageIO fotoRestaurante;
    private String descripción;


    public String getnombreRestaurante() {
        return nombreRestaurante;
    }

    public void setnombreRestaurante(String nombreRestaurante) {
        this.nombreRestaurante = nombreRestaurante;
    }

    public String getEdireccionRestaurante() {
        return direccionRestaurante;
    }

    public void setdireccionRestaurante(String direccionRestaurante) {
        this.direccionRestaurante = direccionRestaurante;
    }

    public String getprovincia() {
        return provincia;
    }

    public void setprovincia(String provincia) {
        this.provincia = provincia;
    }

    public String getinformacionAdicional() {
        return informacionAdicional;
    }

    public void setinformacionAdicional(String informacionAdicional) {
        this.informacionAdicional = informacionAdicional;
    }

    public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;
    }

    public String getdireccionWeb() {
        return direccionWeb;
    }

    public void setdireccionWeb(String direccionWeb) {
        this.direccionWeb = direccionWeb;
    }

    public Integer gettelefono() {
        return telefono;
    }

    public void settelefono(Integer telefono) {
        this.telefono = telefono;
    }
    public String getpublicidad() {
        return publicidad;
    }

    public void setpublicidad(String publicidad) {
        this.publicidad = publicidad;
    }
    public String getcategoria() {
        return categoria;
    }

    public void setcategoria(String categoria) {
        this.categoria = categoria;
    }
    public String getdescripción() {
        return descripción;
    }

    public void setdescripción(String descripción) {
        this.descripción = descripción;
    }
}
