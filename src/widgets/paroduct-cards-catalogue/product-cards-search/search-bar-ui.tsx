import { Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from './classes.module.css';

export function SearchBarUi() {
  const searchIcon = (
    <IconSearch size={20} color="var(--mantine-color-black)" />
  );

  return (
    <Group w="fit-content" h={64} p={12} bg="tintGrey02">
      <TextInput
        leftSectionPointerEvents="none"
        rightSectionPointerEvents="all"
        rightSection={searchIcon}
        placeholder="Поиск по имени исполнителя"
        variant="unstyled"
        radius={0}
        classNames={{
          root: classes.rootTextInput,
          input: classes.inputTextInput,
        }}
        size="md"
      />
    </Group>
  );
}
