import { Button, Box, Text, NumberInput, Select, Flex, Stack } from '@mantine/core';
import { useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';
import ResetButton from '../ResetButton/ResetButton';
import PropTypes from 'prop-types';
import UI from '../../constants/UI';
import { numberInputStyles, selectStyles, useStyles } from './styles';

const Form = ({ industriesList, form, handleFormSubmit, setFormValues }) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <Box className={classes.formBox} mx="auto">
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack className={classes.stack}>
          <Flex className={classes.titleFlex}>
            <Text fw={700} ff={'Inter-Bold-700'} size={20}>
              {UI.filters}
            </Text>
            <ResetButton form={form} setFormValues={setFormValues} />
          </Flex>

          <Stack className={classes.industryStack}>
            <Text fw={700} ff={'Inter-Bold-700'} align="start">
              {UI.industry}
            </Text>
            <Select
              {...form.getInputProps('industry')}
              data={industriesList}
              placeholder={UI.chooseIndustry}
              radius={8}
              rightSection={<ChevronDown size={24} strokeWidth={1.5} color={'#ACADB9'} />}
              onDropdownOpen={() => setOpened(true)}
              onDropdownClose={() => setOpened(false)}
              styles={selectStyles(opened)}
            />
          </Stack>
          <Stack className={classes.numberInputsStack}>
            <Text fw={700} ff={'Inter-Bold-700'} align="start">
              {UI.salary}
            </Text>
            <NumberInput
              placeholder={UI.placeholderFrom}
              min={0}
              {...form.getInputProps('paymentFrom')}
              styles={numberInputStyles}
            />
            <NumberInput
              placeholder={UI.placeholderTo}
              min={form.values.paymentFrom ? form.values.paymentFrom : 0}
              {...form.getInputProps('paymentTo')}
              styles={numberInputStyles}
            />
          </Stack>
          <Button className={classes.submitButton} type="submit">
            {UI.aplly}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

Form.propTypes = {
  industriesList: PropTypes.array.isRequired,
  form: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  setFormValues: PropTypes.func.isRequired
};

export default Form;
