import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

import CardItem from '../../components/CardItem/CardItem';
import getVacancyById from '../../API/getVacancyById';
import { Loader, Stack, Text } from '@mantine/core';

import useStyles from './styles';

const Vacancy = ({ token }) => {
  const { classes } = useStyles();
  const [card, setCard] = useState({});
  const [loader, setLoader] = useState(false);
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  const getVacancyObject = async (token) => {
    setLoader(true);
    if (token) {
      const vacancyId = window.location.pathname.split('/')[2];
      const vacancy = await getVacancyById(token, vacancyId);
      if (vacancy) {
        setCard(vacancy);
      }
      setLoader(false);
    }
  };

  useEffect(() => {
    if (token) {
      getVacancyObject(token);
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  return (
    <main className="main" data-testid="main" style={{ minHeight: '594px' }}>
      {loader && <Loader className={classes.loader} />}
      {card.id && (
        <Stack spacing={'21px'}>
          <CardItem
            card={card}
            checkedCards={checkedCards}
            setCheckedCards={setCheckedCards}
            isVacancy={true}
          />
          <Text className={classes.vacancyText}>{parse(card.vacancyRichText)}</Text>
        </Stack>
      )}
    </main>
  );
};

Vacancy.propTypes = {
  token: PropTypes.string.isRequired
};
export default Vacancy;
