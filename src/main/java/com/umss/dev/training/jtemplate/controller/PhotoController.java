package com.umss.dev.training.jtemplate.controller;

import com.umss.dev.training.jtemplate.common.dto.response.PhotoResponseDto;
import com.umss.dev.training.jtemplate.service.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.PermitAll;
import java.util.List;

@RestController
@RequestMapping("/api/images")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @PermitAll
    @GetMapping("/{id}/restaurant")
    public ResponseEntity<List<PhotoResponseDto>> findById(@PathVariable("id") int id) {
        List<PhotoResponseDto> photoResponseDto = photoService.getPhotoByIdRestaurant(id);
        return ResponseEntity.ok(photoResponseDto);
    }

}
