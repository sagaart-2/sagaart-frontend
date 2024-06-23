import {
  rem,
  type MantineTheme,
  type FactoryPayload,
  type PartialTransformVars,
  type PartialVarsResolver,
  type SelectFactory,
  type SelectProps,
} from '@mantine/core';

export const selectResolver: PartialVarsResolver<SelectFactory> = (
  _theme: MantineTheme,
  props: SelectProps
) => {
  // NOTE: Defining default variables for all instances
  const vars: PartialTransformVars<FactoryPayload['vars']> = {
    root: {},
    wrapper: {},
    input: {
      '--input-fz': rem(18),
      '--input-bd': 'var(--mantine-color-black)',
      '--input-color': 'var(--mantine-color-black)',
      '--input-border-color': props.error
        ? 'var(--mantine-color-error)'
        : 'var(--mantine-color-black)',
      '--input-radius': '0',
      '--input-placeholder-color': 'var(--mantine-color-rangeGrey-5)',
    },
    label: {
      color: 'var(--mantine-color-black)',
    },
  };

  if (props.size === 'md') {
    vars.wrapper = {
      ...vars.wrapper,
      '--input-height': rem(40),
    };
    vars.label = {
      ...vars.label,
      fontSize: rem(16),
      lineHeight: rem(20),
      paddingBottom: rem(4),
    };
  }

  return vars;
};
