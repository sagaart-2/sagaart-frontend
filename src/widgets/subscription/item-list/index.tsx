import { Grid, GridCol } from '@mantine/core';
import { ItemPrice } from '../item-price';

export function ItemsListPrice({ items }: any) {
  return (
    <Grid gutter="sm" justify="space-around">
      {items?.[0] &&
        items.map((item) => (
          <GridCol span="content" key={item.id} p={0}>
            <ItemPrice item={item} />
          </GridCol>
        ))}
    </Grid>
  );
}
