import { Checkbox } from '@mantine/core';
import PropTypes from 'prop-types';
import { Star } from 'tabler-icons-react';

const CheckboxIcon = ({ indeterminate, className }) =>
  indeterminate ? (
    <Star size={22} strokeWidth={1} color={'#ACADB9'} fill={'#5E96FC'} className={className} />
  ) : (
    <Star size={22} strokeWidth={1} color={'#ACADB9'} className={className} />
  );

const StarButton = ({ checked, checkboxHandler }) => {
  return (
    <>
      <Checkbox icon={CheckboxIcon} checked={checked} onChange={checkboxHandler} />
    </>
  );
};

StarButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  checkboxHandler: PropTypes.func
};

export default StarButton;
