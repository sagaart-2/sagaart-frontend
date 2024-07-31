import { Button, type ButtonProps } from '@mantine/core';

export function PrimaryButton({
  ...props
}: React.ComponentPropsWithoutRef<'button'> & ButtonProps) {
  return (
    <Button
      variant="filled"
      size="sm"
      mih={48}
      fz={18}
      fw={400}
      lh={1}
      radius={0}
      fullWidth
      {...props}
    />
  );
}
