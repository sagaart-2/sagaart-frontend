'use client';

import { PrimaryButton, SelectInput } from '@/shared/ui';
import { Group } from '@mantine/core';

export function SearchBarWidget() {
  return (
    <Group
      component="form"
      maw={938}
      h={64}
      gap={12}
      p={12}
      bg="tintGrey02"
      wrap="nowrap"
    >
      <SelectInput
        data={[
          { label: 'Графика', value: 'graphic' },
          { label: 'Живопись', value: 'painting' },
          { label: 'Фото', value: 'photo' },
          { label: 'Digital', value: 'digital' },
        ]}
        placeholder="Картины"
        styles={{ wrapper: { maxWidth: '194px' } }}
      />
      <SelectInput
        data={[
          { label: 'Текущие', value: 'current' },
          { label: 'Ближайшие', value: 'coming' },
          { label: 'Прошедшие', value: 'past' },
        ]}
        placeholder="Выставки"
        styles={{ wrapper: { maxWidth: '194px' } }}
      />
      <SelectInput
        data={[
          { label: 'Triumph Gallery', value: 'Triumph Gallery' },
          { label: 'Fine Art', value: 'Fine Art' },
          { label: 'Ruarts', value: 'Ruarts' },
          { label: 'Omelchenko Gallery', value: 'Omelchenko Gallery' },
        ]}
        placeholder="Галереи"
        styles={{ wrapper: { maxWidth: '194px' } }}
      />
      <SelectInput
        data={[
          { label: 'до 10 000 \u20BD', value: '10000' },
          { label: 'до 30 000 \u20BD', value: '30000' },
          { label: 'до 100 000 \u20BD', value: '100000' },
          { label: 'до 500 000 \u20BD', value: '500000' },
        ]}
        placeholder="Цена объекта"
        styles={{ wrapper: { maxWidth: '194px' } }}
      />
      <PrimaryButton maw={90} mih={40} fz={14} fw={600}>
        Найти
      </PrimaryButton>
    </Group>
  );
}
