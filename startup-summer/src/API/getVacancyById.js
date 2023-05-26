import { API_ID, BASE_URL, SECRET_KEY } from '../constants/constants';

const getVacancyById = async (token, vacancyId) => {
  try {
    const url = `${BASE_URL}vacancies/${vacancyId}/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Api-App-Id': API_ID,
        'x-secret-key': SECRET_KEY
      }
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
export default getVacancyById;
