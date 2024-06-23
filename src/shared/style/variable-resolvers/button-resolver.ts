import { ButtonProps, MantineTheme } from '@mantine/core';

export const buttonResolver = (_theme: MantineTheme, props: ButtonProps) => {
  if (props.variant === 'filled') {
    return {
      root: {
        '--button-color': 'var(--mantine-color-white)',
        ' --button-bg': 'var(--mantine-color-rangeBlack-1)',
        '--button-hover-color': 'var(--mantine-color-rangeGrey-3)',
        ' --button-hover': 'var(--mantine-color-rangeGrey-1)',
      },
    };
  }
  return { root: {} };
};
