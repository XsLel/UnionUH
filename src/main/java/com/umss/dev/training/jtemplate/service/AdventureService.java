package com.umss.dev.training.jtemplate.service;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.umss.dev.training.jtemplate.common.dto.response.AdventureResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Adventure;
import com.umss.dev.training.jtemplate.persistence.repository.AdventureRepository;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class AdventureService {

    private static AdventureService instance;

    private AdventureRepository adventureRepository;
    private ModelMapper modelMapper;
    
    public AdventureService(AdventureRepository adventureRepository, ModelMapper modelMapper){
        this.adventureRepository = adventureRepository;
        this.modelMapper = modelMapper;
        instance = this;
    }

    public static AdventureService getInstance(){
        return instance;
    }

    public void save(Adventure adventure){
        adventureRepository.save(adventure);
    }

    public  Iterable<AdventureResponseDto> findAll() {
        List<AdventureResponseDto> allUsersResponse =adventureRepository.findAll()
                                            .stream()
                                            .sorted(Comparator.comparing(Adventure::getName))
                                            .map(usr -> {
                                                AdventureResponseDto response = modelMapper.map(usr, AdventureResponseDto.class);
                                                return response;
                                            })
                                            .collect(Collectors.toList());

        return allUsersResponse;
    }

}


    
