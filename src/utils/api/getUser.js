import { API_ROUTE } from '../index';

export const getUser = (id) =>
    fetch(`${API_ROUTE}/users/${id}`)
        .then((response) => response.json())
        .catch((e) => console.error(e));