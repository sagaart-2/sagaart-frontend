import { Button, type ButtonProps } from '@mantine/core';

export function PrimaryButton({
  ...props
}: React.ComponentPropsWithoutRef<'button'> & ButtonProps) {
  return <Button variant="filled" h={48} fullWidth {...props} />;
}
