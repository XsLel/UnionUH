import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8585",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*', 
  },
  mode:'no-cors'
});




const processResponse = ({ data }) => data;

const request = (config) =>
  axios
    .then(processResponse)

export { request };
