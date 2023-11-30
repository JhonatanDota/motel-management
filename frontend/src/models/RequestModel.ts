interface Pagination {
  page: number;
  pages: number;
  count: number;
}

interface Meta {
  pagination: Pagination;
}

interface Links {
  first: string;
  last: string;
  next: string | null;
  prev: string | null;
}

export default interface ApiResponse<T> {
  results: T[];
  meta: Meta;
  links: Links;
}
