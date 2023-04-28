import { Group, Loader, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import SearchInput from '../components/SearchInput/SearchInput';
import authorization from '../API/authorization/authorization';
import getVacancies from '../API/Getvacancies/Getvacancies';
import Cardlist from '../components/CardList/CardList';
import getIndustryList from '../API/getIndustryList/getIndustryList';
import { useForm } from '@mantine/form';
// import { useDispatch, useSelector } from 'react-redux';
// import fetchCards from '../store/reducers/fetchCards';

const Home = () => {
  // const dispatch = useDispatch();
  // const { cards, isLoading, error } = useSelector((state) => state.cardReducer);
  const [token, setToken] = useState('');
  const [cards, setCards] = useState([]);

  const [loader, setLoader] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [industriesList, setIndustriesList] = useState([]);
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );
  const [formValues, setFormValues] = useState({ industry: '', paymentFrom: '', paymentTo: '' });
  console.log('formValues', formValues);
  const form = useForm({
    initialValues: {
      industry: '',
      paymentFrom: '',
      paymentTo: ''
    },

    validate: {
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  });

  const getToken = async () => {
    const token = await authorization();
    console.log(token);
    if (token) {
      setToken(token);
    }
  };
  const getIndustriesList = async (token) => {
    const industriesList = await getIndustryList(token);
    if (industriesList) {
      setIndustriesList(industriesList);
    }
  };

  const getVacanciesArray = async (token) => {
    setLoader(true);
    const res = await getVacancies(
      token,
      searchInputValue,
      String(formValues.paymentFrom),
      String(formValues.paymentTo),
      formValues.industry
    );
    if (res) {
      setCards(res);
    }
    setLoader(false);
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (token) {
      getVacanciesArray(token);
      getIndustriesList(token);
    }
  }, [token]);

  useEffect(() => {
    getVacanciesArray(token);
  }, [formValues]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  const handleSearchInput = (e) => {
    getVacanciesArray(token);
    e.preventDefault();
  };
  const handleFormSubmit = () => {
    setFormValues(form.values);
  };
  return (
    <main className="main">
      {loader && <Loader />}
      <Group align={'flex-start'}>
        <Form industriesList={industriesList} form={form} handleFormSubmit={handleFormSubmit} />
        <Stack>
          <SearchInput
            handleSearchInput={handleSearchInput}
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
          />
          {cards.length > 0 && (
            <Cardlist cards={cards} checkedCards={checkedCards} setCheckedCards={setCheckedCards} />
          )}
        </Stack>
      </Group>
    </main>
  );
};
export default Home;
