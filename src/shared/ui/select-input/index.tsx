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
      width={194}
      data={data}
      variant="default"
      size="md"
      rightSection={
        <IconChevronDown
          style={{ width: rem(36), height: rem(36), paddingRight: rem(8) }}
        />
      }
      checkIconPosition="right"
      placeholder={placeholder}
      classNames={{
        dropdown: classes.dropdownSelect,
        section: classes.sectionSelect,
        option: classes.optionSelect,
      }}
      comboboxProps={{ offset: 0 }}
      searchable
      clearable
      {...props}
    />
  );
}
