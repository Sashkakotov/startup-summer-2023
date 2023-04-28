import { cardSlice } from './cardSlice';

const fetchCards = (token) => async (dispatch) => {
  try {
    dispatch(cardSlice.actions.cardsFetching());
    const url = `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Api-App-Id':
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
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
