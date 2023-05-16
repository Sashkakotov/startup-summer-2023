import { useRef } from 'react';
import PropTypes from 'prop-types';
import NumberInputButtons from './NumberInputIcons/NumberInputButtons';
import { NumberInput } from '@mantine/core';
import { numberInputStyles } from '../Form/styles';

const NumberInputCustom = ({ form, placeholderText, dataElement, min }) => {
  const handlers = useRef();

  return (
    <NumberInput
      placeholder={placeholderText}
      min={min}
      {...form}
      styles={numberInputStyles}
      data-elem={dataElement}
      handlersRef={handlers}
      rightSection={<NumberInputButtons handlers={handlers} />}
    />
  );
};
NumberInputCustom.propTypes = {
  form: PropTypes.object.isRequired,
  placeholderText: PropTypes.string.isRequired,
  dataElement: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired
};
export default NumberInputCustom;
