import { Button } from '@mantine/core';

interface IUpdatePictureButtonUi
  extends Partial<React.ComponentPropsWithoutRef<'button'>> {}

export function UpdatePictureButtonUi({
  onClick,
  ...props
}: IUpdatePictureButtonUi) {
  return (
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
      onClick={(e) => {
        e.preventDefault();
        return onClick && onClick(e);
      }}
      {...props}
    >
      + загрузить фото
    </Button>
  );
}
