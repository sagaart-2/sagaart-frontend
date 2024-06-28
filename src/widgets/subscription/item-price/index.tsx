import { Stack, Text, Button, Flex } from '@mantine/core';
import classes from './classes.module.css';

export function ItemPrice({ item }: any) {
  return (
    <Stack>
      <Flex direction="column" w={252} gap={32}>
        <Stack mih={47} justify="center">
          <Text
            ff="Benzin, Helvetica, Arial, sans-serif"
            fz={20}
            fw={400}
            lh="23px"
            ta="center"
            pr={71}
          >
            {item?.period}{' '}
          </Text>
        </Stack>

        <Flex direction="column" className={classes.content}>
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
            c="#707070"
            pb={24}
          >
            {item?.description_2}
          </Text>
          <Text
            ff="Benzin, Helvetica, Arial, sans-serif"
            fz={20}
            fw={400}
            lh="normal"
            ta="center"
            c="#707070"
            pb={32}
          >
            {item?.price}
          </Text>
          <Button
            w={125}
            justify="center"
            ff="Bahnschrift, Helvetica, Arial, sans-serif"
            fz={14}
            fw={700}
            lh="20px"
            m="auto"
          >
            Подписаться
          </Button>
        </Flex>
      </Flex>
    </Stack>
  );
}
