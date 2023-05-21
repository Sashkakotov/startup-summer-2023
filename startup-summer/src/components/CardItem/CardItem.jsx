import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, Text, Group, Stack, Flex } from '@mantine/core';
import Location from '../Location/Location';
import StarButton from '../StarButton/StarButton';
import formatPaymentText from './helper';

import useStyles from './styles';

const CardItem = ({ card, checkedCards, setCheckedCards, isVacancy }) => {
  const { classes } = useStyles();
  const [checked, setChecked] = useState(checkedCards.some((el) => el.id === card.id));
  const navigate = useNavigate();

  const checkboxHandler = () => {
    setChecked(!checked);
    if (!checked) {
      setCheckedCards([...checkedCards, card]);
    } else {
      setCheckedCards(checkedCards.filter((el) => el.id !== card.id));
    }
  };

  const handleClick = (e) => {
    if (isVacancy) {
      e.preventDefault();
      return;
    }
    localStorage.setItem('openCard', JSON.stringify(card));
    navigate(`/vacancy/${card.id}`, { state: { prevUrl: window.location.pathname } });
  };

  return (
    <Card onClick={(e) => handleClick(e)} className={classes.card} data-elem={`vacancy-${card.id}`}>
      <Flex className={classes.flex}>
        <Stack className={isVacancy ? classes.stackVacancy : classes.stack}>
          <Group position="apart">
            <Text
              truncate={'end'}
              className={
                isVacancy ? classes.cardProfessionTextVacancy : classes.cardProfessionText
              }>
              {card.profession}
            </Text>
          </Group>
          <Group spacing={'12px'}>
            <Text className={isVacancy ? classes.paymentTextVacancy : classes.paymentText}>
              {formatPaymentText(card)}
            </Text>
            <Text className={classes.dot}>&#8226;</Text>
            <Text className={isVacancy ? classes.typeOfWorkVacancy : classes.typeOfWork}>
              {card.type_of_work.title}
            </Text>
          </Group>
          <Location cardTitle={card.town.title} />
        </Stack>
        <StarButton checked={checked} checkboxHandler={checkboxHandler} id={card.id} />
      </Flex>
    </Card>
  );
};

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  checkedCards: PropTypes.array,
  setCheckedCards: PropTypes.func,
  isVacancy: PropTypes.bool
};

CardItem.defaultPropTypes = {
  isVacancy: false
};
export default CardItem;
