import { Group, Loader, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import SearchInput from '../components/SearchInput/SearchInput';
import authorization from '../API/authorization/authorization';
import getVacancies from '../API/Getvacancies/Getvacancies';
import Cardlist from '../components/CardList/CardList';
// import { useDispatch, useSelector } from 'react-redux';
// import fetchCards from '../store/reducers/fetchCards';

const Home = () => {
  // const dispatch = useDispatch();
  // const { cards, isLoading, error } = useSelector((state) => state.cardReducer);
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(false);

  const getVacanciesArray = async () => {
    setLoader(true);
    const token = await authorization();
    if (token) {
      const res = await getVacancies(token);
      if (res) {
        setCards(res);
      }
    }
    setLoader(false);
  };
  useEffect(() => {
    getVacanciesArray();
  }, []);

  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  return (
    <main className="main">
      {loader && <Loader />}
      <Group align={'flex-start'}>
        <Form />
        <Stack>
          <SearchInput />
          {cards.length > 0 && (
            <Cardlist cards={cards} checkedCards={checkedCards} setCheckedCards={setCheckedCards} />
          )}
        </Stack>
      </Group>
    </main>
  );
};
export default Home;
