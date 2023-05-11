import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  flex: {
    maxWidth: '1172px',
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: '28px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      paddingLeft: '0px'
    }
  },
  stack: {
    maxWidth: '857px',
    width: '100%',
    alignItems: 'center',
    padding: '0 28px 0 28px'
  },
  box: {
    position: 'relative',
    minHeight: '594px',
    maxWidth: '773px',
    width: '100%'
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
