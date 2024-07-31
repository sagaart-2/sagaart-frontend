import { TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import type { ISearchForm } from '@/shared/types';
import { IconSearch, IconX } from '@tabler/icons-react';
import classes from './classes.module.css';

interface ISearchBarUi {
  form: UseFormReturnType<ISearchForm>;
}

export function SearchBarUi({ form }: ISearchBarUi) {
  const searchIcon = (
    <IconSearch size={20} color="var(--mantine-color-black)" />
  );

  const closeIcon = (
    <IconX
      size={20}
      color="var(--mantine-color-black)"
      aria-label="Clear input"
      onClick={() => form.setFieldValue('query', '')}
      style={{ display: form.values.query ? undefined : 'none' }}
      cursor="pointer"
    />
  );

  return (
    <TextInput
      leftSectionPointerEvents="none"
      rightSectionPointerEvents="all"
      rightSection={form.values.query ? closeIcon : searchIcon}
      placeholder="Поиск по имени исполнителя"
      variant="unstyled"
      radius={0}
      classNames={{
        root: classes.rootTextInput,
        input: classes.inputTextInput,
      }}
      size="md"
      {...form.getInputProps('query')}
    />
  );
}
