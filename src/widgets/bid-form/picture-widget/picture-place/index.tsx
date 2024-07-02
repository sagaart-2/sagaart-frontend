'use client';

import { Stack } from '@mantine/core';

export function PicturePlace() {
  return (
    <Stack w={520} h={520} bg="tintGrey01" justify="center" align="center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        stroke="var(--mantine-color-white)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="475" y1="475" x2="25" y2="25" />
        <line x1="475" y1="25" x2="25" y2="475" />
      </svg>
    </Stack>
  );
}
