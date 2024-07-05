export function getYear(dateStr: string) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  return year;
}
