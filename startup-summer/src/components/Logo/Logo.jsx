import { Flex, Text } from '@mantine/core';
import LogoImage from '/Union.svg';

const Logo = () => {
  return (
    <Flex gap={12}>
      <img src={LogoImage} />
      <Text size={24} fw={600} ff={'Poppins'} fs={'normal'} lh={'36px'} color="#232134">
        Jobored
      </Text>
    </Flex>
  );
};
export default Logo;
