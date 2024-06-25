'use client';

import { Stack } from '@mantine/core';

import { PaintingSearchWidget } from './painting-search';
import { ItemsListWidget } from './item-list';

import { paintingsList } from './lib/mock-paintings-list';

export function PaintingsCatalogueWidget() {
  return (
    <Stack gap={36}>
      <PaintingSearchWidget />
      <ItemsListWidget items={paintingsList} />
    </Stack>
  );
}
