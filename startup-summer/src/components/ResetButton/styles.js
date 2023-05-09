const resetButtonStyles = () => ({
  root: {
    maxWidth: '115px',
    width: '100%',
    height: '20px',
    color: '#ACADB9',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    padding: '0px',
    '&:hover': {
      color: '#92C1FF',
      background: '#FFFFFF',
      '& line': {
        stroke: '#92C1FF'
      }
    },
    '&:active': {
      color: '#5E96FC',
      background: '#FFFFFF',
      '& line': {
        stroke: '#5E96FC'
      }
    }
  },
  rightIcon: {
    color: '#ACADB9',
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
