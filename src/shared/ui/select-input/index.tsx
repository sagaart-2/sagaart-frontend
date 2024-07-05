import { Select, SelectProps, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './classes.module.css';

export interface ISelectInput extends Partial<SelectProps> {
  placeholder: string;
  data: { label: string; value: string }[];
}

export function SelectInput({
  placeholder,
  data,
  ...props
}: ISelectInput & React.ComponentPropsWithoutRef<'input'> & SelectProps) {
  return (
    <Select
      data={data}
      variant="default"
      inputSize="md"
      rightSection={
        <IconChevronDown
          style={{ width: rem(36), height: rem(36), paddingRight: rem(8) }}
        />
      }
      checkIconPosition="right"
      placeholder={placeholder}
      classNames={{
        dropdown: classes.dropdown,
        section: classes.section,
        option: classes.option,
      }}
      comboboxProps={{ offset: 0 }}
      searchable
      clearable
      {...props}
    />
  );
}
