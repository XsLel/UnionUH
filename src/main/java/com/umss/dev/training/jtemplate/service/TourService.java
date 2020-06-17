package com.umss.dev.training.jtemplate.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import com.umss.dev.training.jtemplate.persistence.domain.Tour;
import com.umss.dev.training.jtemplate.persistence.repository.TourRepository;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class TourService {

    private static TourService instance;
    private TourRepository tourRepository;
    private ModelMapper modelMapper;

    public TourService(TourRepository tourRepository, ModelMapper modelMapper){
        this.tourRepository = tourRepository;
        this.modelMapper = modelMapper;
        instance = this;
    }

    public static TourService getInstance(){
        return instance;
    }

    public  Iterable<Tour> findAll() {
        List<Tour> allToursResponse = tourRepository.findAll()
                                            .stream()
                                            .sorted(Comparator.comparing(Tour::getName))
                                            .map(val -> {
                                                Tour response = modelMapper.map(val, Tour.class);
                                                return response;
                                            })
                                            .collect(Collectors.toList());

        return allToursResponse;
    }

    public void InsertValue(Tour tour){
        tourRepository.save(tour);
    }

    public long getCount(){
        return tourRepository.count();
    }
}