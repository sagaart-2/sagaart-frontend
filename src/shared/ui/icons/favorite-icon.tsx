import { type ActionIconProps, ActionIcon } from '@mantine/core';

export function FavoriteIcon({
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
          d="M16.5 2.825C14.76 2.825 13.09 3.635 12 4.915C10.91 3.635 9.24 2.825 7.5 2.825C4.42 2.825 2 5.245 2 8.325C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.325C22 5.245 19.58 2.825 16.5 2.825ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.325C4 6.325 5.5 4.825 7.5 4.825C9.04 4.825 10.54 5.815 11.07 7.185H12.94C13.46 5.815 14.96 4.825 16.5 4.825C18.5 4.825 20 6.325 20 8.325C20 11.215 16.86 14.065 12.1 18.375Z"
          fill="currentcolor"
        />
      </svg>
    </ActionIcon>
  );
}
