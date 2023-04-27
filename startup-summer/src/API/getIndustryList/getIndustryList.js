const getIndustryList = async (token) => {
  try {
    const url = `https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/`;
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
    // if (response.status !== 200) {
    //   throw { ...(await response.json()) }.error;
    //
    const result = await response.json();
    const industriesList = result.map((el) => ({
      value: el.key,
      label: el.title
    }));
    return industriesList;
  } catch (err) {
    console.log(err);
  }
};
export default getIndustryList;
