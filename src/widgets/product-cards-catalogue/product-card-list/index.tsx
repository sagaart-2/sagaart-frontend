import { type IProductCard } from '@/shared/types';
import { Grid, GridCol } from '@mantine/core';
import { ProductCard } from '../product-card';
import classes from './classes.module.css';

interface IProps {
  items: IProductCard[] | null;
}

export async function ProductCardsList({ items }: IProps) {
  return (
    <Grid
      className={classes.grid}
      columns={4}
      styles={{
        inner: { margin: '0' },
        root: { '--grid-gutter': '0' },
      }}
    >
      {items?.[0] &&
        items.map((item) => (
          <GridCol span={4} className={classes.gridCol} key={item.id}>
            <ProductCard {...item} />
          </GridCol>
        ))}
    </Grid>
  );
}
