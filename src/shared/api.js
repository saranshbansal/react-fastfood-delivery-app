import axios from 'axios';

export function sampleApiCall(uri, inputParms) {
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