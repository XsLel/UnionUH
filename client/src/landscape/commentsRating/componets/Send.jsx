import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { http } from "../../../services";

const Send = (props) => {
  const sendData = () => {
    if (!props.states.politicalTerms) {
      alert("Acepte los términos y políticas de la aplicación");
    } else {
      if (props.Outcome.generalRating === 0) {
        alert("Calificacion General es campo obligatorio");
      } else {
        if (!props.Outcome.title) {
          alert("El campo título del comentario es obligatorio");
        } else {
          if (props.states.count === 0) {

            alert("El campo comentario es obligatorio");

          }else if(props.states.count < 20){
            alert("El comentario es muy corto");
          }else{
            
           
        
            if (!props.Outcome.visitDate) {
              alert("Seleccione el año y mes de su visita. Es un campo obligatorio");
            } else {
              http
                .request({
                  method: "POST",
                  url: "/commentary",
                  data: props.Outcome,
                })
                .then((res) => console.log(res));
              alert("Su comentario se envio correctamente");
              window.location.reload(true);
            }
          }
        }
      }
    }
  };
  return (
    <Grid.Column>
      <Button onClick={sendData} primary>
        Enviar
      </Button>
      <p>Tu experiencia es muy valiosa para otros viajeros ¡Muchas Gracias!</p>
    </Grid.Column>
  );
};

export default Send;
