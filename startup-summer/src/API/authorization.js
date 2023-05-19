import { BASE_URL, SECRET_KEY } from '../constants/constants';

const authorization = async () => {
  try {
    const url = `${BASE_URL}oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-secret-key': SECRET_KEY
      }
    });
    const result = await response.json();
    return result.access_token;
  } catch (err) {
    console.error(err);
  }
};
export default authorization;
