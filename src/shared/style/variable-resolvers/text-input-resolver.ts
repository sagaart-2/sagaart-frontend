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
    wrapper: {
      '--input-bg': 'var(--mantine-color-dark-8)',
    },
    input: {
      '--input-color': 'var(--mantine-color-quaternaryDynamic-5)',
      '--input-border-color': props.error
        ? 'var(--mantine-color-error)'
        : 'var(--mantine-color-quaternaryDynamic-5)',
      '--input-placeholder-color': 'var(--mantine-color-dark-3)',
    },
    label: {
      color: 'var(--mantine-color-dark-3)',
    },
  };
  if (props.size === 'md') {
    vars.wrapper = {
      ...vars.wrapper,
      '--input-height': rem(44),
    };
    vars.label = {
      ...vars.label,
      fontSize: rem(12),
      lineHeight: rem(16),
      paddingBottom: rem(4),
    };
  }

  return vars;
};
