import { Button } from '@mantine/core';

export function PrimaryButton({ ...props }) {
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
