import { MantineTheme, PasswordInputProps, rem } from '@mantine/core';

export const passwordInputResolver = (
  _theme: MantineTheme,
  props: PasswordInputProps
) => {
  if (props.size === 'md') {
    return {
      root: {},
      wrapper: {
        '--input-height': rem(44),
        '--input-bg': 'var(--mantine-color-dark-8)',
      },
      input: {
        borderRadius: rem(12),
        '--input-color': 'var(--mantine-color-quaternaryDynamic-5)',
        '--input-border-color': props.error
          ? 'var(--mantine-color-error)'
          : 'var(--mantine-color-quaternaryDynamic-5)',
        '--input-placeholder-color': 'var(--mantine-color-dark-3)',
      },
      label: {
        fontSize: rem(12),
        lineHeight: rem(16),
        color: 'var(--mantine-color-dark-3)',
        paddingBottom: rem(4),
      },
      visibilityToggle: {
        color: 'var(--mantine-color-dark-3)',
      },
    };
  }

  return { root: {} };
};
