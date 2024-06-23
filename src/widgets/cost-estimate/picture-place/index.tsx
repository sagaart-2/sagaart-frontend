'use client';

import { useCallback } from 'react';
import NextImage from 'next/image';
import { PhotoModal } from '@/shared/ui/modals';
import { Button, Image, Stack, Text } from '@mantine/core';
import classes from './classes.module.css';

interface IProps {
  photo: string | null;
}

export function PicturePlace({ photo }: IProps) {
  const openPhotoModal = useCallback(() => {
    if (photo) {
      PhotoModal({
        photo,
      });
    }
  }, [photo]);

  return (
    <Stack gap={0} w={515} mih={555}>
      {photo && (
        <Image
          component={NextImage}
          src={photo}
          alt="Картина пользователя"
          width={515}
          height={515}
          ta="center"
          className={classes.picture}
        />
      )}
      {!photo && (
        <Stack w={515} h={515} bg="tintGrey01" justify="center" ta="center">
          <Text fz={32}>Загрузите работу</Text>
        </Stack>
      )}
      <Button
        variant="transparent"
        size="sm"
        mih={40}
        fz={16}
        fw={600}
        lh={1.25}
        px={8}
        radius={0}
        color="tintBlack"
        onClick={() => photo && openPhotoModal()}
        style={{ alignSelf: 'flex-end' }}
      >
        + загрузить фото
      </Button>
    </Stack>
  );
}
