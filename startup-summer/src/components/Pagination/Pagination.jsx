import { Group, Pagination } from '@mantine/core';
import { useState } from 'react';

const PaginationButtons = () => {
  const [activePage, setPage] = useState(1);
  return (
    <Pagination.Root onChange={setPage} boundaries={0} siblings={1} defaultValue={10}>
      <Group spacing={5} position="center">
        <Pagination.Previous />
        <Pagination.Items value={activePage} />
        <Pagination.Next />
      </Group>
    </Pagination.Root>
  );
};
export default PaginationButtons;
