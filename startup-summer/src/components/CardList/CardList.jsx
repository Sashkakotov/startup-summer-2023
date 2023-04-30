import { Stack } from '@mantine/core';
import CardItem from '../CardItem/CardItem';
import PropTypes from 'prop-types';

const Cardlist = ({ cards, checkedCards, setCheckedCards }) => {
  return (
    <Stack spacing="16px" sx={{ width: '773px' }}>
      {cards.map((card) => {
        return (
          <CardItem
            key={card.id}
            card={card}
            checkedCards={checkedCards}
            setCheckedCards={setCheckedCards}
          />
        );
      })}
    </Stack>
  );
};
Cardlist.propTypes = {
  cards: PropTypes.array.isRequired,
  checkedCards: PropTypes.array.isRequired,
  setCheckedCards: PropTypes.func.isRequired
};

export default Cardlist;
