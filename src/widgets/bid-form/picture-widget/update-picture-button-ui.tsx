import { Button, FileButton } from '@mantine/core';

interface IProps {
  photoFile: File | null;
  selectPhotoFile: (payload: File | null) => void;
}

export function UpdatePictureButtonUi({ photoFile, selectPhotoFile }: IProps) {
  return (
    <FileButton accept="image/png, image/jpeg" onChange={selectPhotoFile}>
      {(props) =>
        photoFile ? (
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
            style={{ alignSelf: 'flex-end' }}
            {...props}
          >
            выбрать другое фото
          </Button>
        ) : (
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
            style={{ alignSelf: 'flex-end' }}
            {...props}
          >
            + загрузить фото
          </Button>
        )
      }
    </FileButton>
  );
}
