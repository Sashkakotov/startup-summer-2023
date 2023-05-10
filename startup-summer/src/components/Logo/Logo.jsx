import { Flex, Text } from '@mantine/core';
import { LOGO } from '../../constants/constants';
import LogoImage from './LogoImage/LogoImage';

const Logo = () => {
  return (
    <Flex gap={12}>
      <LogoImage />
      <Text size={24} fw={600} ff={'Poppins'} fs={'normal'} lh={'36px'} color="#232134">
        {LOGO}
      </Text>
    </Flex>
  );
};
export default Logo;
