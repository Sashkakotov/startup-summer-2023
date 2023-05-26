import { Link } from 'react-router-dom';

import { Button, Stack, Text } from '@mantine/core';
import UI from '../../constants/UIConstants';
import NotFoundImage from '../../components/notFoundImage/notFoundImage';

import useStyles from './styles';

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
