import { Checkbox, createStyles } from '@mantine/core';
import PropTypes from 'prop-types';
import Star from '../Star/Star';

const CheckboxIcon = ({ className }) => <Star className={className} />;

const useStyles = createStyles((theme, checked) => ({
  icon: {
    '& svg': {
      fill: checked ? '#5E96FC' : 'none',
      position: 'absolute',
      top: '0rem',
      right: '0rem',
      left: '0rem',
      bottom: '0rem',
      pointerEvents: 'none'
    },
    '& path': {
      stroke: checked ? '#5E96FC' : '#ACADB9'
    },
    '&:hover': {
      '& path': {
        stroke: '#5E96FC'
      }
    }
  }
}));

const StarButton = ({ checked, checkboxHandler }) => {
  const { classes } = useStyles(checked);
  return (
    <>
      <Checkbox
        icon={CheckboxIcon}
        indeterminate
        checked={checked}
        onChange={checkboxHandler}
        className={classes.icon}
        sx={{
          marginTop: '2px',
          marginRight: '6px'
        }}
        styles={() => ({
          input: {
            border: 'none',
            '&:checked': {
              backgroundColor: 'white'
            }
          }
        })}
      />
    </>
  );
};

StarButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkboxHandler: PropTypes.func
};
CheckboxIcon.propTypes = {
  className: PropTypes.string
};
export default StarButton;
