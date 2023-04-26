import React, { useEffect, useState } from 'react';
import Cardlist from '../components/CardList/CardList';

const Favorites = () => {
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
    </main>
  );
};
export default Favorites;
