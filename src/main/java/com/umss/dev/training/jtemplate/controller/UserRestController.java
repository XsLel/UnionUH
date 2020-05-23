package com.umss.dev.training.jtemplate.controller;

import com.umss.dev.training.jtemplate.common.dto.request.UserRegistrationDto;
import com.umss.dev.training.jtemplate.common.dto.response.UserResponseDto;
import com.umss.dev.training.jtemplate.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserRestController {

    private UserService service;


    public UserRestController(UserService service) {
        this.service = service;
    }

    @Secured("USER")
    @GetMapping
    public ResponseEntity<Iterable<UserResponseDto>> findAll() {
        Iterable<UserResponseDto> usersResponse = service.findAll();
        return ResponseEntity.ok(usersResponse);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDto> findById(@PathVariable("id") Long id) {
        UserResponseDto userResponse = service.findById(id);
        return ResponseEntity.ok(userResponse);
    }

    @PermitAll
    @PostMapping
    public ResponseEntity<UserResponseDto> save(@Valid @RequestBody final UserRegistrationDto userDto) {

        UserResponseDto persistedUser = service.save(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(persistedUser);
    }

    @PermitAll
    @GetMapping("/test-react")
    public ResponseEntity<String> getTestMessageForReactApp() {
        String testMessage = "Test message from SpringBoot Server at " + LocalDateTime.now();
        return ResponseEntity.ok(testMessage);
    }

    @PermitAll
    @GetMapping("/posts")
    public ResponseEntity<Object> getTestPostForReact() {
        List<Object> entities = new ArrayList<Object>();
        Object post = new Object() {
            public final String userId = "1";
            public final String id = "1";
            public final String title = "New Post";
            public final String body = "Post Body";
        };
        entities.add(post);

        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @PermitAll
    @GetMapping("/users")
    public ResponseEntity<Object> getTestUserForReact() {
        List<Object> entities = new ArrayList<Object>();
        Object user = new Object() {
            public final String id = "1";
            public final String name = "test user";
            public final String email = "test email";
            public final Object company = new Object(){
                public final String name = "testCompany";
            };
        };
        entities.add(user);

        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @GetMapping("/hola")
    @ResponseBody
    public String hola() {
 
        return "has hecho una peticion get";
 
    }
}
