import { Group, Stack, Switch, TextInput, Textarea } from '@mantine/core';
import { PrimaryButton, SelectInput } from '@/shared/ui';
import { UseFormReturnType } from '@mantine/form';
import { IBidRequest } from '@/shared/types';
import { PictureWidget } from './picture-widget';

interface IProps {
  form: UseFormReturnType<Omit<IBidRequest, 'photo'>>;
  photoFile: File | null;
  selectPhotoFile: (payload: File | null) => void;
  handleSubmit: () => void;
}

export function BidFormUi({
  photoFile,
  selectPhotoFile,
  handleSubmit,
  form,
}: IProps) {
  return (
    <Group
      component="form"
      gap={24}
      justify="stretch"
      align="flex-start"
      w="100%"
      mih={640}
      wrap="nowrap"
      onSubmit={handleSubmit}
    >
      <Stack mih={635} gap={32}>
        <PictureWidget {...{ photoFile }} selectPhotoFile={selectPhotoFile} />
        <PrimaryButton type="submit">Проанализировать цену</PrimaryButton>
      </Stack>

      <Stack gap={16} w="100%" maw={720}>
        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            required
            size="md"
            label="Название картины"
            radius={0}
            styles={{ root: { width: '100%' } }}
            {...form.getInputProps('title')}
          />
          <TextInput
            required
            size="md"
            label="Год создания"
            type="number"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '120px' } }}
            {...form.getInputProps('year_create')}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <SelectInput
            required
            data={[
              { label: 'Живопись', value: 'Живопись' },
              { label: 'Графика', value: 'Графика' },
              { label: 'Фото', value: 'Фото' },
              { label: 'Digital', value: 'Digital' },
              { label: 'Принты', value: 'Принты' },
            ]}
            label="Категория"
            placeholder="Выберите"
            defaultValue="Живопись"
            allowDeselect
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
            {...form.getInputProps('category')}
          />
          <TextInput
            required
            size="md"
            label="Страна"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
            {...form.getInputProps('country')}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            required
            size="md"
            label="Ширина в см"
            type="number"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '130px' } }}
            {...form.getInputProps('width')}
          />
          <TextInput
            required
            size="md"
            label="Высота в см"
            type="number"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '130px' } }}
            {...form.getInputProps('height')}
          />
          <TextInput
            required
            size="md"
            label="Материал планшета"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '200px' } }}
            {...form.getInputProps('material_tablet')}
          />
          <TextInput
            required
            size="md"
            label="Техника"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '200px' } }}
            {...form.getInputProps('material_work')}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            required
            size="md"
            label="Имя художника"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
            {...form.getInputProps('artist_name')}
          />
          <TextInput
            required
            size="md"
            label="Фамилия художника"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
            {...form.getInputProps('artist_lastname')}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            required
            size="md"
            label="Возраст"
            type="number"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '180px' } }}
            {...form.getInputProps('age')}
          />
          <SelectInput
            required
            data={[
              { label: 'Женский', value: 'female' },
              { label: 'Мужской', value: 'male' },
              { label: 'другой', value: 'other' },
            ]}
            placeholder="Выберите"
            label="Пол"
            styles={{ root: { width: '100%', maxWidth: '180px' } }}
            {...form.getInputProps('gender')}
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
            {...form.getInputProps('is_alive')}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <TextInput
            required
            size="md"
            label="Количество продаж картины"
            type="number"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
            {...form.getInputProps('count_title')}
          />
          <TextInput
            required
            size="md"
            label="Количество работ художника"
            type="number"
            radius={0}
            styles={{ root: { width: '100%', maxWidth: '280px' } }}
            {...form.getInputProps('count_artist')}
          />
        </Group>

        <Group gap={20} wrap="nowrap" align="flex-end">
          <Textarea
            required
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
            {...form.getInputProps('solo_shows')}
          />
          <Textarea
            required
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
            {...form.getInputProps('group_shows')}
          />
        </Group>
      </Stack>
    </Group>
  );
}
