import { createStyles } from '@mantine/core';
import { GRAY_200, BLUE_600, BLUE_400, BLUE_ACTIVE } from '../../constants/constants';

export const useStyles = createStyles(() => ({
  input: {
    width: '100%',
    maxWidth: '773px'
  },
  rightSectionButton: {
    width: '83px',
    height: '32px',
    background: `${BLUE_600}`,
    borderRadius: '8px',
    border: 'none',
    fontFamily: 'Inter-Medium-500',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
    '&:hover': {
      background: `${BLUE_400}`
    },
    '&:active': {
      background: `${BLUE_ACTIVE}`
    }
  },
  inputBox: {
    width: '100%',
    maxWidth: '773px'
  }
}));

export const textInputStyles = () => ({
  input: {
    height: '48px',
    borderRadius: '8px',
    border: `1px solid ${GRAY_200}`,
    caretColor: `${BLUE_600}`,
    fontFamily: 'Inter-Regular-400'
  },
  rightSection: {
    width: '107px'
  }
});
