package com.umss.dev.training.jtemplate.data;

import com.umss.dev.training.jtemplate.persistence.domain.Adventure;
import com.umss.dev.training.jtemplate.service.AdventureService;
import com.umss.dev.training.jtemplate.common.dto.request.RestaurantRegistration;
import com.umss.dev.training.jtemplate.service.RestaurantService;

import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class DatabaseFiller {
    
    @EventListener
    public void handleContextRefresh(ContextRefreshedEvent event) {
        System.out.println("***************** SEEDING DATABASE **********************");
        seedAdventure();
        seedRestaurants();
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

    private void seedRestaurants(){
        RestaurantService.getInstance().save(createNewRestaurant("Burger King", "Prado #1024", 4445566, "Comida rápida"
        , "Lunes a Viernes de 11:15 a 23:00", 4));
        RestaurantService.getInstance().save(createNewRestaurant("Miraflores", "Prado #1024", 45588666, "Restaurante"
        , "Lunes Miercoles y Jueves de 10:30 a 20:00", 5));
        RestaurantService.getInstance().save(createNewRestaurant("La cabaña de la torre", "Av. Test", 49756213, "Comida rápida"
        , "Lunes a Viernes de 08:00 a 15:00", 3));
        RestaurantService.getInstance().save(createNewRestaurant("Panchita", "Av. Libertador Esq. Humbolt", 41986565, "Comida rápida"
        , "Sábado y Domingo de 15:00 a 23:00", 2));
    }

    private RestaurantRegistration createNewRestaurant(String name, String direction, long phone, String description, String information, double qualification){
        RestaurantRegistration rest = new RestaurantRegistration();
        rest.setName(name);
        rest.setDirection(direction);
        rest.setPhone(phone);
        rest.setDescription(description);
        rest.setQualification(qualification);
        rest.setInformation(information);

        rest.setCategory("Comida");
        rest.setCommercial("Test");
        rest.setEmail("mail@mail.com");
        rest.setProvince("Cercado");
        rest.setWebsite("www.web.com");
        return rest;        
    }
}