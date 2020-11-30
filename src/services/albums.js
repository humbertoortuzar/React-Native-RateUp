import axios from 'axios';

async function getAlbums() {
  const response = await axios.get(
    'https://rateup-cssonicos.herokuapp.com/api/albums'
  );
  
  return response.data.data;
}

export default {getAlbums};