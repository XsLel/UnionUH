import http from './http.js';

const getAll = () => {
    return http.get("/comentario");
};

const postAll = () =>{
    return http.post("/comentario");
}

export default {getAll,postAll};