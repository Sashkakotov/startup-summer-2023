import { Pagination } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import Cardlist from '../components/CardList/CardList';
import NotFound from '../components/notFound/notFound';

const Favorites = () => {
  const [page, setPage] = useState(1);
  const [checkedCards, setCheckedCards] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );
  console.log('FAVORITES', checkedCards);
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(checkedCards));
  }, [checkedCards]);

  return (
    <main className="main">
      {checkedCards.length > 0 ? (
        <>
          <Cardlist
            cards={checkedCards.slice((page - 1) * 4, page * 4)}
            checkedCards={checkedCards}
            setCheckedCards={setCheckedCards}
          />
          <Pagination
            styles={{
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
            // defaultValue={1}
            total={Math.ceil(checkedCards.length / 4)}
            value={page}
          />
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
};
export default Favorites;
