import { Group, Stack } from '@mantine/core';
import React, { useEffect } from 'react';
import Form from '../components/Form/Form';
import SearchInput from '../components/SearchInput/SearchInput';
import CardItem from '../components/CardItem/CardItem';
import authorization from '../API/Authorization/Authorization';

const Home = () => {
  // const [cats, setCats] = useState([] as ICard[]);

  useEffect(() => {
    const token = authorization();
    console.log(token);
    // 
  }, []);

  return (
    <main className="main">
      <Group>
        <Form />
        <Stack>
          <SearchInput />
          <CardItem />
        </Stack>
      </Group>
    </main>
  );
};
export default Home;
