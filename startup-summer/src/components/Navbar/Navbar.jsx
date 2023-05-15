import { useEffect, useState } from 'react';
import { Header, Container, Group, Burger, Paper, Transition, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { HEADER_HEIGHT, links } from '../../constants/constants';
import useStyles from './styles';

const HeaderResponsive = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(
    location.pathname === links[0].link || location.pathname === links[1].link
      ? links.filter((el) => el.link === String(location.pathname))[0].link
      : links[0].link
  );
  const currentLocation = useLocation();
  useEffect(() => {
    setActive(
      location.pathname === links[0].link || location.pathname === links[1].link
        ? links.filter((el) => el.link === String(location.pathname))[0].link
        : ''
    );
  }, [currentLocation]);
  const { classes, cx } = useStyles();
  const items = links.map((link) => (
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
