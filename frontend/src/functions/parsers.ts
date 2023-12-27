export function extractNumbers(str: string): number {
  const numbersStr: string = str.replace(/[^0-9]/g, "");

  return Number(numbersStr);
}
