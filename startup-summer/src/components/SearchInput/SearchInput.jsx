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
        sx={{ width: '100%' }}
        styles={{
          input: {
            height: '48px',
            borderRadius: '8px',
            border: '1px solid #EAEBED'
          },
          rightSection: {
            width: '107px'
          }
        }}
        rightSection={
          <Button
            type={'submit'}
            variant="filled"
            sx={{
              width: '83px',
              height: '32px',
              background: '#5E96FC',
              borderRadius: '8px',
              border: '1px solid #EAEBED',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '21px',
              textAlign: 'center'
            }}>
            Поиск
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
