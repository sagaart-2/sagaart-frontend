import { Flex } from '@mantine/core';

import { ItemCard } from '../item-card';

export function ItemsListWidget({ items }: any) {
  return (
    <Flex
      component="ul"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
      gap={20}
      style={{ listStyle: 'none' }}
    >
      {items?.[0] &&
        items.map((item) => (
          <li key={item.id}>
            <ItemCard item={item} />
          </li>
        ))}
    </Flex>
  );
}
