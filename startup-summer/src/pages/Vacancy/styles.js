import { createStyles } from '@mantine/core';
import { GRAY_200, BLACK } from '../../constants/constants';

const useStyles = createStyles(() => ({
  vacancyText: {
    backgroundColor: '#fff',
    maxWidth: '773px',
    width: '100%',
    padding: '1.3rem !important',
    paddingLeft: '1.5rem !important',
    border: `1px solid ${GRAY_200}`,
    borderRadius: '12px',
    textAlign: 'start',
    '& p': {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '20px',
      color: `${BLACK}`
    },
    '& li': {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '140%',
      color: `${BLACK}`
    }
  }
}));
export default useStyles;
