import { Stack, Text } from '@mantine/core';
import { PrimaryButton } from '@/shared/ui';
import { ISubscriptionOption } from '@/shared/types';
import classes from './classes.module.css';

interface IProps {
  item: ISubscriptionOption;
  isLast: boolean;
}

export function ItemPrice({ item, isLast }: IProps) {
  return (
    <Stack gap={0} justify="center">
      <Stack mih={47} justify="center" bg="tintBlue" gap={0}>
        <Text
          ff="Benzin, Helvetica, Arial, sans-serif"
          fz={20}
          fw={400}
          lh="23px"
          ta="center"
        >
          {item?.period}
        </Text>
      </Stack>

      <Stack
        align="center"
        gap={0}
        pt={32}
        className={!isLast ? classes.content : ''}
      >
        <Stack maw={180}>
          <Text
            ff="Bahnschrift, Helvetica, Arial, sans-serif"
            fz={18}
            fw={400}
            lh="20px"
            pb={16}
          >
            {item?.description_1}
          </Text>
          <Text
            ff="Bahnschrift, Helvetica, Arial, sans-serif"
            fz={16}
            fw={400}
            lh="20px"
            c="tintGrey03"
            pb={24}
          >
            {item?.description_2}
          </Text>
        </Stack>

        <Text
          ff="Benzin, Helvetica, Arial, sans-serif"
          fz={20}
          fw={400}
          lh="normal"
          ta="center"
          c="tintGrey03"
          pb={32}
        >
          {item?.price}
        </Text>

        <PrimaryButton maw={135} fz={14}>
          Подписаться
        </PrimaryButton>
      </Stack>
    </Stack>
  );
}
