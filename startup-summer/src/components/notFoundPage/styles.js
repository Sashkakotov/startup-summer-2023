import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  stack: {
    marginTop: '80px',
    marginBottom: '330px',
    gap: '32px',
    alignItems: 'center'
  },
  text: {
    fontSize: '25px',
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: '29px',
    color: '#343A40'
  },
  button: {
    height: '42px',
    width: '164px',
    background: '#DEECFF !important',
    borderRadius: '8px',
    color: '#3B7CD3',
    '&:hover': {
      color: '#FFFFFF'
    },
    '&:active': {
      color: '#3B7CD3'
    }
  }
}));
export default useStyles;