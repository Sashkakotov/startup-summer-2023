import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  flex: {
    maxWidth: '1116px',
    width: '100%',
    alignItems: 'flex-start'
  },
  stack: {
    maxWidth: '773px',
    width: '100%',
    alignItems: 'center'
  },
  box: {
    position: 'relative',
    minHeight: '594px'
  },
  loader: {
    position: 'absolute',
    top: '47%',
    zIndex: '10'
  },
  pagination: {
    margin: '25px 0px 44px 0px'
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
