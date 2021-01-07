export interface Paginate {
  TotalCount: number;
  PageSize: number;
  CurrentPage: number;
  HasNext: boolean;
  HasPrevious: boolean;
  TotalPages: number;
}