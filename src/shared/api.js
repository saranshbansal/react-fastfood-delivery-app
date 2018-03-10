import axios from 'axios';

export function getPlanetSuggestions(uri, inputParms) {
    axios.get(uri + inputParms)
    .then((error, response) => {
        console.log(response);
        return response;
    })
    .catch(error => {
        console.log(error);
        return error;
    });
}

export function getAllPlanets(uri) {
    axios.get(uri)
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch(error => {
        console.log(error);
        return error;
    });
}