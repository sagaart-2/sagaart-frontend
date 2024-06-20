import { PaintingsCatalogueWidget } from '@/widgets/paintings-catalogue';
import { Stack, Title } from '@mantine/core';

export function PaintingsCataloguePage() {
  return (
    <Stack gap={48}>
      <Title order={1} fz={48} lh={1} ff="Benzin, Helvetica, Arial, sans-serif">
        Расширенный поиск картин
      </Title>
      <PaintingsCatalogueWidget />
    </Stack>
  );
}
