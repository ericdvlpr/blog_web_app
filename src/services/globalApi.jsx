import axios from "axios";

const BASE_URL = 'https://dev.to/api/articles'

const getPost = axios.get(BASE_URL);
const getPostById =(id) => axios.get(BASE_URL+'/'+id);
export default{
    getPost,
    getPostById
}