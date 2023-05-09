import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  vacancyText: {
    backgroundColor: '#fff',
    maxWidth: '773px',
    width: '100%',
    padding: '1.3rem !important',
    paddingLeft: '1.5rem !important',
    border: '1px solid #EAEBED',
    borderRadius: '12px',
    textAlign: 'start',
    '& p': {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '20px',
      lineHeight: '20px',
      color: '#232134'
    },
    '& li': {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '140%',
      color: '#232134'
    }
  }
}));
export default useStyles;
