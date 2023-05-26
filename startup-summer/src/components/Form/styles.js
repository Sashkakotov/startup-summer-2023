import { createStyles } from '@mantine/core';
import {
  GRAY_200,
  GRAY_500,
  BLUE_600,
  BLUE_400,
  BLUE_100,
  BLUE_ACTIVE
} from '../../constants/constants';

export const useStyles = createStyles(() => ({
  formBox: {
    maxWidth: '315px',
    width: '100%',
    background: '#FFFFFF',
    border: `1px solid ${GRAY_200}`,
    borderRadius: '12px',
    marginLeft: '0px !important',
    marginRight: '0px !important',
    marginBottom: '416px !important',
    '@media (max-width: 600px)': {
      marginBottom: '1rem !important',
      marginLeft: '28px !important',
      marginRight: '28px !important',
      width: '-webkit-fill-available',
      maxWidth: 'none'
    }
  },
  submitButton: {
    maxWidth: '275px',
    width: '100%',
    height: '40px',
    marginTop: '5px',
    borderRadius: '8px',
    background: `${BLUE_600}`,
    fontFamily: 'Inter-Medium-500',
    fontWeight: '500',
    '&:hover': {
      background: `${BLUE_400}`
    },
    '&:active': {
      background: `${BLUE_ACTIVE}`
    }
  },
  stack: {
    maxWidth: '313px',
    width: '100%',
    margin: '18px  auto 20px',
    padding: '0px 19px 0px 19px'
  },
  industryStack: {
    marginTop: '13px',
    gap: '5px'
  },
  titleFlex: {
    height: '20px',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  numberInputsStack: {
    gap: '7px'
  }
}));

export const selectStyles = (opened) => ({
  input: {
    fontFamily: 'Inter-Regular-400',
    height: '42px'
  },
  rightSection: {
    width: '48px',
    pointerEvents: 'none',
    transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
    '& path': {
      stroke: opened ? `${BLUE_600}` : `${GRAY_500}`
    }
  },
  item: {
    '&:hover': {
      background: `${BLUE_100}`
    }
  }
});

export const numberInputStyles = () => ({
  input: {
    fontFamily: 'Inter-Regular-400',
    height: '42px',
    borderRadius: '8px',
    caretColor: `${BLUE_600}`
  },
  rightSection: {
    height: '24px',
    top: '6px',
    right: '5px',
    '& button': {
      '&:hover': {
        '& path': {
          stroke: `${BLUE_400}`
        }
      },
      '&:active': {
        '& path': {
          stroke: `${BLUE_600}`
        }
      }
    }
  }
});
