import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem/CardItem';
import getVacancyById from '../API/getVacancyById/getVacancyById';
import { Stack, Text } from '@mantine/core';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const Vacancy = ({ token }) => {
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
          <Text
            align="start"
            sx={{
              backgroundColor: '#fff',
              maxWidth: '773px',
              width: '100%',
              padding: '1.3rem !important',
              paddingLeft: '1.5rem !important',
              border: '1px solid #EAEBED',
              borderRadius: '12px',
              '& p': {
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '20px',
                color: '#232134'
              },
              '& li': {
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '140%',
                color: '#232134'
              }
            }}>
            {parse(card.vacancyRichText)}
          </Text>
        </Stack>
      )}
    </main>
  );
};

Vacancy.propTypes = {
  token: PropTypes.string.isRequired
};
export default Vacancy;
