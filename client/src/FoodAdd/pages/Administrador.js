import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Administrador = () => {
    const [users,setUser]=useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async ()=>{
        const result=await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
        //console.log(result);
    } 
    return ( 
          <div>
            <br/>
              <h2 align="center">MIS PUBLICACIONES</h2>
               <br/><br/>
              <div className="ui two column grid ">
   
               <div className="column">
               <table className="ui celled table">
                    <thead class="thead-dark">
                       <tr>
                       <th >#</th>
                       <th >Nombres</th>
     
                      
                      </tr>
                    </thead>
                    <tbody>
                       {
                       users.map((user,index)=>(
                      <tr>
                         <th scope="row">{index+1}</th>
                         <td>{user.name}</td>
                       </tr>

                        ))
                       }
                    </tbody>
                 </table>
               </div>
               <div className="column">
                  <br/><br/><br/><br/>
               <Link className="ui button" id="botonesprincipales" >Modificar</Link>
                <br />
                <br />
                <Link className="ui button" id="botonesprincipales">Eliminar</Link>
                <br />
                <br />
                <Link className="ui button" id="botonesprincipales" to="/restaurants/Comida">Resgistrar</Link>
                  <br />
                <br />
                
                <Link className="ui button" id="botonesprincipales">Buscar</Link>
                </div>
               </div>
          </div>
        
     );
}
 
export default Administrador;