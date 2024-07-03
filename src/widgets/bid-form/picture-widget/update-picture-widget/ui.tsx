import NextImage from 'next/image';

import { Button, FileButton, Flex, Image, Loader, Stack } from '@mantine/core';

import { PrimaryButton } from '@/shared/ui';

interface IUpdatePictureWidgetUi {
  picture: File | null;
  isLoading: boolean;
  selectPicture: (payload: File | null) => void;
  handleUpdate: () => void;
  handleDelete: () => void;
}

export function UpdatePictureWidgetUi({
  picture,
  isLoading,
  selectPicture,
  handleUpdate,
  handleDelete,
}: IUpdatePictureWidgetUi) {
  return isLoading ? (
    <Flex
      mih={200}
      justify="center"
      align="center"
      direction="column"
      wrap="nowrap"
    >
      <Loader />
    </Flex>
  ) : (
    <Stack gap={20} align="center">
      {picture && (
        <Image
          component={NextImage}
          width={100}
          height={100}
          maw={200}
          style={{
            aspectRatio: 1,
          }}
          src={picture ? URL.createObjectURL(picture) : '#'}
          alt="Фотография картины"
          onLoad={() =>
            picture && URL.revokeObjectURL(URL.createObjectURL(picture))
          }
        />
      )}
      {picture && (
        <PrimaryButton onClick={handleUpdate}>Сохранить</PrimaryButton>
      )}
      <FileButton accept="image/png, image/jpeg" onChange={selectPicture}>
        {(props) =>
          picture ? (
            <Button
              variant="transparent"
              size="compact-lg"
              c="tintGrey03"
              onClick={handleDelete}
            >
              Выбрать другое фото
            </Button>
          ) : (
            <PrimaryButton {...props}>Открыть галерею</PrimaryButton>
          )
        }
      </FileButton>
    </Stack>
  );
}
