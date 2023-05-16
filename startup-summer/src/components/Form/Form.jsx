import { Button, Box, Text, Select, Flex, Stack } from '@mantine/core';
import { useState } from 'react';
import ResetButton from '../ResetButton/ResetButton';
import PropTypes from 'prop-types';
import UI from '../../constants/UI';
import { selectStyles, useStyles } from './styles';

import NumberInputCustom from '../NumberInput/NumberInputCustom';
import SelectIcon from './SelectIcon/SelectIcon';

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
              rightSection={<SelectIcon size={24} strokeWidth={1.5} color={'#ACADB9'} />}
              onDropdownOpen={() => setOpened(true)}
              onDropdownClose={() => setOpened(false)}
              styles={selectStyles(opened)}
              data-elem="industry-select"
            />
          </Stack>
          <Stack className={classes.numberInputsStack}>
            <Text fw={700} ff={'Inter-Bold-700'} align="start">
              {UI.salary}
            </Text>
            <NumberInputCustom
              form={{ ...form.getInputProps('paymentFrom') }}
              placeholderText={UI.placeholderFrom}
              dataElement={'salary-from-input'}
              min={0}
            />
            <NumberInputCustom
              form={{ ...form.getInputProps('paymentTo') }}
              placeholderText={UI.placeholderTo}
              dataElement={'salary-to-input'}
              min={form.values.paymentFrom ? form.values.paymentFrom : 0}
            />
          </Stack>
          <Button className={classes.submitButton} type="submit" data-elem="search-button">
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
