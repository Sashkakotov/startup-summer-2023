import { useRef } from 'react';
import PropTypes from 'prop-types';
import NumberInputButtons from './NumberInputButtons';
import { NumberInput } from '@mantine/core';
import { numberInputStyles } from '../Form/styles';

const SalaryNumberInput = ({ form, placeholderText, dataElement, min }) => {
  const handlers = useRef();

  return (
    <NumberInput
      placeholder={placeholderText}
      min={min}
      step={1000}
      {...form}
      styles={numberInputStyles}
      data-elem={dataElement}
      handlersRef={handlers}
      rightSection={<NumberInputButtons handlers={handlers} />}
    />
  );
};

SalaryNumberInput.propTypes = {
  form: PropTypes.object.isRequired,
  placeholderText: PropTypes.string.isRequired,
  dataElement: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired
};
export default SalaryNumberInput;
