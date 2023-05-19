import { GRAY_500, BLUE_600, BLUE_400 } from '../../constants/constants';

const resetButtonStyles = () => ({
  root: {
    maxWidth: '115px',
    width: '100%',
    height: '20px',
    color: `${GRAY_500}`,
    fontSize: '14px',
    fontFamily: 'Inter-Medium-500',
    fontWeight: '500',
    lineHeight: '20px',
    padding: '0px',
    '&:hover': {
      color: `${BLUE_400}`,
      background: '#FFFFFF',
      '& line': {
        stroke: `${BLUE_400}`
      }
    },
    '&:active': {
      color: `${BLUE_600}`,
      background: '#FFFFFF',
      '& line': {
        stroke: `${BLUE_600}`
      }
    }
  },
  rightIcon: {
    color: `${GRAY_500}`,
    width: '16px',
    height: '16px',
    marginLeft: '0px'
  },
  label: {
    alignItems: 'flex-start',
    overflow: 'visible'
  },
  inner: {
    gap: '5px'
  }
});
export default resetButtonStyles;
