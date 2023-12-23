export interface Pagination {
  page: number;
  pages: number;
  count: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Links {
  first: string;
  last: string;
  next: string | null;
  prev: string | null;
}

export interface PaginationModel {
  links: Links;
  pages: Pagination;
}

export interface ApiResponseList<T> {
  results: T[];
  meta: Meta;
  links: Links;
}

export interface ApiResponse<T> {
  data: T;
}
