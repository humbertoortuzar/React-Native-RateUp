import axios from 'axios';

async function getActors() {
  const response = await axios.get(
    'https://rateup-cssonicos.herokuapp.com/api/actors'
  );
  
  return response.data.data;
}

export default {getActors};