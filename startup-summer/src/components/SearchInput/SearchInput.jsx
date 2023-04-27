import { TextInput, ActionIcon, useMantineTheme, Button } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';

const SearchInput = ({ handleSearchInput, searchInputValue, setSearchInputValue }) => {
  const theme = useMantineTheme();

  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSearchInput}>
      <TextInput
        icon={<IconSearch size="1.1rem" stroke={1.5} />}
        radius="xl"
        size="md"
        rightSection={
          <Button type={'submit'} size={32} radius="xl" color={theme.primaryColor} variant="filled">
            {theme.dir === 'ltr' ? (
              <IconArrowRight size="1.1rem" stroke={1.5} />
            ) : (
              <IconArrowLeft size="1.1rem" stroke={1.5} />
            )}
          </Button>
        }
        value={searchInputValue}
        onChange={handleChange}
        placeholder="Введите название вакансии"
        rightSectionWidth={42}
        // {...props}
      />
    </form>
  );
};
export default SearchInput;
