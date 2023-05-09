import { Pagination } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Cardlist from '../components/CardList/CardList';
import { paginationRootStyles, paginationStyles } from './styles/FavoritesStyles';
import { Navigate } from 'react-router-dom';

const Favorites = () => {
  const [page, setPage] = useState(1);
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  if (checkedCards.length === 0) {
    return <Navigate to="/emptystate" />;
  }

  return (
    <main className="main">
      {checkedCards.length > 0 && (
        <>
          <Cardlist
            cards={checkedCards.slice((page - 1) * 4, page * 4)}
            checkedCards={checkedCards}
            setCheckedCards={setCheckedCards}
          />
          <Pagination
            styles={paginationStyles}
            sx={paginationRootStyles}
            onChange={setPage}
            boundaries={0}
            siblings={1}
            total={Math.ceil(checkedCards.length / 4)}
            value={page}
          />
        </>
      )}
    </main>
  );
};
export default Favorites;
