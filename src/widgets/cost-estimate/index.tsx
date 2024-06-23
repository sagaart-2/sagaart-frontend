import { Group, Stack } from '@mantine/core';
import { PrimaryButton } from '@/shared/ui';
import { PicturePlace } from './picture-place';

export function CostEstimate() {
  return (
    <Group gap={20}>
      <Stack mih={635} gap={32}>
        <PicturePlace />
        <PrimaryButton>Проанализировать цену</PrimaryButton>
      </Stack>
    </Group>
  );
}
