package com.umss.dev.training.jtemplate.data;

import com.umss.dev.training.jtemplate.persistence.domain.Tour;
import com.umss.dev.training.jtemplate.service.TourService;
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
        seedTours();
        seedRestaurants();
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