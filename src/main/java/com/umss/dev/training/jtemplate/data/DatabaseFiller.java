package com.umss.dev.training.jtemplate.data;

import com.umss.dev.training.jtemplate.persistence.domain.Event;
import com.umss.dev.training.jtemplate.service.EventService;

import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class DatabaseFiller {
    
    @EventListener
    public void handleContextRefresh(ContextRefreshedEvent event) {
        System.out.println("***************** SEEDING DATABASE **********************");
        seedEvent();
    }

    private void seedEvent(){
        EventService.getInstance().save(createEvent("Virgen de la Candelaria", "2020-02-02"));
        EventService.getInstance().save(createEvent("Día del Estado Plurinacional de Bolivia", "2020-01-23"));
        EventService.getInstance().save(createEvent("Aniversario de Tapacarí", "2020-01-26"));
        EventService.getInstance().save(createEvent("Día de la madre", "2020-05-27"));
        EventService.getInstance().save(createEvent("Santa Vera Cruz Tatala", "2020-05-02"));
        EventService.getInstance().save(createEvent("Santa Vera Cruz Tatala", "2020-05-03"));
        EventService.getInstance().save(createEvent("Día del peatón", "2020-04-01"));
        EventService.getInstance().save(createEvent("Virgen de Urkupiña", "2020-08-15"));
        EventService.getInstance().save(createEvent("Aniversario Departamental", "2020-09-14"));
        EventService.getInstance().save(createEvent("Festividad del señor de mayo", "2020-05-13"));
        EventService.getInstance().save(createEvent("Festividad de San Antonio", "2020-06-13"));
        EventService.getInstance().save(createEvent("Festividad Perpetuo socorro", "2020-05-26"));
        EventService.getInstance().save(createEvent("Año nuevo andino", "2020-06-21"));
        EventService.getInstance().save(createEvent("Virgen del carmen", "2020-07-16"));
        EventService.getInstance().save(createEvent("Aniversario de Bolivia", "2020-08-06"));        
    }

    private Event createEvent(String title, String date){
        Event ev = new Event();
        ev.setTitle(title);
        ev.setDate(date);
        return ev;
    }
}