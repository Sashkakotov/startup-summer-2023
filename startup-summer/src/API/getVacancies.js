import { API_ID, BASE_URL, SECRET_KEY } from '../constants/constants';

const getVacancies = async (token, page, search = '', formValues) => {
  try {
    const { paymentFrom, paymentTo, industry } = formValues;
    const url = `${BASE_URL}vacancies/?count=4&page=${
      page - 1
    }&published=1&keyword=${search}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${industry}&no_agreement=${
      paymentTo || paymentFrom ? '1' : '0'
    }`;
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
export default getVacancies;
