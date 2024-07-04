import { ProductCardPage } from '@/views/product-card-page';

export default async function ProductCardRoute({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return <ProductCardPage id={id} />;
}
