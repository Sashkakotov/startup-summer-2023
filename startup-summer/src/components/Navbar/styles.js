import { createStyles } from '@mantine/core';
import { HEADER_HEIGHT } from '../../constants/constants';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    borderBottom: '0px'
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1172px',
    width: '100%',
    padding: '0px 28px',
    [`@media (max-width: 767px)`]: {
      justifyContent: 'space-between'
    }
  },

  links: {
    display: 'flex',
    gap: '60px',
    marginLeft: '281px',
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: '16px',
    fontFamily: 'Inter-Regular-400',
    fontWeight: 400,

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md
    }
  },

  linkActive: {
    '&, &:hover': {
      fontFamily: 'Inter-Medium-500',
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
    }
  }
}));
export default useStyles;
