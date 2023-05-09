import { TextInput, Button, Box } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import UI from '../../constants/UI';
import { textInputStyles, useStyles } from './styles';

const SearchInput = ({ handleSearchInput, searchInputValue, setSearchInputValue }) => {
  const { classes } = useStyles();
  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <Box className={classes.inputBox}>
      <form onSubmit={handleSearchInput}>
        <TextInput
          icon={<IconSearch size="1.1rem" stroke={1.5} />}
          radius="xl"
          className={classes.input}
          styles={textInputStyles}
          rightSection={
            <Button type={'submit'} variant="filled" className={classes.rightSectionButton}>
              {UI.search}
            </Button>
          }
          value={searchInputValue}
          onChange={handleChange}
          placeholder={UI.enterJobTitle}
          rightSectionWidth={42}
        />
      </form>
    </Box>
  );
};

SearchInput.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  setSearchInputValue: PropTypes.func.isRequired
};
export default SearchInput;
