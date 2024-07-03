'use client';

import { useCallback, type ComponentType } from 'react';

import { modals } from '@mantine/modals';

import { FormModal } from '@/shared/ui';

import { UpdatePictureWidget } from '../update-picture-widget';

interface IUpdatePictureModalOpenWidget {
  triggerComponentUi: ComponentType<React.ComponentPropsWithoutRef<'button'>>;
}

export function UpdatePictureModalOpenWidget({
  triggerComponentUi: Ui,
}: IUpdatePictureModalOpenWidget) {
  const handleClick = useCallback(
    () =>
      FormModal({
        id: 'edit-picture',
        title: 'Редактирование фото',
        element: <UpdatePictureWidget onSubmitted={modals.closeAll} />,
      }),
    []
  );

  return <Ui onClick={handleClick} />;
}
