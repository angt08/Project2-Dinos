import axios from 'axios';


export const gifBackground = async (apiKey, emotion) => {
   

  const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${emotion}&limit=25&offset=0&rating=G&lang=en`);

  return response.data.data;
}


// export const getOneGif = async (apiKey) => {
  
// //   const response = await axios(`api.giphy.com/v1/gifs/${apiKey}${gif_id}`)
//   const response = await axios(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&limit=1`);
//   debugger;
//   return response.data.data;
// }