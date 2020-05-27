import React from 'react'
import axios from 'axios'
const fech = () => {
    const getFecha =() => {
        axios.get('http://localhost:8585/comentario')
        .then(res=>{console.log(res)}).catch(console.log)
    }
    return (  
       <button onClick={getFecha}>fech</button>
    );
}
 
export default fech;