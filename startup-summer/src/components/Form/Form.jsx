import { Button, Group, Box, Text, NumberInput, CloseButton, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
// import IndustryInput from '../IndustryInput/IndustryInput';

const Form = ({ industriesList, form, handleFormSubmit, setFormValues }) => {
  console.log('111111', form);
  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <CloseButton
          title="Settings"
          sx={{ width: '200px', height: '30px ' }}
          onClick={() => {
            form.values.industry = '';
            form.values.paymentFrom = '';
            form.values.paymentTo = '';
            setFormValues({ industry: '', paymentFrom: '', paymentTo: '' });
          }}>
          Сбросить все x
        </CloseButton>

        <Text fz="md">Отрасль</Text>
        <Select
          {...form.getInputProps('industry')}
          data={industriesList}
          placeholder="Выберите отрасль"
        />
        {/* <IndustryInput industriesList={industriesList} /> */}
        <Text fz="md">Оклад</Text>
        <NumberInput placeholder="От" {...form.getInputProps('paymentFrom')} />
        <NumberInput placeholder="До" {...form.getInputProps('paymentTo')} />

        <Group position="right" mt="md">
          <Button type="submit">Применить</Button>
        </Group>
      </Box>
    </form>
  );
};
export default Form;
