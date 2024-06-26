import React from 'react';
import { modals } from '@mantine/modals';
import { ModalProps } from '@mantine/core';
import { PhotoModalUi } from './photo-modal-ui';

export interface IPhotoModal extends Partial<ModalProps> {
  photo: string;
}

export function PhotoModal({ photo, ...rest }: IPhotoModal) {
  return modals.open({
    centered: true,
    size: 'md',
    children: React.createElement(PhotoModalUi, {
      photo,
    }),
    styles: {
      header: {
        minHeight: 40,
        height: 'auto',
        padding: '0 4px',
        backgroundColor: 'transparent',
      },
      content: {
        backgroundColor: 'transparent',
      },
      body: {
        padding: 0,
      },
    },
    transitionProps: {
      transition: 'fade',
      duration: 300,
      timingFunction: 'ease',
    },
    ...rest,
  });
}
