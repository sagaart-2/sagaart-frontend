import { Stack, Title, Text } from '@mantine/core';

export function SubscriptionPage() {
  return (
    <Stack pt={48} pb={88}>
      <Stack>
        <Text>Рекомендуем оформить подписку</Text>
        <Title
          order={1}
          fz={48}
          lh={1}
          ff="Benzin, Helvetica, Arial, sans-serif"
        >
          Оформите подписку на оценку работ
        </Title>
        <Text>Уникальный алгоритм оценки арт-объектов</Text>
      </Stack>
    </Stack>
  );
}
