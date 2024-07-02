import type { ReactNode } from 'react';
import { modals } from '@mantine/modals';
import { ModalProps } from '@mantine/core';

export interface IFormModal extends Partial<ModalProps> {
  id: string;
  title: string;
  element: ReactNode;
}

export function FormModal({
  id,
  title,
  element: Element,
  ...rest
}: IFormModal) {
  return modals.open({
    id,
    title,
    size: 'md',
    centered: true,
    radius: 0,
    trapFocus: false,
    children: Element,
    styles: {
      header: {
        padding: '24px 16px',
        backgroundColor: 'var(--mantine-color-rangeBlack-1)',
      },
      body: {
        padding: '0 16px 24px',
      },
      content: {
        backgroundColor: 'var(--mantine-color-rangeBlack-1)',
      },
    },
    ...rest,
  });
}
