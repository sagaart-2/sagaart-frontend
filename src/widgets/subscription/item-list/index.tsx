import { Grid, GridCol } from '@mantine/core';
import { ISubscriptionOption } from '@/shared/types';
import { ItemPrice } from '../item-price';

interface IProps {
  items: ISubscriptionOption[];
}

export function ItemsListPrice({ items }: IProps) {
  return (
    <Grid gutter={0} justify="">
      {items?.[0] &&
        items.map((item, index, arr) => {
          const isLast = arr.length - 1 === index;
          return (
            <GridCol span={3} key={item.id} p={0}>
              <ItemPrice item={item} isLast={isLast} />
            </GridCol>
          );
        })}
    </Grid>
  );
}
