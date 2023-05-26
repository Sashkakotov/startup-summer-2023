import PropTypes from 'prop-types';

import { Button } from '@mantine/core';
import CloseButton from '../CloseButton/CloseButton';
import UI from '../../constants/UIConstants';

import resetButtonStyles from './styles';

const ResetButton = ({ form, setFormValues }) => {
  return (
    <Button
      variant="subtle"
      compact
      styles={resetButtonStyles}
      onClick={() => {
        form.values.industry = '';
        form.values.paymentFrom = '';
        form.values.paymentTo = '';
        setFormValues({ industry: '', paymentFrom: '', paymentTo: '' });
      }}
      rightIcon={<CloseButton />}>
      {UI.resetAll}
    </Button>
  );
};

ResetButton.propTypes = {
  form: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired
};
export default ResetButton;
