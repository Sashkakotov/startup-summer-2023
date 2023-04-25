import { Group, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import SearchInput from '../components/SearchInput/SearchInput';
import authorization from '../API/authorization/authorization';
import getVacancies from '../API/Getvacancies/Getvacancies';
import Cardlist from '../components/CardList/CardList';

const Home = () => {
  const [cards, setCards] = useState([]);
  const getVacanciesArray = async () => {
    const token = await authorization();
    console.log('token', token);
    if (token) {
      const res = await getVacancies(token);
      if (res) {
        console.log(res);
        setCards(res);
      }
    }
  };
  useEffect(() => {
    getVacanciesArray();
  }, []);
  console.log(cards, 'ads');
  return (
    <main className="main">
      <Group>
        <Form />
        <Stack>
          <SearchInput />
          {cards.length > 0 && <Cardlist cards={cards} />}
        </Stack>
      </Group>
    </main>
  );
};
export default Home;
