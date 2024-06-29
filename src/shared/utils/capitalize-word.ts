export function capitalizeWord(word: string) {
  return (
    word.toLowerCase().charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}
