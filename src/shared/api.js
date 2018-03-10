import * as request from 'superagent';

export function getPlanetSuggestions(input, uri, sucessCB, errorCB) {
    request.get(uri + input).end((error, response) => {
        if (error && errorCB) {
            //  Call error call back
            errorCB(error);
        } else if (sucessCB) {
            //  Call sucess call back
            sucessCB(response);
        }
    });
}

export function getAllPlanets(uri, sucessCB, errorCB) {
    request.get(uri).end((error, response) => {
        if (error && errorCB) {
            //  Call error call back
            errorCB(error);
        } else if (sucessCB) {
            //  Call sucess call back
            sucessCB(response);
        }
    });
}