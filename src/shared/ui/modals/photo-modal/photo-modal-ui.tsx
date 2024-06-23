import NextImage from 'next/image';
import { Stack, Image } from '@mantine/core';
import classes from './classes.module.css';

interface IPhotoModalUi {
  photo: string;
}

export function PhotoModalUi({ photo }: IPhotoModalUi) {
  return (
    <Stack gap={0} className={classes.photoWrapper}>
      <Image
        component={NextImage}
        src={photo}
        alt="Фото экспоната'"
        width={515}
        height={515}
        sizes="30vw"
        className={classes.photo}
        placeholder="empty"
      />
    </Stack>
  );
}
