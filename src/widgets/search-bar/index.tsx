'use client';

import { PrimaryButton, SelectInput } from '@/shared/ui';
import { Group } from '@mantine/core';
import classes from './classes.module.css';

export function SearchBarWidget() {
  return (
    <Group
      component="form"
      maw={938}
      h={64}
      gap={12}
      px={14}
      py={12}
      wrap="nowrap"
      grow
      className={classes.formBar}
    >
      <SelectInput
        data={[
          { label: 'Графика', value: 'graphic' },
          { label: 'Живопись', value: 'painting' },
          { label: 'Фото', value: 'photo' },
          { label: 'Digital', value: 'digital' },
        ]}
        placeholder="Категории"
        classNames={{
          root: classes.selectInputRoot,
          input: classes.selectInput,
        }}
      />
      <SelectInput
        data={[
          { label: 'Футуризм', value: 'futurism' },
          { label: 'Минимализм', value: 'minimalism' },
          { label: 'Кубизм', value: 'cubism' },
          { label: 'Сюрреализм', value: 'surrealism' },
          { label: 'Арт Деко', value: 'art-deco' },
        ]}
        placeholder="Стили"
        classNames={{
          root: classes.selectInputRoot,
          input: classes.selectInput,
        }}
      />
      <SelectInput
        data={[
          { label: 'Маленький (до 40 см)', value: 'small' },
          { label: 'Средний (40 – 100 см)', value: 'middle' },
          { label: 'Большой (более 100 см)', value: 'big' },
        ]}
        placeholder="Размер"
        classNames={{
          root: classes.selectInputRoot,
          input: classes.selectInput,
        }}
      />
      <SelectInput
        data={[
          { label: 'до 10 000 \u20BD', value: '10000' },
          { label: 'до 30 000 \u20BD', value: '30000' },
          { label: 'до 100 000 \u20BD', value: '100000' },
          { label: 'до 500 000 \u20BD', value: '500000' },
        ]}
        placeholder="Цена"
        classNames={{
          root: classes.selectInputRoot,
          input: classes.selectInput,
        }}
      />

      <PrimaryButton maw={90} mih={40}>
        Найти
      </PrimaryButton>
    </Group>
  );
}
