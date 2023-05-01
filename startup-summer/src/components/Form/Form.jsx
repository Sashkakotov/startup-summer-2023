import {
  Button,
  Group,
  Box,
  Text,
  NumberInput,
  CloseButton,
  Select,
  Flex,
  Stack
} from '@mantine/core';
import { ChevronDown, Selector } from 'tabler-icons-react';

// import IndustryInput from '../IndustryInput/IndustryInput';

const Form = ({ industriesList, form, handleFormSubmit, setFormValues }) => {
  return (
    <Box
      sx={{
        maxWidth: '315px',
        width: '100%',
        background: '#FFFFFF',
        border: '1px solid #EAEBED',
        borderRadius: '12px',
        marginLeft: '0px !important',
        marginRight: '28px !important'
      }}
      mx="auto">
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack sx={{ maxWidth: '275px', width: '100%', margin: '20px  auto 20px' }}>
          <Flex justify={'space-between'} sx={{ height: '20px' }} align={'center'}>
            <Text fw={700} size={20}>
              Фильтры
            </Text>
            <Button
              variant="subtle"
              compact
              title="Settings"
              sx={{
                maxWidth: '115px',
                width: '100%',
                height: '20px',
                color: '#ACADB9',
                fontSize: '14px',
                padding: '0px'
              }}
              styles={{
                rightIcon: {
                  color: '#ACADB9',
                  width: '16px',
                  height: '16px',
                  marginLeft: '0px'
                }
              }}
              onClick={() => {
                form.values.industry = '';
                form.values.paymentFrom = '';
                form.values.paymentTo = '';
                setFormValues({ industry: '', paymentFrom: '', paymentTo: '' });
              }}
              rightIcon={<CloseButton aria-label="Close modal" sx={{ color: '#ACADB9' }} />}>
              Сбросить все
            </Button>
          </Flex>

          <Stack
            sx={{
              marginTop: '13px',
              gap: '5px'
            }}>
            <Text fw={700} align="start">
              Отрасль
            </Text>
            <Select
              {...form.getInputProps('industry')}
              data={industriesList}
              placeholder="Выберите отрасль"
              radius={8}
              rightSection={<ChevronDown size={24} strokeWidth={1.5} color={'#ACADB9'} />}
              styles={{
                input: {
                  height: '42px'
                },
                rightSection: {
                  width: '48px',
                  pointerEvents: 'none'
                }
              }}
            />
          </Stack>
          <Stack
            sx={{
              gap: '7px'
            }}>
            <Text fw={700} align="start">
              Оклад
            </Text>
            <NumberInput
              placeholder="От"
              {...form.getInputProps('paymentFrom')}
              styles={{
                input: {
                  height: '42px',
                  borderRadius: '8px'
                },
                controlUp: {
                  border: '0px',
                  color: '#ACADB9'
                },
                controlDown: {
                  border: '0px',
                  color: '#ACADB9'
                },
                rightSection: {
                  height: '24px',
                  top: '6px',
                  right: '5px'
                }
              }}
              // rightSection={<Selector width={12} height={26} strokeWidth={1.5} color={'#ACADB9'} />}
            />
            <NumberInput
              placeholder="До"
              {...form.getInputProps('paymentTo')}
              styles={{
                input: {
                  height: '42px',
                  borderRadius: '8px'
                },
                controlUp: {
                  border: '0px',
                  color: '#ACADB9'
                },
                controlDown: {
                  border: '0px',
                  color: '#ACADB9'
                },
                rightSection: {
                  height: '24px',
                  top: '6px',
                  right: '5px'
                }
              }}
              // rightSection={<Selector width={12} height={26} strokeWidth={1.5} color={'#ACADB9'} />}
            />
          </Stack>

          <Button
            sx={{
              maxWidth: '275px',
              width: '100%',
              height: '40px',
              marginTop: '5px',
              borderRadius: '8px',
              background: '#5E96FC'
            }}
            type="submit">
            Применить
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
export default Form;
