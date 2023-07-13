import axios from "axios";
const  BaseUrl = 'https://yt-api.p.rapidapi.com'
const apikey1 = process.env.REACT_APP_APIKEY1;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':  apikey1,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

export const fetchData = (url) =>
{
    const response = axios.get(`${BaseUrl}/${url}`,options);
    return response;
}