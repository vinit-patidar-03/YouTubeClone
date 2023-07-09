import axios from "axios";
const  BaseUrl = 'https://yt-api.p.rapidapi.com'
const apikey1 = 'efa3e68ecbmsh96f228b46371275p18bf9djsn55151017590e'
const apikey2 = 'c710081029msh091669b9f833cffp14c72ajsnef139d8e26ab'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':  apikey1 || apikey2,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

export const fetchData = (url) =>
{
    const response = axios.get(`${BaseUrl}/${url}`,options);
    return response;
}