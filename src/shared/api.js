import axios from 'axios';
//'https://demo0444860.mockable.io/getItems'
export function getAllItems() {
    return axios.get('https://demo0444860.mockable.io/getItems');
}