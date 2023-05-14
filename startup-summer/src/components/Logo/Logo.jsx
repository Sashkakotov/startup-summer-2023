import { Flex, Text } from '@mantine/core';
import { LOGO } from '../../constants/constants';
import LogoImage from './LogoImage/LogoImage';

const Logo = () => {
  return (
    <Flex gap={12} align={'center'}>
      <LogoImage />
      <Text
        size={24}
        fw={600}
        ff={'Poppins-SemiBold-600'}
        fs={'normal'}
        lh={'36px'}
        color="#232134">
        {LOGO}
      </Text>
    </Flex>
  );
};
export default Logo;
