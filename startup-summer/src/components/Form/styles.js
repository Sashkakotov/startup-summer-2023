import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  formBox: {
    maxWidth: '315px',
    width: '100%',
    background: '#FFFFFF',
    border: '1px solid #EAEBED',
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
    background: '#5E96FC',
    fontFamily: 'Inter-Medium-500',
    fontWeight: '500',
    '&:hover': {
      background: '#92C1FF'
    },
    '&:active': {
      background: '#3B7CD3'
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
    '& svg': {
      stroke: opened ? '#5E96FC' : '#ACADB9'
    }
  },
  item: {
    '&:hover': {
      background: '#DEECFF'
    }
  }
});

export const numberInputStyles = () => ({
  input: {
    fontFamily: 'Inter-Regular-400',
    height: '42px',
    borderRadius: '8px',
    caretColor: '#5E96FC'
  },
  controlUp: {
    border: '0px',
    color: '#ACADB9',
    backgroundColor: '#FFFFFF !important',
    '&:hover': {
      '& path': {
        fill: '#92C1FF'
      }
    },
    '&:active': {
      '& path': {
        fill: '#5E96FC'
      }
    }
  },
  controlDown: {
    border: '0px',
    color: '#ACADB9',
    backgroundColor: '#FFFFFF !important',
    '&:hover': {
      '& path': {
        fill: '#92C1FF'
      }
    },
    '&:active': {
      '& path': {
        fill: '#5E96FC'
      }
    }
  },
  rightSection: {
    height: '24px',
    top: '6px',
    right: '5px'
  }
});
