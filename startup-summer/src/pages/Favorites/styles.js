import { createStyles } from '@mantine/core';
import { BLUE_600 } from '../../constants/constants';

export const useStyles = createStyles(() => ({
  stack: {
    maxWidth: '857px',
    width: '100%',
    alignItems: 'center',
    padding: '0 28px 0 28px'
  }
}));

export const paginationStyles = () => ({
  control: {
    '&[data-active]': {
      background: `${BLUE_600}`
    }
  },
  dots: {
    display: 'none'
  }
});

export const paginationRootStyles = () => ({
  margin: '90px 0px 44px 0px'
});
