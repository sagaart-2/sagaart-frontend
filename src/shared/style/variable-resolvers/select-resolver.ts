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
  if (props.inputSize === 'md') {
    const vars: PartialTransformVars<FactoryPayload['vars']> = {
      root: {
        '--combobox-option-fz': rem(24),
      },
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
        color: 'var(--mantine-color-rangeGrey-3)',
      },
    };

    vars.wrapper = {
      ...vars.wrapper,
      '--input-height': rem(40),
    };

    vars.label = {
      ...vars.label,
      fontSize: rem(16),
      lineHeight: '1',
      paddingBottom: rem(9),
    };
    return vars;
  }

  if (props.inputSize === 'lg') {
    const vars: PartialTransformVars<FactoryPayload['vars']> = {
      root: {
        fontSize: rem(18),
        color: 'var(--mantine-color-black)',
      },
      wrapper: {},
      input: {
        '--input-fz': rem(24),
        '--input-bd': 'var(--mantine-color-black)',
        '--input-color': 'var(--mantine-color-black)',
        '--input-border-color': props.error
          ? 'var(--mantine-color-error)'
          : 'var(--mantine-color-black)',
        '--input-radius': '0',
        '--input-placeholder-color': 'var(--mantine-color-black)',
        '--input-placeholder-fz': rem(20),
      },
      label: {
        color: 'var(--mantine-color-black)',
      },
    };

    vars.wrapper = {
      ...vars.wrapper,
      '--input-height': rem(48),
    };

    vars.label = {
      ...vars.label,
      fontSize: rem(18),
      lineHeight: rem(20),
      paddingBottom: rem(6),
    };
    return vars;
  }

  return {};
};
