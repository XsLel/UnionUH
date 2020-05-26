package com.comentariosValoracion.demo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.comentariosValoracion.demo.pojos.LugarTuristico;
import com.comentariosValoracion.demo.pojos.Usuario;

@SpringBootTest
class ComentariosValoracionDemoApplicationTests {

	@Test
	void createPersistance() {
		/*EntityManagerFactory emfactory = Persistence.createEntityManagerFactory( "Eclipselink_JPA" );
		EntityManager entitymanager = emfactory.createEntityManager( );
		entitymanager.getTransaction( ).begin( );
		
		//creating Entity LugarTuristico
			LugarTuristico lugarAct = new LugarTuristico();
			lugarAct.setIdlugarturistico(1);
			lugarAct.setNombre("Amazonas");
			 byte[ ] thumbnail = new byte[4];
			lugarAct.setFotothumbnail(thumbnail);
			lugarAct.setDescripcion("Salvaje");
			
			entitymanager.persist(lugarAct);
		
		//Creating Entity Usuario
			Usuario usuarioAct = new Usuario();
			usuarioAct.setIdusuario(1);
			usuarioAct.setNombreusuario("Alison Guzman");
			usuarioAct.setCorreo("alison10guz@gmail.com");
			
			entitymanager.persist(usuarioAct);
			
		//Creating Entity Comentario
			Comentario comentarioAct = new Comentario();
			comentarioAct.setIdcomentario(1);
			comentarioAct.setIdLugarTuristico(lugarAct.getIdlugarturistico());
			
			
			entitymanager.getTransaction().commit();
		      entitymanager.close();
		      emfactory.close();*/
		      
	}

}
