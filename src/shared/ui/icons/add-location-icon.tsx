import { type ActionIconProps, ActionIcon } from '@mantine/core';

export function AddLocationIcon({
  color,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & ActionIconProps) {
  return (
    <ActionIcon variant="transparent" color={color || 'tintBlack'} {...props}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.8333 1.66667V6.66667H35.8333V10H30.8333V15H27.5V10H22.5V6.66667H27.5V1.66667H30.8333ZM17.5 21.6667C15.6666 21.6667 14.1666 20.1667 14.1666 18.3333C14.1666 16.5 15.6666 15 17.5 15C19.3333 15 20.8333 16.5 20.8333 18.3333C20.8333 20.1667 19.3333 21.6667 17.5 21.6667ZM19.1666 5.1V8.46667C18.6153 8.37955 18.0581 8.33498 17.5 8.33334C11.9166 8.33334 7.49996 12.6167 7.49996 18.6667C7.49996 22.5667 10.75 27.7333 17.5 33.9C24.25 27.7333 27.5 22.5833 27.5 18.6667V18.3333H30.8333V18.6667C30.8333 24.2 26.3833 30.75 17.5 38.3333C8.61663 30.75 4.16663 24.2 4.16663 18.6667C4.16663 10.3667 10.5 5 17.5 5C18.0666 5 18.6166 5.03334 19.1666 5.1Z"
          fill="currentcolor"
        />
      </svg>
    </ActionIcon>
  );
}
