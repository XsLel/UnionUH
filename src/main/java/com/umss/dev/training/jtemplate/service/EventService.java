package com.umss.dev.training.jtemplate.service;

import java.util.List;
import java.util.stream.Collectors;

import com.umss.dev.training.jtemplate.common.dto.response.EventResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.Event;
import com.umss.dev.training.jtemplate.persistence.repository.EventRepository;

import org.modelmapper.ModelMapper;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private static EventService instance;

    private EventRepository eventRepository;
    private ModelMapper modelMapper;
   
    
    public EventService(EventRepository eventRepository, ModelMapper modelMapper){
        this.eventRepository = eventRepository;
        this.modelMapper = modelMapper;
        instance = this;
    }

    public static EventService getInstance(){
        return instance;
    }

    public void save(Event event){
        eventRepository.save(event);
    }

    public  Iterable<EventResponseDto> findAll() {
        List<EventResponseDto> allUsersResponse = eventRepository.findAll()
                                            .stream()
                                           // .sorted(Comparator.comparing(Event::getReviewValue))
                                            .map(usr -> {
                                                EventResponseDto response = modelMapper.map(usr, EventResponseDto.class);
                                                return response;
                                            })
                                            .collect(Collectors.toList());

        return allUsersResponse;
    }

  

    
}


