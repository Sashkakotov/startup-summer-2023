import { px } from '@mantine/core';
import UI from './UIConstants';

export const LOGO = 'Jobored';
export const HEADER_HEIGHT = px(84);
export const MAX_CARDS_ON_PAGE = 4;
export const MAX_PAGE = 125;

export const LINKS = [
  { link: '/', label: UI.jobSearch },
  { link: '/favorites', label: UI.favorites }
];

export const BASE_URL = `https://startup-summer-2023-proxy.onrender.com/2.0/`;
export const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';
export const API_ID =
  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

export const GRAY_200 = '#EAEBED';
export const GRAY_500 = '#ACADB9';
export const GRAY_600 = '#7B7C88';
export const BLACK = '#232134';
export const BLUE_600 = '#5E96FC';
export const BLUE_400 = '#92C1FF';
export const BLUE_100 = '#DEECFF';
export const BLUE_ACTIVE = '#3B7CD3';

export const EMPTY_ROUTE = '/emptystate';
