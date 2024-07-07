import NextImage from 'next/image';
import { Stack, Image } from '@mantine/core';
import { PicturePlaceholder } from '@/shared/ui';
import classes from './classes.module.css';

interface IProps {
  photoFile: File | null;
}

export function PicturePlace({ photoFile }: IProps) {
  return (
    <Stack
      w={520}
      h={520}
      justify="center"
      align="center"
      style={{ flexShrink: 0 }}
    >
      {photoFile ? (
        <Image
          component={NextImage}
          src={URL.createObjectURL(photoFile)}
          alt="фото экспоната"
          width={520}
          height={520}
          className={classes.picture}
          onLoad={() =>
            photoFile && URL.revokeObjectURL(URL.createObjectURL(photoFile))
          }
        />
      ) : (
        <PicturePlaceholder />
      )}
    </Stack>
  );
}
