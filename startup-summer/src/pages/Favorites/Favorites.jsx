import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Pagination, Stack } from '@mantine/core';
import Cardlist from '../../components/CardList/CardList';
import { EMPTY_ROUTE, LINKS, MAX_CARDS_ON_PAGE } from '../../constants/constants';

import { paginationRootStyles, paginationStyles, useStyles } from './styles';

const Favorites = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
    if (!checkedCards.length) {
      navigate(EMPTY_ROUTE, { state: { prevUrl: LINKS[1].link } });
    }
  }, [checkedCards, navigate]);

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
