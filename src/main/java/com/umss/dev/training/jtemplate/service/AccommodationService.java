package com.umss.dev.training.jtemplate.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.umss.dev.training.jtemplate.common.dto.response.AccommodationResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Accommodation;
import com.umss.dev.training.jtemplate.persistence.domain.ReviewValueEnum;
import com.umss.dev.training.jtemplate.persistence.repository.AccommodationRepository;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class AccommodationService {

    private static AccommodationService instance;

    private AccommodationRepository accommodationRepository;
    private ModelMapper modelMapper;
    
    public AccommodationService(AccommodationRepository accommodationRepository, ModelMapper modelMapper){
        this.accommodationRepository = accommodationRepository;
        this.modelMapper = modelMapper;
        instance = this;
    }

    public static AccommodationService getInstance(){
        return instance;
    }

    public void save(Accommodation value){
        accommodationRepository.save(value);
    }

    public  Iterable<AccommodationResponseDto> findAll() {
        List<AccommodationResponseDto> allUsersResponse = accommodationRepository.findAll()
                                            .stream()
                                            .sorted(Comparator.comparing(Accommodation::getReviewValue))
                                            .map(usr -> {
                                                AccommodationResponseDto response = modelMapper.map(usr, AccommodationResponseDto.class);
                                                return response;
                                            })
                                            .collect(Collectors.toList());

        return allUsersResponse;
    }

    public  Iterable<AccommodationResponseDto> filterByReviewValue(ReviewValueEnum reviewValue, String category) {
        List<AccommodationResponseDto> allUsersResponse = accommodationRepository.findAll()
                                            .stream()
                                            .sorted(Comparator.comparing(Accommodation::getReviewValue))
                                            .filter(r -> 
                                            getValue(r.getReviewValue()) <= getValue(reviewValue)
                                            && (category.equals("Todos") || category.equals(r.getCategory()))
                                            )
                                            .map(usr -> {
                                                AccommodationResponseDto response = modelMapper.map(usr, AccommodationResponseDto.class);
                                                return response;
                                            })
                                            .collect(Collectors.toList());

        return allUsersResponse;
    }

    private int getValue(ReviewValueEnum revvalue){
        int value = 5;
        switch(revvalue){
            case FiveStar:
                value = 5;
                break;
            case FourStar:
                value = 4;
                break;
            case ThreeStar:
                value = 3;
                break;
            case TwoStar:
                value = 2;
                break;
            case OneStar:
                value = 1;
                break;
        }
        return value;
    }

}
