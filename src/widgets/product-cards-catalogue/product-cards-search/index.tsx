'use client';

import { Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import type { ISearchForm } from '@/shared/types';
import { FilterBarUi } from './filter-bar-ui';
import { SearchBarUi } from './search-bar-ui';

export function ProductCardsSearch() {
  const form = useForm<ISearchForm>();

  return (
    <Stack component="form" gap={24}>
      <SearchBarUi form={form} />
      <FilterBarUi />
    </Stack>
  );
}
