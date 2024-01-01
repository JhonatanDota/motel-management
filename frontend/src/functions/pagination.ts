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

export function getCurrentPage(
  searchParams: URLSearchParams
): number | undefined {
  const pageKey: string = "page[number]";
  const findedPage: string | null = searchParams.get(pageKey);

  return findedPage ? Number(findedPage) : undefined;
}

export function getSearchParams(searchParams: URLSearchParams): object {
  let searchParamsObject: { [key: string]: string } = {};

  searchParams.forEach((value, key) => {
    searchParamsObject[key] = value;
  });

  return searchParamsObject;
}

export function getSearchParamByKey(
  key: string,
  searchParams: URLSearchParams
): string {
  return searchParams.get(key) ?? "";
}
