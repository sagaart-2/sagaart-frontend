import { Stack } from '@mantine/core';
import { UpdatePictureButtonUi } from './update-picture-button-ui';
import { PicturePlace } from './picture-place';
import { UpdatePictureModalOpenWidget } from './update-picture-modal-open-widget';

export function PictureWidget() {
  return (
    <Stack gap={0} p={0} w={520} h={560}>
      <PicturePlace />
      <UpdatePictureModalOpenWidget
        triggerComponentUi={UpdatePictureButtonUi}
      />
    </Stack>
  );
}
