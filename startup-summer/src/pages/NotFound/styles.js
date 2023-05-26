import { createStyles } from '@mantine/core';
import { BLUE_100, BLUE_ACTIVE } from '../../constants/constants';

const useStyles = createStyles(() => ({
  stack: {
    marginTop: '80px',
    marginBottom: '330px',
    gap: '32px',
    alignItems: 'center'
  },
  text: {
    fontSize: '25px',
    fontFamily: 'Inter-Bold-700',
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: '29px',
    color: '#343A40'
  },
  button: {
    height: '42px',
    width: '164px',
    background: `${BLUE_100} !important`,
    borderRadius: '8px',
    fontFamily: 'Inter-SemiBold-600',
    fontWeight: 600,
    color: `${BLUE_ACTIVE}`,
    '&:hover': {
      color: '#FFFFFF'
    },
    '&:active': {
      color: `${BLUE_ACTIVE}`
    }
  }
}));
export default useStyles;
