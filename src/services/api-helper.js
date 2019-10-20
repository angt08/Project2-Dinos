import axios from 'axios';


export const gifBackground = async (apiKey, emotion) => {
   

  const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${emotion}&limit=25&offset=0&rating=G&lang=en`);

  return response.data.data;
}