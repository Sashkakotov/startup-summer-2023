import { Button, Stack, Text } from '@mantine/core';

import { Link } from 'react-router-dom';
import UI from '../constants/UI';
import useStyles from './styles/NotFoundStyles';
import NotFoundImage from '../components/notFoundImage/notFoundImage';

const NotFoundPage = () => {
  const { classes } = useStyles();
  return (
    <Stack className={classes.stack}>
      <NotFoundImage />
      <Text className={classes.text}>{UI.nothingFound}</Text>
      <Button className={classes.button} component={Link} to={'/'}>
        {UI.jobSearch}
      </Button>
    </Stack>
  );
};
export default NotFoundPage;
