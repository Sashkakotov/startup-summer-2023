import { cardSlice } from './cardSlice';

const fetchCards = (token) => async (dispatch) => {
  try {
    dispatch(cardSlice.actions.cardsFetching());
    const url = `	https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Api-App-Id':
          'v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909',
        'x-secret-key': 'GEU4nvd3rej*jeh.eqp'
      }
    });
    const result = await response.json();

    dispatch(cardSlice.actions.cardsFetchingSuccess(result.objects));
    return;
  } catch (e) {
    dispatch(cardSlice.actions.cardsFetchingError(String(e)));
  }
};
export default fetchCards;
