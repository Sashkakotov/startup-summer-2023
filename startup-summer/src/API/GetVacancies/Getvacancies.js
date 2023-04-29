const getVacancies = async (token, page, search = '', paymentFrom, paymentTo, industry) => {
  try {
    const url = `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=4&page=${page}&published=1&keyword=${search}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${industry}`;
    console.log(url);
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
    console.log('result', result);
    return result.objects;
  } catch (err) {
    console.log(err);
  }
};
export default getVacancies;
