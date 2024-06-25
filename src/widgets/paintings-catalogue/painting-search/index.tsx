'use client';

import { Stack } from '@mantine/core';
import { FilterBarUi } from './filter-bar-ui';
import { SearchBarUi } from './search-bar-ui';

export function PaintingSearchWidget() {
  return (
    <Stack gap={36}>
      <SearchBarUi />
      <FilterBarUi />
    </Stack>
  );
}
