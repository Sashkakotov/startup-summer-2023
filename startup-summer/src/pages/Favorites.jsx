import { Pagination, Stack } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Cardlist from '../components/CardList/CardList';
import { paginationRootStyles, paginationStyles, useStyles } from './styles/FavoritesStyles';
import { Navigate } from 'react-router-dom';
import { MAX_CARDS_ON_PAGE } from '../constants/constants';

const Favorites = () => {
  const { classes } = useStyles();
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
        <Stack className={classes.stack}>
          <Cardlist
            cards={checkedCards.slice((page - 1) * MAX_CARDS_ON_PAGE, page * MAX_CARDS_ON_PAGE)}
            checkedCards={checkedCards}
            setCheckedCards={setCheckedCards}
          />
          <Pagination
            styles={paginationStyles}
            sx={paginationRootStyles}
            onChange={setPage}
            boundaries={0}
            siblings={1}
            total={Math.ceil(checkedCards.length / MAX_CARDS_ON_PAGE)}
            value={page}
          />
        </Stack>
      )}
    </main>
  );
};
export default Favorites;
