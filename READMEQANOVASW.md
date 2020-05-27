### Herramientas necesarias

- descargar [Spring Tools 4 for Eclipse](https://spring.io/tools)
- descargar [NodeJS LTS](https://nodejs.org/es/download/)
- instalar [yarn .msi](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- descargar [Postman](https://www.postman.com/downloads/)
- descargar [VSCode](https://code.visualstudio.com/)

### Pasos para ejecutar el programa

#### 1) Ejecutar el backend

1. Abrir SpringToolSuite 4

2. Seguir esta secuencia de pasos: 
File->Import--> Maven--> Existing Maven Projects->Next-> Buscar la carpeta turismo-umss-> Seleccionar carpeta

3. Ir a la clase JTemplateServiceApplication.java que se encuentra en el paquete: src/main/java/com.umss.dev.training.jtemplate

4. Una vez encontrada dar click derecho: Run As -> 3 Spring Boot App

5. Esperar, se mostrará en la consola el mensaje Started JTemplateServiceApplication indicandonos que ya se levantó el backend.

#### 2) Añadir datos de un restaurante a H2

1. Abrir Postman

2. Abrir una pestaña para hacer la petición

3. Cambiar **GET** a **POST**

4. Ingresar la siguiente url: `localhost:8585/api/restaurantes/save`

5. Dirigirse a la pestaña de **HEADERS** y poner en la primera columna **Accept** y en la segunda columna poner **application/json** y marcar la fila

6. Dirigirse a la pestaña de **BODY** y pegar el siguiente ejemplo:
```json
{
	"name": "Kingdom",
	"province": "Cercado",
	"direction": "Av. América",
	"information": "Venta de pollo broaster",
	"phone": 74859612,
	"website": "www.kingdom.com",
	"email": "kingdom@gmail.com",
	"commercial": "Facebook",
	"category": "comida rápida",
	"description": "Los mejores pollos solo puedes encontrarlos aquí en Kingdom",
	"photos": [
		{
			"url": "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg",
			"carousel": true,
			"food": true,
			"home": true
		},
		{
			"url": "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
			"carousel": true
		},
		{
			"url": "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
			"food": true,
			"carousel": true
		},
		{
			"url": "https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_960_720.jpg",
			"food": true,
			"home": false
		},
		{
			"url": "https://cdn.pixabay.com/photo/2015/08/01/13/46/cafe-870276_960_720.jpg",
			"food": false,
			"home": true
		},
		{
			"url": "https://cdn.pixabay.com/photo/2015/03/26/10/07/restaurant-690975_960_720.jpg",
			"food": false
		}
	]
}
```
#### Registrando una foto individualmente
- Ingrese la siguiente url: `localhost:8585/api/restaurantes/1/photos`, donde **1** es el id del restaurante donde quieres registrar la imagen, donde el **1** tendría que cambiar, según el id del restaurante al cuál se quiere resgistrar la foto.
```json
{
	"url": "https://cdn.pixabay.com/photo/2015/03/26/10/07/restaurant-690975_960_720.jpg",
	"carousel": true
}
```
- Para obtener la información de un restaurante, tiene que poner en Postman la siguiente url: `localhost:8585/api/restaurantes/1` donde **1** es el id del restaurante que quiere obtener su información y debe cambiar a **GET**

##### NOTA
Se puede cambiar el ejemplo, name es nombre del restaurante, province la provincia del restaurante, así sucesivamente, la parte **photos** es un arreglo que tiene 3 atributos:
url -> indica la url de la imagen
carousel -> es un booleano que indica si la imagen estará o no en el carrusel
food -> es un booleano que si es **true** indica que la imagen pertenece a la galería de comida, si es **false** entonces pertenece a la galería de los ambientes del restaurante.

### 3) Levantar el servicio de Frontend

1. Abrir la carpeta **client** del proyecto en VScode

3. Abrir la terminal de VSCode y ejecutar los siguientes comandos:
    npm install 
	yarn--version
	npm install react-responsive-carousel --save

4. Levantar el servicio del frontend:
	npm start
    ##### NOTA: lo más probable es que automaticamente se cargue la página por defecto en un navegador.

### Prueba

- Para verificar que todo está funcionando, abra su navegador e ingrese a la siguiente url: `localhost:3000/restaurants/1`, dónde **1** es el id del restaurante que quiere ver su información en el frontend, donde el **1** tendría que cambiar, según el id del restaurante del cuál se quiere ver su infromación.

- Hay 2 enlaces que dirigen una a galería de comida y otra a galería del restaurante los cuáles son: **Galeria Comida** y **Galeria Restaurante**.