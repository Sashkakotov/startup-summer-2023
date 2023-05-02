import { Flex, Text } from '@mantine/core';
import LocationImage from '/location.svg';
import PropTypes from 'prop-types';

const Location = ({ cardTitle }) => {
  return (
    <Flex gap={8}>
      <img src={LocationImage} />
      <Text fs={'normal'} fw={'400'} size={'16px'} lh={'19px'} color="#232134">
        {cardTitle}
      </Text>
    </Flex>
  );
};

Location.propTypes = {
  cardTitle: PropTypes.string.isRequired
};
export default Location;
