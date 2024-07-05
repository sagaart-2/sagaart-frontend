export function priceConversion(price: string): string {
  const roundedPrice: number = Math.round(Number(price));

  const formattedPrice: string = roundedPrice.toLocaleString('ru-RU', {
    minimumFractionDigits: 0,
  });

  return formattedPrice;
}
