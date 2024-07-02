'use client';

import { Group, Stack, Switch, TextInput, Textarea } from '@mantine/core';
import { PrimaryButton, SelectInput } from '@/shared/ui';
import { PictureWidget } from './picture-widget';

export function BidForm() {
  return (
    <Group
      component="form"
      gap={24}
      justify="stretch"
      align="flex-start"
      w="100%"
      mih={640}
      wrap="nowrap"
    >
      <Stack mih={635} gap={32}>
        <PictureWidget />
        <PrimaryButton>Проанализировать цену</PrimaryButton>
      </Stack>

      <Stack gap={16} w="100%" maw={720}>
        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            size="md"
            label="Название картины"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '440px' } }}
          />
          <TextInput
            size="md"
            label="Год создания"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '120px' } }}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <SelectInput
            data={[
              { label: 'Живопись', value: 'painting' },
              { label: 'Графика', value: 'graphic' },
              { label: 'Фото', value: 'photo' },
              { label: 'Digital', value: 'digital' },
              { label: 'Принты', value: 'print' },
            ]}
            label="Категория"
            placeholder="Выберите"
            defaultValue="Живопись"
            allowDeselect
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
          />
          <TextInput
            size="md"
            label="Страна"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            size="md"
            label="Ширина в см"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '130px' } }}
          />
          <TextInput
            size="md"
            label="Высота в см"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '130px' } }}
          />
          <TextInput
            size="md"
            label="Материал планшета"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '200px' } }}
          />
          <TextInput
            size="md"
            label="Техника"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '200px' } }}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            size="md"
            label="Имя художника"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
          />
          <TextInput
            size="md"
            label="Фамилия художника"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            size="md"
            label="Возраст"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '180px' } }}
          />
          <SelectInput
            data={[
              { label: 'Женский', value: 'Ж' },
              { label: 'Мужской', value: 'М' },
            ]}
            placeholder="Выберите"
            label="Пол"
            styles={{ root: { width: '100%', maxWidth: '180px' } }}
          />
          <Switch
            defaultChecked
            label="Ныне живущий"
            size="sm"
            radius={0}
            styles={{
              label: { fontSize: 16, lineHeight: 1 },
              root: { width: '100%', maxWidth: '180px' },
              body: { alignItems: 'flex-end' },
            }}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            size="md"
            label="Количество продаж картины"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
          />
          <TextInput
            size="md"
            label="Количество работ художника"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <Textarea
            label="Индивидуальные выставки художника"
            size="md"
            w="100%"
            pt={2}
            autosize
            minRows={4}
            maxRows={12}
            radius={0}
            resize="vertical"
            placeholder="Напишите названия выставок через запятую"
          />
          <Textarea
            label="Групповые выставки художника"
            size="md"
            w="100%"
            pt={2}
            autosize
            minRows={4}
            maxRows={12}
            radius={0}
            resize="vertical"
            placeholder="Напишите названия выставок через запятую"
          />
        </Group>
      </Stack>
    </Group>
  );
}
