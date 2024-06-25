import { PaintingsCatalogueWidget } from '@/widgets/paintings-catalogue';
import { Stack, Title } from '@mantine/core';

export function PriceAnalyticsPage() {
  return (
    <Stack gap={48} py={88}>
      <Title order={1} fz={48} lh={1} ff="Benzin, Helvetica, Arial, sans-serif">
        Выбор картины для просмотра анализа стоимости
      </Title>
      <PaintingsCatalogueWidget />
    </Stack>
  );
}
