import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useDisclosure } from '@mantine/hooks';
import { Header, Container, Group, Burger, Paper, Transition, Text } from '@mantine/core';
import Logo from '../Logo/Logo';
import { HEADER_HEIGHT, LINKS } from '../../constants/constants';

import useStyles from './styles';

const HeaderResponsive = () => {
  const { classes, cx } = useStyles();
  const currentLocation = useLocation();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState();

  useEffect(() => {
    const getActiveLink = () => {
      if (location.pathname === LINKS[0].link || location.pathname === LINKS[1].link) {
        return LINKS.filter((el) => el.link === location.pathname)[0].link;
      }
      if (
        currentLocation.state?.prevUrl === LINKS[0].link ||
        currentLocation.state?.prevUrl === LINKS[1].link
      ) {
        return LINKS.filter((el) => el.link === currentLocation.state?.prevUrl)[0].link;
      }
      return '';
    };

    setActive(getActiveLink);
  }, [currentLocation]);

  const items = LINKS.map((link) => (
    <Text
      component={Link}
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => {
        setActive(link.link);
        close();
      }}>
      {link.label}
    </Text>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Logo />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};
export default HeaderResponsive;
