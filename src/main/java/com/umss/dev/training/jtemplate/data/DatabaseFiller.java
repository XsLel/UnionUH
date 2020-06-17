package com.umss.dev.training.jtemplate.data;

import java.math.BigDecimal;

import com.umss.dev.training.jtemplate.persistence.domain.Accommodation;
import com.umss.dev.training.jtemplate.persistence.domain.ReviewValueEnum;
import com.umss.dev.training.jtemplate.service.AccommodationService;
import com.umss.dev.training.jtemplate.persistence.domain.Adventure;
import com.umss.dev.training.jtemplate.service.AdventureService;
import com.umss.dev.training.jtemplate.persistence.domain.Tour;
import com.umss.dev.training.jtemplate.service.TourService;
import com.umss.dev.training.jtemplate.persistence.domain.Event;
import com.umss.dev.training.jtemplate.service.EventService;
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
                seedAdventure();
                seedTours();
                seedRestaurants();
                seedEvent();
        }

        private void seedTours() {
                if (TourService.getInstance().getCount() <= 0) {
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

        private void seedEvent() {
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

        private Event createEvent(String title, String date) {
                Event ev = new Event();
                ev.setTitle(title);
                ev.setDate(date);
                return ev;
        }

        private void seedAdventure() {
                AdventureService.getInstance()
                                .save(createNewAdventure("Escalada de roca", "Miraflores", "30 min", "444444"));
                AdventureService.getInstance()
                                .save(createNewAdventure("Ciclismo de montaña", "genius", "1 dia", "4444333"));
                AdventureService.getInstance()
                                .save(createNewAdventure("Escalada en Roca", "Avantrip", "3 días", "45454333"));
                AdventureService.getInstance()
                                .save(createNewAdventure("CicliRace", "Avantrip", "3 días", " 88667-77-66-77"));
        }

        private Adventure createNewAdventure(String name, String nameA, String duration, String phoneNumber) {
                Adventure ad = new Adventure();
                ad.setName(name);
                ad.setNameAgency(nameA);
                ad.setDuration(duration);
                ad.setPhoneNumber(phoneNumber);
                return ad;
        }

        private void seedAccommodation() {
                AccommodationService.getInstance().save(getNewAccommodationTest("-17.377914", "-66.15228",
                                "El Gran Hotel Cochabamba está ubicado en un edificio histórico en Cochabamba, "
                                                + "en el tradicional barrio de La Recoleta, y ofrece habitaciones de lujo...",
                                "Gran Hotel Cochabamba", "4445206", ReviewValueEnum.FiveStar, "Hotel"));
                AccommodationService.getInstance().save(getNewAccommodationTest("-17.368654", "-66.16329",
                                "Ubicado en una de las mejores zonas de Cochabamba, está a 15 minutos del aeropuerto, a 5 "
                                                + "minutos del centro de la ciudad y alrededor encontraras cajeros automáticos...",
                                "Hotel Camino Plaza", "4446359", ReviewValueEnum.FourStar, "Hotel"));
                AccommodationService.getInstance().save(getNewAccommodationTest("-17.361668", "-66.16126",
                                "Hotel La Colonia tiene como dicha la ubicación, ya que Retalhuleu es uno de los departamentos que "
                                                + "tiene riqueza en flora y fauna, además de que cuenta con un parque de diversiones...",
                                "Hotel Colonia", "4442131", ReviewValueEnum.ThreeStar, "Hotel"));
                AccommodationService.getInstance().save(getNewAccommodationTest("-17.3809757", "-66.1614621",
                                "El Hostal Olympic ofrece alojamiento con WiFi gratis en una zona privilegiada de la ciudad de Cochabamba, "
                                                + "rodeado de restaurantes y tiendas locales.",
                                "Hostal Olympic", "4443856", ReviewValueEnum.ThreeStar, "Hostal"));
                AccommodationService.getInstance().save(getNewAccommodationTest("-17.3750883", "-66.177272",
                                "Descubre por qué tantos viajeros ven Hotel Heroinas como el hotel pequeño ideal cuando visitan Cochabamba."
                                                + " Además de aportar la combinación ideal de calidad, comodidad y ubicación...",
                                "Hotel Heroinas", "4443306", ReviewValueEnum.TwoStar, "Hotel"));
                AccommodationService.getInstance().save(getNewAccommodationTest("-17.377954", "-66.176283",
                                "El Hostal Versalles se encuentra a 2 calles de la estación de autobuses, y ofrece alojamiento en Cochabamba. Hay conexión Wi-Fi gratuita.",
                                "Hotel versalles", "4446206", ReviewValueEnum.TwoStar, "Hostal"));
        }

        private Accommodation getNewAccommodationTest(String latitude, String longitude, String description,
                        String name, String phone, ReviewValueEnum rat, String category) {
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

        private void seedRestaurants() {
                RestaurantService.getInstance().save(createNewRestaurant("Burger King", "Prado #1024", 4445566,
                                "Comida rápida", "Lunes a Viernes de 11:15 a 23:00", 4));
                RestaurantService.getInstance().save(createNewRestaurant("Miraflores", "Prado #1024", 45588666,
                                "Restaurante", "Lunes Miercoles y Jueves de 10:30 a 20:00", 5));
                RestaurantService.getInstance().save(createNewRestaurant("La cabaña de la torre", "Av. Test", 49756213,
                                "Comida rápida", "Lunes a Viernes de 08:00 a 15:00", 3));
                RestaurantService.getInstance().save(createNewRestaurant("Panchita", "Av. Libertador Esq. Humbolt",
                                41986565, "Comida rápida", "Sábado y Domingo de 15:00 a 23:00", 2));
        }

        private RestaurantRegistration createNewRestaurant(String name, String direction, long phone,
                        String description, String information, double qualification) {
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