import axios from "axios";

const BASE_URL = "https://dev.to/api/articles";
// const BASE_URL = "https://api.spaceflightnewsapi.net/v4/articles/";

const getPost = axios.get(BASE_URL);
const getPostById = (id) => axios.get(BASE_URL + "/" + id);
const searchPost = (keyword) =>
  axios.get(BASE_URL,  {
    params: {
      title: keyword, // Using asterisk as a wildcard
      
    }});
export default {
  getPost,
  getPostById,
  searchPost,
};
