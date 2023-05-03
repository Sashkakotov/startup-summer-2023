import { Card, Text, Group, Stack, Flex } from '@mantine/core';

import StarButton from '../StarButton/StarButton';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Location from '../Location/Location';
import { useNavigate } from 'react-router-dom';

const CardItem = ({ card, checkedCards, setCheckedCards }) => {
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
    <Card
      onClick={handleClick}
      radius="12px"
      withBorder={'1px solid #EAEBED;'}
      sx={{
        maxWidth: '773px',
        width: '100%',
        padding: '1.3rem !important',
        paddingLeft: '1.5rem !important'
      }}>
      <Flex justify="space-between" width={'80%'}>
        <Stack
          spacing={'12px'}
          sx={{
            width: '90%'
          }}>
          <Group position="apart">
            <Text
              mt={'2px'}
              mb={'1px'}
              fs={'normal'}
              fw={'600'}
              size={'20px'}
              lh={'24px'}
              color="#5E96FC"
              truncate={'end'}>
              {card.profession}
            </Text>
          </Group>
          <Group spacing={'12px'}>
            <Text fs={'normal'} fw={'600'} size={'16px'} lh={'20px'} color="#232134">
              {`з/п ${
                card.payment_from > 0 || card.payment_to > 0
                  ? (card.payment_from > 0
                      ? (card.payment_to > 0 ? '' : 'от  ') + card.payment_from
                      : '') +
                    (card.payment_to > 0
                      ? card.payment_from > 0
                        ? ' - ' + card.payment_to
                        : card.payment_to
                      : '') +
                    card.currency
                  : 'По договоренности'
              }`}
            </Text>
            <Text ff={'Poppins'} fs={'normal'} fw={'400'} size={'20px'} lh={'21px'} color="#7B7C88">
              &#8226;
            </Text>
            <Text fs={'normal'} fw={'400'} size={'16px'} lh={'20px'} color="#232134">
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
  setCheckedCards: PropTypes.func
};
export default CardItem;
