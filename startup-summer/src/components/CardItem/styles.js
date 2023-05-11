import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  flex: {
    justifyContent: 'space-between'
  },
  card: {
    maxWidth: '773px',
    width: '100%',
    padding: '1.3rem !important',
    paddingLeft: '1.5rem !important',
    border: '1px solid #EAEBED',
    borderRadius: '12px',
    cursor: 'pointer'
  },
  stack: {
    width: '90%',
    gap: '12px'
  },
  cardProfessionText: {
    marginTop: '2px',
    marginBottom: '1px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#5E96FC'
  },
  paymentText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#232134'
  },
  dot: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '21px',
    color: '#7B7C88'
  },
  typeOfWork: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#232134'
  },
  cardProfessionTextVacancy: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    color: '#232134'
  },
  paymentTextVacancy: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',
    color: '#232134'
  },
  typeOfWorkVacancy: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px',
    color: '#232134'
  },
  stackVacancy: {
    width: '90%',
    gap: '18px'
  }
}));
export default useStyles;
