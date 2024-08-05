import { Stack, Title, Text, Image, Box } from '@mantine/core';
import NextImage from 'next/image';
import { ItemsListPrice } from '@/widgets/subscription/item-list';
import { pricesList } from '@/views/subscription-page/lib/mock-prices-list';
import Gif from '../../../public/Gif.gif';

export function SubscriptionPage() {
  return (
    <Stack pt={56} pb={88}>
      <Stack gap="0">
        <Text
          ff="Benzin, Helvetica, Arial, sans-serif"
          fz={20}
          fw={400}
          c="tintGrey03"
        >
          Рекомендуем оформить подписку
        </Text>
        <Title
          mt={32}
          mb={12}
          order={1}
          fz={36}
          lh={1}
          ff="Benzin, Helvetica, Arial, sans-serif"
        >
          Оформите подписку на оценку работ
        </Title>
        <Text
          ff="Benzin, Helvetica, Arial, sans-serif"
          fz={20}
          fw={400}
          c="tintGrey03"
          lh="23px"
        >
          Уникальный алгоритм оценки арт-объектов
        </Text>
        <Image
          mt={56}
          mb={72}
          component={NextImage}
          src={Gif}
          alt="Gif"
          width={1264}
          height={711}
        />
        <Text
          ff="Benzin, Helvetica, Arial, sans-serif"
          fz={34}
          fw={400}
          lh="40px"
          ta="center"
          mb={40}
        >
          Выберите предпочтительный вариант
        </Text>
        <ItemsListPrice items={pricesList} />
        <Title
          mt={72}
          mb={40}
          order={1}
          fz={34}
          lh="40px"
          ff="Benzin, Helvetica, Arial, sans-serif"
          ta="center"
        >
          Ценность подписки
        </Title>
        <Box w={622} m="auto">
          <Text
            fz={18}
            pb={15}
            fw={400}
            lh="20px"
            ff="Bahnschrift, Helvetica, Arial, sans-serif"
          >
            Стоимость арт-объекта определяется на основе результатов работы
            авторского алгоритма для анализа больших данных, использующего
            машинное обучение и учитывающего 35 критериев оценки арт-объекта и
            его автора.
          </Text>
          <Text
            fz={18}
            fw={400}
            lh="20px"
            ff="Bahnschrift, Helvetica, Arial, sans-serif"
          >
            Предлагаемая вам оценка исключает субъективное мнение, экономит
            время по анализу цен на рынке, выступает в&nbsp;качестве замены
            услуг оценщика.
          </Text>
        </Box>
      </Stack>
    </Stack>
  );
}
