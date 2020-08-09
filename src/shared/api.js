import axios from 'axios';

export function getAllItems() {
    return axios.get('https://demo0810307.mockable.io/getItems');
}