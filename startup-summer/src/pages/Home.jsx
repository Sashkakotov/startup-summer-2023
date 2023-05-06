import { Flex, Loader, Pagination, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import SearchInput from '../components/SearchInput/SearchInput';
import getVacancies from '../API/Getvacancies/Getvacancies';
import Cardlist from '../components/CardList/CardList';
import getIndustryList from '../API/getIndustryList/getIndustryList';
import { useForm } from '@mantine/form';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import fetchCards from '../store/reducers/fetchCards';

const Home = ({ token }) => {
  // const dispatch = useDispatch();
  // const { cards, isLoading, error } = useSelector((state) => state.cardReducer);

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [industriesList, setIndustriesList] = useState([]);
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );
  const [formValues, setFormValues] = useState({ industry: '', paymentFrom: '', paymentTo: '' });

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

  const getIndustriesList = async () => {
    const industriesList = await getIndustryList(token);
    if (industriesList) {
      setIndustriesList(industriesList);
    }
  };

  const getVacanciesArray = async (token) => {
    setLoader(true);
    const res = await getVacancies(
      token,
      page,
      searchInputValue,
      String(formValues.paymentFrom),
      String(formValues.paymentTo),
      formValues.industry
    );
    if (res) {
      setCards(res.objects);
      setTotalPage(res.total);
    }
    setLoader(false);
  };

  useEffect(() => {
    if (token) {
      getVacanciesArray(token);
      getIndustriesList(token);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getVacanciesArray(token);
    }
  }, [formValues, page]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  const handleSearchInput = (e) => {
    if (token) {
      getVacanciesArray(token);
    }
    e.preventDefault();
  };
  const handleFormSubmit = () => {
    setFormValues(form.values);
  };
  return (
    <main className="main">
      {loader && <Loader />}
      <Flex align={'flex-start'} sx={{ maxWidth: '1116px', width: '100%' }}>
        <Form
          industriesList={industriesList}
          form={form}
          handleFormSubmit={handleFormSubmit}
          setFormValues={setFormValues}
        />
        <Stack align="center" sx={{ maxWidth: '773px', width: '100%' }}>
          <SearchInput
            handleSearchInput={handleSearchInput}
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
          />
          {cards.length > 0 && (
            <Cardlist cards={cards} checkedCards={checkedCards} setCheckedCards={setCheckedCards} />
          )}
          {cards.length > 0 && (
            <Pagination
              styles={{
                control: {
                  '&[data-active]': {
                    background: '#5E96FC'
                  }
                },
                dots: {
                  display: 'none'
                }
              }}
              sx={{
                margin: '40px 0px 44px 0px'
              }}
              onChange={setPage}
              boundaries={0}
              siblings={1}
              defaultValue={1}
              total={Math.ceil(totalPage / 4)}
            />
          )}
        </Stack>
      </Flex>
    </main>
  );
};

Home.propTypes = {
  token: PropTypes.string.isRequired
};
export default Home;
