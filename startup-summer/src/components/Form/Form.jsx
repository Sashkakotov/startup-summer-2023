import { Button, Group, Box, Text, NumberInput, CloseButton } from '@mantine/core';
import { useForm } from '@mantine/form';
import IndustryInput from '../IndustryInput/IndustryInput';

function Form() {
  const form = useForm({
    initialValues: {
      industry: '',
      termsOfService: false
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <CloseButton title="Settings" sx={{ width: '200px', height: '30px ' }}>
        Сбросить все x
      </CloseButton>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Text fz="md">Отрасль</Text>
        <IndustryInput {...form.getInputProps('industry')} />
        <Text fz="md">Оклад</Text>
        <NumberInput placeholder="От" />
        <NumberInput placeholder="До" />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
export default Form;
