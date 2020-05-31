import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const AddComidas = () => {

    let history = useHistory();
    const [user, setUser] = useState({
        nombre: "",
        precio: "",
        descricion: "",  
        categoria: "",
        ingredientes: "",
        diasDisponibles:"",
        cantidadPorciones:""
      });
       const { nombre, precio, descricion, categoria, ingredientes, diasDisponibles, cantidadPorciones } = user;

      
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const handleInput = (e) => {
        let index = e.target.selectedIndex;
         console.log(e.target.options[index].text); // obtiene el texto de la opción seleccionada
        
         setUser({...user, [e.target.name]: e.target.options[index].text});
     };
     
    const yourConfig = {
      headers: {
        "Content-Type": "application/json",
        "Authorization":"My.Jwt.Secret.Key.0ca5d050-6595-11ea-bc55-0242ac130003"
      }

   };
   
    
      const onSubmit = async e => {
        
          axios.post("http://localhost:8585/api/food", user,yourConfig)
            .then(response => {
              console.log(response);
            })
            .catch(erro => {
              console.log(erro.response);
            });
            history.push("/");
      };
     

     
    return ( 
        <div className="cont">
        <div className="w-75 mx-auto shadow p-5">
          <h3></h3>
            <h2 className="ui header" align="center" >Registro de Comida</h2>
          <h5 className="ui header">Los campos con * son obligatorios</h5>
          <form onSubmit={e => onSubmit(e)}>
            <div className="ui input">
              <label>Nombre* </label> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="text"
                class="ui input"
                className="cajaNombre"
                placeholder="ingrese nombre de comida"
                autocomplete = "off"
                name="nombre"
                value={nombre}
                required 
                minlength="3" maxlength="30"
                pattern="[A-Za-z].*"
                onChange={e => onInputChange(e)}
              />

              
            </div>
            <br/><br/>
            <div className="ui input">
            <label>Precio BS* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                className="cajaPrecio"
                placeholder="Precio de la Comida"
                name="precio"
                value={precio}
                max="500"
                min="0"
                required
                onChange={e => onInputChange(e)}
              />
                 
            </div>
            <br/><br/>
            <div className="ui input">
              <label>Descripcion* </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                autocomplete = "off"
                type="text"
                className="cajaDescripcion"
                placeholder="Ingrese descripcion de la comida"
                name="descricion"
                value={descricion}
                required
                maxlength="2000"
                minLength="10"
                pattern="[A-Za-z0-9].*"
                onChange={e => onInputChange(e)}
              />
            </div>
            <br/><br/>
            <div className="ui input">
              <label>Categoria* </label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select  
                          className="ui dropdown"
                          id="cajaCategoria"
                           name="categoria"
                           value={categoria}
                           
                          onChange={e => handleInput(e)}
                          required
                     >
   
                       <option value="" >seleccione una opción</option>
                       <option> Comida</option>
                       <option >Bebida</option> 
                       <option >Postre</option>
                   </select>
         




               </div>
            <br/><br/>
            <div className="ui input">
            <label>Ingredientes* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                autocomplete = "off"
                type="text"
                className="cajaIngredientes"
                placeholder="Ingredientes de la Comida"
                name="ingredientes"
                value={ingredientes}
                required
                maxLength="500"
                minLength="3"
                pattern="[A-Za-z].*"
                onChange={e => onInputChange(e)}
              />
              
            </div>
            <br/><br/>
            <div className="ui input">
         
            <label>Dias Disponibles
                  
               </label>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
            <select name="skills" multiple="" class="ui fluid check"       
                          size="7" 
                          id="cajaDias" 
                          placeholder="Dias Disponibles"
                          name="diasDisponibles"
                          required
                          onChange={e => handleInput(e)}
                          
                          class="ui fluid search dropdown" multiple="multiple"
                     >
                       <option value="" selected>seleccione una opción</option>
                            <option value="lunes">Lunes</option>
                            <option value="martes">Martes</option>
                            <option value="Miercoles">Miercoles</option>
                            <option value="jueves">Jueves</option>
                            <option value="viernes">Viernes</option>
                            <option value="sabado">Sabado</option>
                            <option value="domingo">Domingo</option>
                   </select>

            <h6>presione ctrl para selecionar 
            </h6>
            <h6>mas opciones 
            </h6>



            </div>
            <br/><br/>
            <div className="ui input">
            <label>Cantidad* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
              
                type="number"   
                className="cajaCant"    
                placeholder="Ingrese Cantidad de Porciones"
                name="cantidadPorciones"
                value={cantidadPorciones}
                max="20"
                required
                onChange={e => onInputChange(e)}
              />
            </div>
            <br/><br/>
          


            <button className="ui second button" >Cancelar </button>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="ui primary button" type="submit" >Guardar </button>
            
          </form>
        </div>
        
      </div>
     );
}
 
export default AddComidas;