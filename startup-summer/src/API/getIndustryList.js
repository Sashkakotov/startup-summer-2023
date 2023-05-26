import { API_ID, BASE_URL, SECRET_KEY } from '../constants/constants';

const getIndustryList = async (token) => {
  try {
    const url = `${BASE_URL}catalogues/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Api-App-Id': API_ID,
        'x-secret-key': SECRET_KEY
      }
    });
    const result = await response.json();
    const industriesList = result.map((el) => ({
      value: el.key,
      label: el.title
    }));
    return industriesList;
  } catch (err) {
    console.error(err);
  }
};
export default getIndustryList;
