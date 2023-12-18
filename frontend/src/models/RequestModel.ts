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

export interface ApiResponseList<T> {
  results: T[];
  meta: Meta;
  links: Links;
}

export interface ApiResponse<T> {
  data: T;
}
