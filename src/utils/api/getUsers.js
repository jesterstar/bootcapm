import { API_ROUTE } from '../index';

export const getUsers = () =>
    fetch(`${API_ROUTE}/users`)
        .then((response) => response.json())
        .catch((e) => console.error(e));