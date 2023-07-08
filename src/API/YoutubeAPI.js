import axios from "axios";
const  BaseUrl = 'https://yt-api.p.rapidapi.com'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c710081029msh091669b9f833cffp14c72ajsnef139d8e26ab',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

export const fetchData = (url) =>
{
    const response = axios.get(`${BaseUrl}/${url}`,options);
    return response;
}