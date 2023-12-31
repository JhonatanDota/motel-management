import { URLSearchParams } from "url";

export function getPreviousPage(currentPage: number): number | undefined {
  if (currentPage === 1) return;
  return currentPage - 1;
}

export function getNextPage(
  currentPage: number,
  pageCount: number
): number | undefined {
  const targetPage: number = currentPage + 1;

  if (targetPage <= pageCount) return targetPage;
  return;
}

export function getSearchParams(searchParams: URLSearchParams): object {
  let searchParamsObject: { [key: string]: string } = {};

  searchParams.forEach((value, key) => {
    searchParamsObject[key] = value;
  });

  return searchParamsObject;
}
