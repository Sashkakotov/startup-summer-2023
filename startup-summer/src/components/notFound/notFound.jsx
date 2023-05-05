import { Button, Image, Stack, Text } from '@mantine/core';
import notFoundImage from '/notFound.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Stack
      align="center"
      sx={{
        marginTop: '80px',
        marginBottom: '330px',
        gap: '32px'
      }}>
      <Image alt="notFound" src={notFoundImage} width={'fit-content'} />
      <Text size={'25px'} fw={700} fs={'normal'} lh={'29px'} color="#343A40">
        Упс, здесь еще ничего нет!
      </Text>
      <Button
        // color="#3B7CD3"
        sx={{
          height: '42px',
          width: '164px',
          background: '#DEECFF',
          borderRadius: '8px',
          color: '#3B7CD3'
        }}
        component={Link}
        to={'/'}>
        Поиск Вакансий
      </Button>
    </Stack>
  );
};
export default NotFound;
