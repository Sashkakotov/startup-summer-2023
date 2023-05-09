import { Flex, Text } from '@mantine/core';
import LogoImage from '/Union.svg';
import { LOGO } from '../../constants/constants';

const Logo = () => {
  return (
    <Flex gap={12}>
      <img src={LogoImage} />
      <Text size={24} fw={600} ff={'Poppins'} fs={'normal'} lh={'36px'} color="#232134">
        {LOGO}
      </Text>
    </Flex>
  );
};
export default Logo;
