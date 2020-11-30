import axios from 'axios';

async function getSongs() {
  const response = await axios.get(
    'https://rateup-cssonicos.herokuapp.com/api/songs'
  );
  
  return response.data.data;
}

export default {getSongs};