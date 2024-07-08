import { Stack } from '@mantine/core';
import { UpdatePictureButtonUi } from './update-picture-button-ui';
import { PicturePlace } from './picture-place';

interface IProps {
  photoFile: File | null;
  selectPhotoFile: (payload: File | null) => void;
}

export function PictureWidget({ photoFile, selectPhotoFile }: IProps) {
  return (
    <Stack gap={0} p={0} w={520} h={560}>
      <PicturePlace {...{ photoFile }} />
      <UpdatePictureButtonUi
        {...{ photoFile }}
        selectPhotoFile={selectPhotoFile}
      />
    </Stack>
  );
}
