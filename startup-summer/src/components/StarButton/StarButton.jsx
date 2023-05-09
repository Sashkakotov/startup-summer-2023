import { Checkbox } from '@mantine/core';
import PropTypes from 'prop-types';
import Star from './StarIcon/Star';
import { inputStyles, useStyles } from './styles';

const CheckboxIcon = ({ className }) => <Star className={className} />;

const StarButton = ({ checked, checkboxHandler }) => {
  const { classes, cx } = useStyles(checked);
  return (
    <>
      <Checkbox
        icon={CheckboxIcon}
        indeterminate
        checked={checked}
        onClick={(e) => e.stopPropagation()}
        onChange={checkboxHandler}
        className={cx(classes.icon, classes.root)}
        styles={inputStyles}
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
