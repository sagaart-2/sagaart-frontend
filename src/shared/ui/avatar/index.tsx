import NextImage from 'next/image';
import { Image, Stack, Text } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import classes from './classes.module.css';

interface IProps {
  photo: string | null;
  name: string;
  lastname: string;
}

export function Avatar({ name, lastname, photo }: IProps) {
  const nameInitial = name.slice(0, 1).toUpperCase();
  const lastNameInitial = lastname.slice(0, 1).toUpperCase();
  const initials = `${nameInitial}${lastNameInitial}`;

  return (
    <Stack gap={0} p={0} w={200} h={200} className={classes.avatarWrapper}>
      {photo && (
        <Image
          component={NextImage}
          src={photo}
          alt="Фото художника"
          width={200}
          height={200}
          ta="center"
          className={classes.avatar}
        />
      )}
      {name && !photo && (
        <Text fz={48} c="tintGrey01">
          {initials}
        </Text>
      )}
      {!name && !photo && (
        <IconUser size={72} stroke={1} color="var(--mantine-color-white)" />
      )}
    </Stack>
  );
}
