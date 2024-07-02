'use client';

import { Stack } from '@mantine/core';
import { FilterBarUi } from './filter-bar-ui';
import { SearchBarUi } from './search-bar-ui';

export function ProductCardsSearch() {
  return (
    <Stack component="form" gap={36}>
      <SearchBarUi />
      <FilterBarUi />
    </Stack>
  );
}
