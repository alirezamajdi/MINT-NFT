interface Pagination {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}
interface File {
  id: string;
  type: string;
  downloadUrl: string;
  thumbnails: {};
}
interface DecodeToken {
  _id: string;
  fullName: string;
  email: string;
  iat: number;
  exp: number;
}
