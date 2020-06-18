package com.umss.dev.training.jtemplate.controller;

import javax.annotation.security.PermitAll;

import com.umss.dev.training.jtemplate.common.dto.response.AccommodationResponseDto;
import com.umss.dev.training.jtemplate.persistence.domain.ReviewValueEnum;
import com.umss.dev.training.jtemplate.service.AccommodationService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/accommodations")
public class AccommodationController {
    
    private AccommodationService service;

    public AccommodationController(AccommodationService service){
        this.service = service;
    }

    @PermitAll
    @GetMapping("/filter/{reviewValue}/{category}")
    public ResponseEntity<Iterable<AccommodationResponseDto>> filterByReviewValue(@PathVariable("reviewValue") int reviewValue
    ,@PathVariable("category") String category) {
        ReviewValueEnum value = ReviewValueEnum.OneStar;
        switch(reviewValue){
            case 1:
                value = ReviewValueEnum.OneStar;
                break;
            case 2:
                value = ReviewValueEnum.TwoStar;
                break;
            case 3:
                value = ReviewValueEnum.ThreeStar;
                break;
            case 4:
                value = ReviewValueEnum.FourStar;
                break;
            case 5:
                value = ReviewValueEnum.FiveStar;
                break;
        }

        Iterable<AccommodationResponseDto> accommodationsResponse = service.filterByReviewValue(value, category);
        return ResponseEntity.ok(accommodationsResponse);
    }
}
