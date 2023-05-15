import { TextInput, Button, Box } from '@mantine/core';
import PropTypes from 'prop-types';
import UI from '../../constants/UI';
import { textInputStyles, useStyles } from './styles';
import Searchicon from './SearchIcon/SearchIcon';

const SearchInput = ({ handleSearchInput, searchInputValue, setSearchInputValue }) => {
  const { classes } = useStyles();
  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <Box className={classes.inputBox}>
      <form onSubmit={handleSearchInput}>
        <TextInput
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
          value={searchInputValue}
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
  searchInputValue: PropTypes.string.isRequired,
  setSearchInputValue: PropTypes.func.isRequired
};
export default SearchInput;
