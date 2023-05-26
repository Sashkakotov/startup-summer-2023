import PropTypes from 'prop-types';

import { Stack, UnstyledButton } from '@mantine/core';
import NumberInputIcon from './NumberInputIcon/NumberInputIcon';

const NumberInputButtons = ({ handlers }) => (
  <Stack sx={{ height: '30px', gap: '0' }}>
    <UnstyledButton onClick={() => handlers.current.increment()}>
      <NumberInputIcon />
    </UnstyledButton>
    <UnstyledButton
      sx={{ transform: 'rotate(180deg)' }}
      onClick={() => handlers.current.decrement()}>
      <NumberInputIcon />
    </UnstyledButton>
  </Stack>
);

NumberInputButtons.propTypes = {
  handlers: PropTypes.object.isRequired
};
export default NumberInputButtons;
