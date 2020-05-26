package com.comentariosValoracion.demo.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DtoNoEncontradoException extends RuntimeException {

    public DtoNoEncontradoException(String objName, Integer Id) {
    	super("%s con id = %s no pudo ser encontrado.".format(objName,Id));
    }
}