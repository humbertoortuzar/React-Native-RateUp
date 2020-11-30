import axios from 'axios';

async function getPlaylists() {
  const response = await axios.get(
    'https://rateup-cssonicos.herokuapp.com/api/playlists'
  );
  return response.data.data;
}

async function getMyPlaylists() {
  const response = await axios.get(
    'https://rateup-cssonicos.herokuapp.com/api/playlists/owned'
  );
  return response.data.data;
}
/*
{
  "data": {
      "type": "films",
      "attributes": {
          "name": "name",
          "label": "label",
          "category": "category",
          "description": "alalalalala"
      }
  }
}
*/
async function addPlaylist(data) {
  const response = await axios.post(
      'https://rateup-cssonicos.herokuapp.com/api/playlists/new',
      { "data": {
          "type": "playlists",
          "attributes": data,
      }
  }
  );
  return response.data;
}

async function addSongToPlaylist(songId, playlistId) {
  const response = await axios.put(
      `https://rateup-cssonicos.herokuapp.com/api/songs/${songId}/${playlistId}`
  );
  return response.data;
}

async function getPlaylistSongs(id) {
  const response = await axios.get(
    `https://rateup-cssonicos.herokuapp.com/api/playlists/${id}/songs`
  );
  return response.data.data;
}

export default {getPlaylists, getMyPlaylists, addPlaylist, addSongToPlaylist, getPlaylistSongs};
