import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, checked) => ({
  icon: {
    '& svg': {
      fill: checked ? '#5E96FC' : 'none',
      position: 'absolute',
      top: '0rem',
      right: '0rem',
      left: '0rem',
      bottom: '0rem',
      pointerEvents: 'none'
    },
    '& path': {
      stroke: checked ? '#5E96FC' : '#ACADB9'
    },
    '&:hover': {
      '& path': {
        stroke: '#5E96FC'
      }
    }
  },
  root: {
    marginTop: '2px',
    marginRight: '6px'
  }
}));

export const inputStyles = () => ({
  input: {
    border: 'none',
    '&:checked': {
      backgroundColor: 'white'
    }
  }
});
