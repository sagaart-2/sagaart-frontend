import { IProductCard } from '@/shared/types';
import { ProductCardsCatalogue } from '@/widgets/paroduct-cards-catalogue';
import { Stack, Title } from '@mantine/core';
import { paintingsList } from './lib/mock-paintings-list';

interface IProps {
  items: IProductCard[];
}

export function ProductCardsPage({ items = paintingsList }: IProps) {
  return (
    <Stack gap={48} py={88}>
      <Title order={1} fz={48} lh={1} ff="Benzin, Helvetica, Arial, sans-serif">
        Расширенный поиск картин
      </Title>
      <ProductCardsCatalogue items={items} />
    </Stack>
  );
}
