import { TextInput, ActionIcon, useMantineTheme, Button, Box } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchInput = ({ handleSearchInput, searchInputValue, setSearchInputValue }) => {
  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '773px' }}>
      <form onSubmit={handleSearchInput}>
        <TextInput
          icon={<IconSearch size="1.1rem" stroke={1.5} />}
          radius="xl"
          sx={{ width: '100%', maxWidth: '773px' }}
          styles={{
            input: {
              height: '48px',
              borderRadius: '8px',
              border: '1px solid #EAEBED',
              caretColor: '#5E96FC'
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
                border: 'none',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '21px',
                textAlign: 'center',
                '&:hover': {
                  background: '#92C1FF'
                },
                '&:active': {
                  background: '#3B7CD3'
                }
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
    </Box>
  );
};
export default SearchInput;
