package com.umss.dev.training.jtemplate.service;

import java.sql.SQLException;

import org.hibernate.JDBCException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.TouristicPlaceRegistrationDto;
import com.umss.dev.training.jtemplate.common.dto.response.TouristicPlaceResponseDto;
import com.umss.dev.training.jtemplate.exception.DuplicateEntryException;
import com.umss.dev.training.jtemplate.persistence.domain.TouristicPlace;
import com.umss.dev.training.jtemplate.persistence.repository.TouristicPlaceRepository;

@Service
public class TouristicPlaceService {

    @Autowired
    private TouristicPlaceRepository repository;
    private ModelMapper modelMapper;

    public TouristicPlaceService(TouristicPlaceRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public TouristicPlaceResponseDto save(TouristicPlaceRegistrationDto touristicPlaceReq) {
        TouristicPlace touristicPlace = modelMapper.map(touristicPlaceReq, TouristicPlace.class);
        try {
            touristicPlace = repository.save(touristicPlace);
        } catch (DataIntegrityViolationException ex) {
            SQLException sqlEx = ((JDBCException) ex.getCause()).getSQLException();
            int errorCode = sqlEx.getErrorCode();

            // Duplicate entry error code for MySQL and H2
            if (errorCode == 1062 || errorCode == 23505) {
                throw new DuplicateEntryException("Duplicate entry for 'name' field");
            }
        }
        return modelMapper.map(touristicPlace, TouristicPlaceResponseDto.class);
    }
}
