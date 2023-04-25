const authorization = async () => {
  try {
    const url = `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2231&client_secret=v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909&hr=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result.access_token;
  } catch (err) {
    console.log(err);
  }
};
export default authorization;
