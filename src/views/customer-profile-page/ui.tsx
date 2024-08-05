'use server';

import { Stack, Title } from '@mantine/core';

export async function CustomerProfilePageUi() {
  return (
    <Stack gap={48} py={88}>
      <Title order={1} fz={36} lh={1} ff="Benzin, Helvetica, Arial, sans-serif">
        Личный кабинет покупателя
      </Title>
    </Stack>
  );
}
