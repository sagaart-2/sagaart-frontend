import { getBidByIdAction } from '@/entities/bid';
import { Stack, Title, Text } from '@mantine/core';
import { BidResultUi } from './ui';

interface IProps {
  id: string;
}

export async function BidResultPage({ id }: IProps) {
  const { data } = await getBidByIdAction(id);

  return (
    <Stack gap={53} py={88}>
      <Title
        order={1}
        fz={34}
        lh={1.176}
        ff="Benzin, Helvetica, Arial, sans-serif"
      >
        Результат оценки стоимости экспоната
      </Title>
      {data ? (
        <BidResultUi {...data} />
      ) : (
        <Text fz={24} ta="center">
          Запрос не был обработан. Попробуйте повторить запрос!
        </Text>
      )}
    </Stack>
  );
}
