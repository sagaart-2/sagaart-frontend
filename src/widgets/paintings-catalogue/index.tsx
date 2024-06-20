import { Stack } from '@mantine/core';

import { SearchWidget } from './search';
import { ItemsListWidget } from './item-list';

import { paintingsList } from './lib/mock-paintings-list';

export function PaintingsCatalogueWidget() {
  return (
    <Stack gap={36}>
      <SearchWidget />
      <ItemsListWidget items={paintingsList} />
    </Stack>
  );
}
