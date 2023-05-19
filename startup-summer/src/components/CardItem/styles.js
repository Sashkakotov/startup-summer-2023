import { createStyles } from '@mantine/core';
import { GRAY_200, GRAY_600, BLACK, BLUE_600 } from '../../constants/constants';

const useStyles = createStyles(() => ({
  flex: {
    justifyContent: 'space-between'
  },
  card: {
    maxWidth: '773px',
    width: '100%',
    padding: '1.3rem !important',
    paddingLeft: '1.5rem !important',
    border: `1px solid ${GRAY_200}`,
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
    fontFamily: 'Inter-SemiBold-600',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
    color: `${BLUE_600}`
  },
  paymentText: {
    fontStyle: 'normal',
    fontFamily: 'Inter-SemiBold-600',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
    color: `${BLACK}`
  },
  dot: {
    fontFamily: 'Poppins-SemiBold-600',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '21px',
    color: `${GRAY_600}`
  },
  typeOfWork: {
    fontStyle: 'normal',
    fontFamily: 'Inter-Regular-400',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
    color: `${BLACK}`
  },
  cardProfessionTextVacancy: {
    fontStyle: 'normal',
    fontFamily: 'Inter-Bold-700',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    color: `${BLACK}`
  },
  paymentTextVacancy: {
    fontStyle: 'normal',
    fontFamily: 'Inter-Bold-700',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',
    color: `${BLACK}`
  },
  typeOfWorkVacancy: {
    fontStyle: 'normal',
    fontFamily: 'Inter-Regular-400',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px',
    color: `${BLACK}`
  },
  stackVacancy: {
    width: '90%',
    gap: '18px'
  }
}));
export default useStyles;
