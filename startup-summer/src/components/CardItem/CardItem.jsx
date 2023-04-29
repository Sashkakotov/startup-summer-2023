import { Card, Text, Group } from '@mantine/core';

import StarButton from '../StarButton/StarButton';
import { useState } from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ card, checkedCards, setCheckedCards }) => {
  const [checked, setChecked] = useState(checkedCards.some((el) => el.id === card.id));

  const checkboxHandler = () => {
    setChecked(!checked);
    if (!checked) {
      setCheckedCards([...checkedCards, card]);
    } else {
      setCheckedCards(checkedCards.filter((el) => el.id !== card.id));
    }
  };
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder sx={{ maxWidth: '773px' }}>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{card.profession}</Text>
        <StarButton checked={checked} checkboxHandler={checkboxHandler} />
      </Group>
      <Group>
        <Text size="sm" color="dimmed">
          {`${card.payment_from} ${card.payment_to} ${card.currency}`}
        </Text>
        <Text size="sm" color="dimmed">
          {card.type_of_work.title}
        </Text>
      </Group>

      <Text size="sm" color="dimmed">
        {card.town.genitive}
      </Text>
    </Card>
  );
};

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  checkedCards: PropTypes.array,
  setCheckedCards: PropTypes.func
};
export default CardItem;
