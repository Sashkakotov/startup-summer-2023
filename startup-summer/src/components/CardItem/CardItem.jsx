import { Card, Text, Group, Stack, Flex } from '@mantine/core';
import StarButton from '../StarButton/StarButton';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Location from '../Location/Location';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import RenderPaymentText from './RenderPaymentText/RenderPaymentText';

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
  const handleClick = () => {
    localStorage.setItem('openCard', JSON.stringify(card));
    navigate(`/vacancy/${card.id}`);
  };

  return (
    <Card onClick={handleClick} className={classes.card}>
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
              {RenderPaymentText(card)}
            </Text>
            <Text className={classes.dot}>&#8226;</Text>
            <Text className={isVacancy ? classes.typeOfWorkVacancy : classes.typeOfWork}>
              {card.type_of_work.title}
            </Text>
          </Group>
          <Location cardTitle={card.town.title} />
        </Stack>
        <StarButton checked={checked} checkboxHandler={checkboxHandler} />
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
export default CardItem;
