'use client';

import { useCallback, useState } from 'react';

import { UpdatePictureWidgetUi } from './ui';

interface IUpdatePictureWidget {
  onSubmitted: () => void;
}

export function UpdatePictureWidget({ onSubmitted }: IUpdatePictureWidget) {
  const [picture, setPicture] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectPicture = useCallback(setPicture, [setPicture]);

  const handleUpdatePicture = useCallback(() => {
    if (!picture) {
      return;
    }

    setIsLoading(true);

    const data = new FormData();
    data.append('photo', picture);
  }, [picture]);

  const handleDeletePicture = useCallback(() => {
    setPicture(null);
    onSubmitted();
  }, [onSubmitted]);

  return (
    <UpdatePictureWidgetUi
      {...{ picture }}
      {...{ isLoading }}
      selectPicture={handleSelectPicture}
      handleUpdate={handleUpdatePicture}
      handleDelete={handleDeletePicture}
    />
  );
}
