import axios from "axios";

const BASE_URL = 'https://dev.to/api/articles'

const getPost = axios.get(BASE_URL);
export default{
    getPost
}