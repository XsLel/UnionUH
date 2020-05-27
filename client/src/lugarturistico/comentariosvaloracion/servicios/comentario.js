import http from './http.js';

const getAll = () => {
    return http.get("/comentario");
};


export default {getAll};