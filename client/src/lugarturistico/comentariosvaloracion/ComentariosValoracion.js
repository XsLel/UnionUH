import React,{Component,useState}from 'react'
import LugarActual from './componets/LugarActual'
import PuntuacionGeneral from './componets/PuntuacionGeneral'
import PuntuacionFactores from './componets/PuntuacionFactores'
import Comentario from './componets/Comentario'
import FechaVisita from './componets/FechaVisita'
import Cuestionario from './componets/Cuestionario'
import Politica from './componets/Politica'
import Enviar from './componets/Enviar'
import Comentarios from './componets/Comentarios'
import './ComentariosValoracion.css'
import ServicioComentario from './servicios/comentario'

const ComentariosValoracion = () => {

    const resultado={
        idComentario: 4,
        idUsuario: 1,
        usuarioAct: null,
        idLugarTuristico: 1,
        lugarTuristicoAct: null,
        tituloComentario: "",
        descripcionComentario: "",
        respuesta1: "si",
        respuesta2: "no",
        respuesta3: "si",
        respuesta4: "no",
        calificacionGeneral: 0,
        calificacionServicio: 3,
        calificacionUbicacion: 4,
        calificacionPrecio: 2,
        calificacionCalidad: 3,
        foto: null,
        fechaVisita: "2019-12-31",
        fechaAct: "2020-09-08"
    }
    
    
    const calificacion =(Cali)=>{
        resultado.calificacionGeneral=Cali;
        console.log('esto es el resultado',resultado);
         ServicioComentario.getAll().then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
   
    const comentar =(titulo,descripcion)=>{
        resultado.tituloComentario=titulo;
        resultado.descripcionComentario = descripcion;
    }

    return (
        <div className="cvpadre">
            <h1>COMENTARIOS Y VALORACIÓN</h1>
            <div className="contenedor">
                <LugarActual/>
                <div className="container">
                    <section className="preguntas">
                        <Politica/>
                        <PuntuacionGeneral calificacion={calificacion}/>
                        <div className="puntuacion">
                            <PuntuacionFactores/>
                        </div>
                        <Comentario comentar={comentar}/>
                        <FechaVisita/>
                        <Cuestionario/>
                    </section>
                    <div class="vertical-line"></div>
                    <section className="cometarios">
                        <Comentarios/>
                    </section>
                
                </div>
            </div>
            <Enviar resultado={resultado}/>
        </div>
    )
}

export default ComentariosValoracion
