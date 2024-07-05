import { Button, type ButtonProps } from '@mantine/core';
import classes from './classes.module.css';

export function OutlineButton({
  ...props
}: React.ComponentPropsWithoutRef<'button'> & ButtonProps) {
  return (
    <Button
      variant="transparent"
      size="md"
      mih={48}
      fz={18}
      fw={600}
      lh={1}
      radius={0}
      fullWidth
      classNames={{
        root: classes.root,
      }}
      {...props}
    />
  );
}
