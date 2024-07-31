import { IProductCard } from '@/shared/types';
import { ProductCardsCatalogue } from '@/widgets/product-cards-catalogue';
import { Stack, Title } from '@mantine/core';

interface IProps {
  items: IProductCard[] | null;
}

export function ProductCardsPage({ items }: IProps) {
  return (
    <Stack gap={48} py={88}>
      <Title order={1} fz={48} lh={1} ff="Benzin, Helvetica, Arial, sans-serif">
        Расширенный поиск картин
      </Title>
      <ProductCardsCatalogue items={items} />
    </Stack>
  );
}
