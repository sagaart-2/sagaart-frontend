import { Stack } from '@mantine/core';

export function PicturePlaceholder() {
  return (
    <Stack
      w="100%"
      justify="center"
      align="center"
      bg="tintGrey01"
      style={{ aspectRatio: 1 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90%"
        height="90%"
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
