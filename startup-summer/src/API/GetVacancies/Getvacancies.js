const getVacancies = async (token, search = '', paymentFrom, paymentTo, industry) => {
  try {
    const url = `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?published=1&keyword=${search}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${industry}`;
    console.log(url);
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

    return result.objects;
  } catch (err) {
    console.log(err);
  }
};
export default getVacancies;
