import React from 'react'
import FactorRating from './componets/FactorRating'
import Commentary from './componets/Commentary'
import Politics from './componets/Politics'
import Send from './componets/Send'
import VisitDate from './componets/VisitDate'
import './CommentRating.css'
import GeneralRating from './componets/GeneralRating'
import CurrentPlace from './componets/CurrentPlace'
import Questionnaire from './componets/Questionnaire'
import Comments from './componets/Comments'

const CommentRating = () => {

    const Outcome={
        idUsuario: 1,
        usuarioAct: null,
        idLugarTuristico: 1,
        lugarTuristicoAct: null,
        tituloComentario: "",
        descripcionComentario: "",
        respuesta1: "",
        respuesta2: "",
        respuesta3: "",
        respuesta4: "",
        calificacionGeneral: 0,
        calificacionServicio: 0,
        calificacionUbicacion: 0,
        calificacionPrecio: 0,
        calificacionCalidad: 0,
        foto: null,
        fechaVisita: "",
    }
    
    
    const qualificationG =(Cali)=>{
        Outcome.calificacionGeneral=Cali;
    }
    const states={
       politicalTerms: false,
        count:0 
    }
    const acceptPolicies=(stat)=>{
        states.politicalTerms=stat;
    }
   
    
    const visitdate = (date) =>{
        Outcome.fechaVisita =date;
    }
    return (
        <div className="cvpadre">
            <h1>COMENTARIOS Y VALORACIÓN</h1>
            <div className="contenedor">
                <CurrentPlace/>
                <div className="container">
                    <section className="preguntas">
                        <Politics acceptPolicies={acceptPolicies}/>
                        <GeneralRating qualificationG={qualificationG}/>
                        <div className="puntuacion">
                            <FactorRating/>
                        </div>
                        <Commentary Outcome={Outcome} states={states}/>
                        <VisitDate visitdate={visitdate}/>
                        <Questionnaire/>
                    </section>
                    <div class="vertical-line"></div>
                    <section className="cometarios">
                        <Comments/>
                    </section>
                </div>
            </div>
            <Send Outcome={Outcome} states={states}/>
        </div>
    )
}

export default CommentRating;
