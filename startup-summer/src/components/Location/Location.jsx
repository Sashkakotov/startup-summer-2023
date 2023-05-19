import PropTypes from 'prop-types';
import { Flex, Text } from '@mantine/core';
import LocationImage from './LocationIcon/LocationIcon';
import { BLACK } from '../../constants/constants';

const Location = ({ cardTitle }) => {
  return (
    <Flex gap={10}>
      <LocationImage />
      <Text
        fs={'normal'}
        fw={'400'}
        ff={'Inter-Regular-400'}
        size={'16px'}
        lh={'19px'}
        color={BLACK}>
        {cardTitle}
      </Text>
    </Flex>
  );
};

Location.propTypes = {
  cardTitle: PropTypes.string.isRequired
};
export default Location;
