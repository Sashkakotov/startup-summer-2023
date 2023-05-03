import { Pagination } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Cardlist from '../components/CardList/CardList';

const Favorites = () => {
  const [page, setPage] = useState(1);
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  return (
    <main className="main">
      {checkedCards.length > 0 && (
        <Cardlist
          cards={checkedCards}
          isFavorite={true}
          checkedCards={checkedCards}
          setCheckedCards={setCheckedCards}
        />
      )}
      <Pagination
        sx={{
          margin: '40px 0px 44px 0px'
        }}
        onChange={setPage}
        boundaries={0}
        siblings={1}
        defaultValue={1}
        total={checkedCards.length}
      />
    </main>
  );
};
export default Favorites;
