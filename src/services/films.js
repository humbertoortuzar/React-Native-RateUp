import axios from 'axios';

async function getFilms() {
  const response = await axios.get(
    'https://rateup-cssonicos.herokuapp.com/api/films'
  );
  
  return response.data.data;
}
/*
{
  "data": {
      "type": "films",
      "attributes": {
          "title": "title",
          "year": 1990,
          "genre": "genre",
          "description": "alalalalala"
      }
  }
}
*/
async function addFilm(data) {
  const response = await axios.post(
      'https://rateup-cssonicos.herokuapp.com/api/films/new',
      { "data": {
          "type": "films",
          "attributes": data,
      }
  }
  );
  //console.log(response);
  return response.data;
}

async function deleteFilm(id) {
  const response = await axios.delete(
    `https://rateup-cssonicos.herokuapp.com/api/films/${id}`
  );
  return response;
}

export default {getFilms, addFilm, deleteFilm};