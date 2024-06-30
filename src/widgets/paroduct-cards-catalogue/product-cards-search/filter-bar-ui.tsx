import { PrimaryButton, SelectInput } from '@/shared/ui';
import { Group } from '@mantine/core';

export function FilterBarUi() {
  return (
    <Group
      component="form"
      maw="100%"
      h={64}
      gap={12}
      p={12}
      bg="tintGrey02"
      wrap="nowrap"
      grow
    >
      <SelectInput
        data={[
          { label: 'до 10 000 \u20BD', value: '10000' },
          { label: 'до 30 000 \u20BD', value: '30000' },
          { label: 'до 100 000 \u20BD', value: '100000' },
          { label: 'до 500 000 \u20BD', value: '500000' },
        ]}
        placeholder="Цена"
        styles={{ root: { width: '100%', maxWidth: '194px' } }}
      />
      <SelectInput
        data={[
          { label: 'Графика', value: 'graphic' },
          { label: 'Живопись', value: 'painting' },
          { label: 'Фото', value: 'photo' },
          { label: 'Digital', value: 'digital' },
        ]}
        placeholder="Категории"
        styles={{ root: { width: '100%', maxWidth: '306px' } }}
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
        styles={{ root: { width: '100%', maxWidth: '306px' } }}
      />
      <SelectInput
        data={[
          { label: 'Маленький (до 40 см)', value: 'small' },
          { label: 'Средний (40 – 100 см)', value: 'middle' },
          { label: 'Большой (более 100 см)', value: 'big' },
        ]}
        placeholder="Размер"
        styles={{ root: { width: '100%', maxWidth: '306px' } }}
      />

      <PrimaryButton maw={90} mih={40} fz={14} fw={600}>
        Найти
      </PrimaryButton>
    </Group>
  );
}
