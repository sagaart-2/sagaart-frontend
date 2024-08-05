import { type ActionIconProps, ActionIcon } from '@mantine/core';

export function PersonIcon({
  color,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & ActionIconProps) {
  return (
    <ActionIcon variant="transparent" color={color || 'tintBlack'} {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12,2C9.8,2,8,3.8,8,6s1.8,4,4,4s4-1.8,4-4S14.2,2,12,2z M20,22h-2v-5.5c0-1.4-1.1-2.5-2.5-2.5h-7
	C7.1,14,6,15.1,6,16.5V22H4v-5.5C4,14,6,12,8.5,12h7c2.5,0,4.5,2,4.5,4.5V22z"
          fill="currentcolor"
        />
      </svg>
    </ActionIcon>
  );
}
