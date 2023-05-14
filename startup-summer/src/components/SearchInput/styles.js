import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  input: {
    width: '100%',
    maxWidth: '773px'
  },
  rightSectionButton: {
    width: '83px',
    height: '32px',
    background: '#5E96FC',
    borderRadius: '8px',
    border: 'none',
    fontFamily: 'Inter-Medium-500',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
    '&:hover': {
      background: '#92C1FF'
    },
    '&:active': {
      background: '#3B7CD3'
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
    border: '1px solid #EAEBED',
    caretColor: '#5E96FC',
    fontFamily: 'Inter-Regular-400'
  },
  rightSection: {
    width: '107px'
  }
});
