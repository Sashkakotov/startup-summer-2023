import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem/CardItem';
import getVacancyById from '../API/getVacancyById/getVacancyById';

const Vacancy = ({ token }) => {
  const [card, setCard] = useState({});
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );
  console.log('CcCCCCC', card);

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
        <CardItem card={card} checkedCards={checkedCards} setCheckedCards={setCheckedCards} />
      )}
    </main>
  );
};
export default Vacancy;
