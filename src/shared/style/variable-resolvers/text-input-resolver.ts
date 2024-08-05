import {
  rem,
  type MantineTheme,
  type FactoryPayload,
  type PartialTransformVars,
  type PartialVarsResolver,
  type TextInputFactory,
  type TextInputProps,
} from '@mantine/core';

export const textInputResolver: PartialVarsResolver<TextInputFactory> = (
  _theme: MantineTheme,
  props: TextInputProps
) => {
  // NOTE: Defining default variables for all instances
  const vars: PartialTransformVars<FactoryPayload['vars']> = {
    root: {},
    wrapper: {},
    input: {
      '--input-color': 'var(--mantine-color-black)',
      '--input-border-color': props.error
        ? 'var(--mantine-color-error)'
        : 'var(--mantine-color-black)',
      '--input-radius': '0',
      '--input-placeholder-color': 'var(--mantine-color-rangeGrey-5)',
    },
    label: {
      color: 'var(--mantine-color-rangeGrey-3)',
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
      lineHeight: '1',
      paddingBottom: rem(8),
    };
  }

  return vars;
};
