import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem/CardItem';
import getVacancyById from '../API/getVacancyById/getVacancyById';
import { Stack, Text } from '@mantine/core';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import useStyles from './styles/VacancyStyles';

const Vacancy = ({ token }) => {
  const { classes } = useStyles();
  const [card, setCard] = useState({});
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  const getVacancyObject = async (token) => {
    const vacancyId = window.location.pathname.split('/')[2];
    const vacancy = await getVacancyById(token, vacancyId);
    if (vacancy) {
      setCard(vacancy);
    }
  };

  useEffect(() => {
    getVacancyObject(token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);
  return (
    <main className="main" data-testid="main">
      {card.id && (
        <Stack>
          <CardItem card={card} checkedCards={checkedCards} setCheckedCards={setCheckedCards} />
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
