const getIndustryList = async (token) => {
  try {
    const url = `https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/`;
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
