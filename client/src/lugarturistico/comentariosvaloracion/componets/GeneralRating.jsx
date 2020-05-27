import React, { Fragment } from 'react'
import { Rating } from 'semantic-ui-react';
const GeneralRating = ({qualificationG}) => {
    
    const handleRate = (e, { rating, maxRating }) =>{
        qualificationG(rating);
    }
    return (  
       <Fragment>
           <h2>Puntuacion general para lugar turistico</h2>
           <Rating  onRate={handleRate} maxRating={5} defaultRating={0} icon='star' size='massive' />
           
       </Fragment>
    );
}
 
export default GeneralRating
