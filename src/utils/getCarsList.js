import { CAR_SOURCE } from './constants';

/**
 * let's imagine that here is real salary
 * @param salary
 * @returns {string[]}
 */
export const getCarsList = (salary) =>
    salary?.length > 5 ? CAR_SOURCE : CAR_SOURCE.filter((car) => car !== 'Audi');