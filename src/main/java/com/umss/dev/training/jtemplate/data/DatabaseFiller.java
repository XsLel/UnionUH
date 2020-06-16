package com.umss.dev.training.jtemplate.data;

import java.math.BigDecimal;

import com.umss.dev.training.jtemplate.persistence.domain.Accommodation;
import com.umss.dev.training.jtemplate.persistence.domain.ReviewValueEnum;
import com.umss.dev.training.jtemplate.service.AccommodationService;
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
        seedAccommodation();
        seedRestaurants();
    }

    private void seedAccommodation() {
        AccommodationService.getInstance().save(getNewAccommodationTest("-17.377914", "-66.15228"
        , "El Gran Hotel Cochabamba está ubicado en un edificio histórico en Cochabamba, "
        +"en el tradicional barrio de La Recoleta, y ofrece habitaciones de lujo..." 
        ,"Gran Hotel Cochabamba", "4445206"
        , ReviewValueEnum.FiveStar, "Hotel"));
        AccommodationService.getInstance().save(getNewAccommodationTest("-17.368654", "-66.16329"
        , "Ubicado en una de las mejores zonas de Cochabamba, está a 15 minutos del aeropuerto, a 5 "
        +"minutos del centro de la ciudad y alrededor encontraras cajeros automáticos..."
        ,"Hotel Camino Plaza", "4446359"
        , ReviewValueEnum.FourStar, "Hotel"));
        AccommodationService.getInstance().save(getNewAccommodationTest("-17.361668", "-66.16126"
        , "Hotel La Colonia tiene como dicha la ubicación, ya que Retalhuleu es uno de los departamentos que "
        +"tiene riqueza en flora y fauna, además de que cuenta con un parque de diversiones..."
        , "Hotel Colonia", "4442131"
        , ReviewValueEnum.ThreeStar, "Hotel"));
        AccommodationService.getInstance().save(getNewAccommodationTest("-17.3809757", "-66.1614621"
        , "El Hostal Olympic ofrece alojamiento con WiFi gratis en una zona privilegiada de la ciudad de Cochabamba, "
        +"rodeado de restaurantes y tiendas locales."
        , "Hostal Olympic", "4443856"
        , ReviewValueEnum.ThreeStar, "Hostal"));
        AccommodationService.getInstance().save(getNewAccommodationTest("-17.3750883", "-66.177272"
        , "Descubre por qué tantos viajeros ven Hotel Heroinas como el hotel pequeño ideal cuando visitan Cochabamba."
        +" Además de aportar la combinación ideal de calidad, comodidad y ubicación..."
        , "Hotel Heroinas", "4443306"
        , ReviewValueEnum.TwoStar, "Hotel"));
        AccommodationService.getInstance().save(getNewAccommodationTest("-17.377954", "-66.176283"
        , "El Hostal Versalles se encuentra a 2 calles de la estación de autobuses, y ofrece alojamiento en Cochabamba. Hay conexión Wi-Fi gratuita."
        , "Hotel versalles", "4446206"
        , ReviewValueEnum.TwoStar, "Hostal"));
    }

    private Accommodation getNewAccommodationTest(String latitude, String longitude, String description, String name, String phone, ReviewValueEnum rat, String category){
        Accommodation res = new Accommodation();
        res.setLocationLatitude(new BigDecimal(latitude));
        res.setLocationLongitude(new BigDecimal(longitude));
        res.setName(name);
        res.setPhoneNumber(phone);
        res.setReviewValue(rat);
        res.setCategory(category);
        res.setDescription(description);
        return res;
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