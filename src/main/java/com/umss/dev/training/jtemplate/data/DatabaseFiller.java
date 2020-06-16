package com.umss.dev.training.jtemplate.data;

import com.umss.dev.training.jtemplate.persistence.domain.Adventure;
import com.umss.dev.training.jtemplate.service.AdventureService;

import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class DatabaseFiller {
    
    @EventListener
    public void handleContextRefresh(ContextRefreshedEvent event) {
        System.out.println("***************** SEEDING DATABASE **********************");
        seedAdventure();
    }

    private void seedAdventure(){
        AdventureService.getInstance().save(createNewAdventure("Escalada de roca", "Miraflores","30 min", "444444"));
        AdventureService.getInstance().save(createNewAdventure("Ciclismo de montaña", "genius", "1 dia", "4444333"));
        AdventureService.getInstance().save(createNewAdventure("Escalada en Roca", "Avantrip", "3 días", "45454333"));
        AdventureService.getInstance().save(createNewAdventure("CicliRace", "Avantrip", "3 días", " 88667-77-66-77"));
    }

    private Adventure createNewAdventure(String name, String nameA,String duration, String phoneNumber){
        Adventure ad = new Adventure();
        ad.setName(name);
        ad.setNameA(nameA);
        ad.setDuration(duration);
        ad.setPhoneNumber(phoneNumber);
        return ad;
    }
}