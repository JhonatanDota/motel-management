export interface PaginationModel {
  page: number;
  pages: number;
  count: number;
}

export interface Meta {
  pagination: PaginationModel;
}

export interface Links {
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
