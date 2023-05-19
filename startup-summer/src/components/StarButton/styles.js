import { createStyles } from '@mantine/core';
import { GRAY_500, BLUE_600 } from '../../constants/constants';

export const useStyles = createStyles((theme, checked) => ({
  icon: {
    '& svg': {
      width: '22px',
      height: '22px',
      fill: checked ? `${BLUE_600}` : 'none',
      position: 'absolute',
      top: '0rem',
      right: '0rem',
      left: '0rem',
      bottom: '0rem',
      pointerEvents: 'none'
    },
    '& path': {
      stroke: checked ? `${BLUE_600}` : `${GRAY_500}`
    },
    '&:hover': {
      '& path': {
        stroke: `${BLUE_600}`
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
    cursor: 'pointer',
    border: 'none',
    '&:checked': {
      backgroundColor: 'white'
    }
  }
});
