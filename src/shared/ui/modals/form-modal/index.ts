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
    color: 'var(--mantine-color-rangeGrey-1)',
    styles: {
      header: {
        fontSize: '16px',
        padding: '16px 16px 16px 24px',
        color: 'var(--mantine-color-rangeGrey-1)',
        backgroundColor: 'var(--mantine-color-rangeBlack-1)',
      },
      body: {
        padding: '0 24px 24px',
      },
      content: {
        backgroundColor: 'var(--mantine-color-rangeBlack-1)',
      },
    },
    ...rest,
  });
}
