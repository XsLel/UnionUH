package com.umss.dev.training.jtemplate.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.umss.dev.training.jtemplate.common.dto.request.TouristicPlaceRegistrationDto;
import com.umss.dev.training.jtemplate.common.dto.response.TouristicPlaceResponseDto;
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
        touristicPlace = repository.save(touristicPlace);
        TouristicPlaceResponseDto touristicPlaceRes = modelMapper.map(touristicPlace, TouristicPlaceResponseDto.class);
        return touristicPlaceRes;
    }
}
