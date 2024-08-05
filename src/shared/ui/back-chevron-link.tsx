'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ActionIcon } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';

export function BackChevronLink() {
  const router = useRouter();

  return (
    <ActionIcon
      component={Link}
      href="#"
      size="lg"
      p={0}
      mb={20}
      variant="transparent"
      onClick={() => router.back()}
      aria-label="кнопка назад"
      style={{ alignSelf: 'flex-start' }}
    >
      <IconChevronLeft size={40} color="tintBlack" />
    </ActionIcon>
  );
}
