import { Box, Flex, Loader, Pagination, Stack } from '@mantine/core';
import React, { useCallback, useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import SearchInput from '../components/SearchInput/SearchInput';
import getVacancies from '../API/Getvacancies/Getvacancies';
import Cardlist from '../components/CardList/CardList';
import getIndustryList from '../API/getIndustryList/getIndustryList';
import { useForm } from '@mantine/form';
import PropTypes from 'prop-types';
import { paginationStyles, useStyles } from './styles/HomeStyles';
import { useNavigate } from 'react-router-dom';
import { MAX_CARDS_ON_PAGE } from '../constants/constants';

const Home = ({ token }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
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
    }
  });

  const getIndustriesList = useCallback(async () => {
    const industriesList = await getIndustryList(token);
    if (industriesList) {
      setIndustriesList(industriesList);
    }
  }, [token]);

  const getVacanciesArray = useCallback(
    async (token) => {
      setLoader(true);
      const cardsArray = await getVacancies(token, page, searchInputValue, formValues);
      if (cardsArray.objects.length === 0) {
        navigate('/emptystate');
      }
      if (cardsArray) {
        setCards(cardsArray.objects);
        setTotalPage(cardsArray.total);
      }

      setLoader(false);
    },
    [formValues, navigate, page, searchInputValue]
  );

  useEffect(() => {
    if (token) {
      getVacanciesArray(token);
      getIndustriesList(token);
    }
  }, [getIndustriesList, getVacanciesArray, token]);

  useEffect(() => {
    if (token) {
      getVacanciesArray(token);
    }
  }, [formValues, getVacanciesArray, page, token]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  const handleSearchInput = (e, state) => {
    setSearchInputValue(state);
    e.preventDefault();
  };

  const handleFormSubmit = () => {
    setFormValues(form.values);
  };

  return (
    <main className="main">
      <Flex className={classes.flex}>
        <Form
          industriesList={industriesList}
          form={form}
          handleFormSubmit={handleFormSubmit}
          setFormValues={setFormValues}
        />
        <Stack className={classes.stack}>
          <SearchInput handleSearchInput={handleSearchInput} searchInputValue={searchInputValue} />

          <Box className={classes.box}>
            {loader && <Loader className={classes.loader} />}
            {cards.length > 0 && (
              <Cardlist
                cards={cards}
                checkedCards={checkedCards}
                setCheckedCards={setCheckedCards}
              />
            )}
          </Box>
          {cards.length > 0 && (
            <Pagination
              styles={paginationStyles}
              className={classes.pagination}
              onChange={setPage}
              boundaries={0}
              siblings={1}
              defaultValue={1}
              total={Math.ceil(totalPage / MAX_CARDS_ON_PAGE)}
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
