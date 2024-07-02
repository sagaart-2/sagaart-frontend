import { Stack, Title } from '@mantine/core';
import { BidForm } from '@/widgets/bid-form';

export function BidPage() {
  return (
    <Stack gap={53} py={88}>
      <Title
        order={1}
        fz={34}
        lh={1.176}
        ff="Benzin, Helvetica, Arial, sans-serif"
      >
        Оценка стоимости экспоната
      </Title>
      <BidForm />
    </Stack>
  );
}
