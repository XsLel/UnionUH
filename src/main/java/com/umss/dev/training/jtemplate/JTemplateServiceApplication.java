package com.umss.dev.training.jtemplate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@ComponentScan({"com.umss.dev.training.controller"})
@SpringBootApplication
public class JTemplateServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(JTemplateServiceApplication.class, args);
	}

}
