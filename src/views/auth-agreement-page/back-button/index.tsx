'use client';

import { OutlineButton } from '@/shared/ui';
import { useRouter } from 'next/navigation';

export function BackButton({ ...props }) {
  const router = useRouter();

  return (
    <OutlineButton
      variant="transparent"
      w={100}
      onClick={() => router.back()}
      {...props}
    >
      Назад
    </OutlineButton>
  );
}
