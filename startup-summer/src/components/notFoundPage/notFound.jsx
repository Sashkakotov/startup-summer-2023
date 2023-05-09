import { Button, Image, Stack, Text } from '@mantine/core';
import notFoundImage from '/notFound.svg';
import { Link } from 'react-router-dom';
import UI from '../../constants/UI';
import useStyles from './styles';

const NotFoundPage = () => {
  const { classes } = useStyles();
  return (
    <Stack className={classes.stack}>
      <Image alt="notFound" src={notFoundImage} width={'fit-content'} />
      <Text className={classes.text}>{UI.nothingFound}</Text>
      <Button className={classes.button} component={Link} to={'/'}>
        {UI.jobSearch}
      </Button>
    </Stack>
  );
};
export default NotFoundPage;
