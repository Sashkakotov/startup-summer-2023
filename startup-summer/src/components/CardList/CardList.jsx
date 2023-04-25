import { List } from '@mantine/core';
import CardItem from '../CardItem/CardItem';

const Cardlist = (cards) => {
  console.log('Cardlist', cards.cards);

  return (
    <List>
      {cards.cards.map((card) => {
        console.log('hello', card);
        return <CardItem key={card.id} {...card} />;
      })}
    </List>
  );
};
export default Cardlist;
