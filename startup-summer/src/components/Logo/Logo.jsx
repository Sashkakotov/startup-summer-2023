import { NavLink } from 'react-router-dom';

import { Flex, Text } from '@mantine/core';
import { BLACK, LOGO } from '../../constants/constants';
import LogoImage from './LogoIcon/LogoIcon';

const Logo = () => {
  return (
    <Flex gap={12} align={'center'} component={NavLink} to={'/'}>
      <LogoImage />
      <Text
        sx={{
          letterSpacing: '-0.5px'
        }}
        size={24}
        fw={600}
        ff={'Poppins-SemiBold-600'}
        fs={'normal'}
        lh={'36px'}
        color={BLACK}>
        {LOGO}
      </Text>
    </Flex>
  );
};
export default Logo;
