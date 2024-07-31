import { type IProductCard } from '@/shared/types';
import { Stack } from '@mantine/core';
import { ProductCardsSearch } from './product-cards-search';
import { ProductCardsList } from './product-card-list';

interface IProps {
  items: IProductCard[] | null;
}

export function ProductCardsCatalogue({ items }: IProps) {
  return (
    <Stack gap={36}>
      <ProductCardsSearch />
      <ProductCardsList items={items} />
    </Stack>
  );
}
