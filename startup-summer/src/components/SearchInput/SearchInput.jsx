import { useState } from 'react';
import PropTypes from 'prop-types';

import { TextInput, Button, Box } from '@mantine/core';
import UI from '../../constants/UIConstants';
import Searchicon from './SearchIcon/SearchIcon';

import { textInputStyles, useStyles } from './styles';

const SearchInput = ({ handleSearchInput, searchInputValue }) => {
  const { classes } = useStyles();
  const [state, setState] = useState(searchInputValue);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    handleSearchInput(e, state);
  };

  return (
    <Box className={classes.inputBox}>
      <form onSubmit={handleSubmit}>
        <TextInput
          iconWidth={'2.5rem'}
          icon={<Searchicon />}
          radius="xl"
          className={classes.input}
          styles={textInputStyles}
          rightSection={
            <Button
              type={'submit'}
              variant="filled"
              className={classes.rightSectionButton}
              data-elem="search-button">
              {UI.search}
            </Button>
          }
          value={state}
          onChange={handleChange}
          placeholder={UI.enterJobTitle}
          rightSectionWidth={42}
          data-elem="search-input"
        />
      </form>
    </Box>
  );
};

SearchInput.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired
};
export default SearchInput;
