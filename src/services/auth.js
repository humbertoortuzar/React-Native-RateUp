import axios from 'axios';

/*
{ "data": {
        "type": "users",
        "attributes": {
            "email": "diego@vasquez.com",
            "password": "diego"
        }
    }
}
*/


async function logIn(data) {
    const response = await axios.post(
        'https://rateup-cssonicos.herokuapp.com/api/auth/signin',
        { "data": {
            "type": "users",
            "attributes": data,
        }
    }
    );
    //console.log(response);
    return response.data.meta.access_token;
}


export default { logIn };