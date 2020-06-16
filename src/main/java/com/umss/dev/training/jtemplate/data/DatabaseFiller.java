package com.umss.dev.training.jtemplate.data;

import com.umss.dev.training.jtemplate.persistence.domain.Tour;
import com.umss.dev.training.jtemplate.service.TourService;

import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class DatabaseFiller {
    
    @EventListener
    public void handleContextRefresh(ContextRefreshedEvent event) {
        System.out.println("***************** SEEDING DATABASE **********************");
        seedTours();
    }

    private void seedTours() {
        if(TourService.getInstance().getCount() <= 0){
            Tour t1 = new Tour();
            t1.setName("Cristo de la Concordia");
            t1.setCompanyName("Tours Bolivia S.A.");
            t1.setPlace("Cerro San Pedro - Teleférico - Cristo de la Concordia");
            t1.setDuration("5 Horas");
            t1.setContactInformation("444-55-286");
            TourService.getInstance().InsertValue(t1);
            Tour t2 = new Tour();
            t2.setName("Plaza Colón");
            t2.setCompanyName("Tours Bolivia S.A.");
            t2.setPlace("El prado - Plaza Colón");
            t2.setDuration("8 Horas");
            t2.setContactInformation("458-99-276");
            TourService.getInstance().InsertValue(t2);
        }
    }
}