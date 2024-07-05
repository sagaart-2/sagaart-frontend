import { rem } from '@mantine/core';

export const closeButtonResolver = () => ({
  root: {
    '--cb-icon-size': '100%',
    '--cb-size-md': rem(28),
    color: 'var(--mantine-color-rangeGrey-1)',
    backgroundColor: 'transparent',
  },
});
