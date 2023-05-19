import { createStyles } from '@mantine/core';

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
      background: '#5E96FC'
    }
  },
  dots: {
    display: 'none'
  }
});

export const paginationRootStyles = () => ({
  margin: '90px 0px 44px 0px'
});
