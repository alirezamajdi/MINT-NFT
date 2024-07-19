interface Responsive<T> {
  page: number;
  per_page: number;
  total: number;
  data: T;
}

interface Member {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
