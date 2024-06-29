import { type IProductCard } from '@/shared/types';
import { Grid, GridCol } from '@mantine/core';
import { ProductCard } from '../product-card';
import classes from './classes.module.css';

interface IProps {
  items: IProductCard[];
}

export function ProductCardsList({ items }: IProps) {
  return (
    <Grid className={classes.grid} gutter="sm">
      {items?.[0] &&
        items.map((item) => (
          <GridCol span="content" className={classes.gridCol} key={item.id}>
            <ProductCard {...item} />
          </GridCol>
        ))}
    </Grid>
  );
}
