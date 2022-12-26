export interface IUser {
  id: number;
  username: string;
  email: string;
  address: string;
}

export interface Meta {
  currentPage: number;
  perPage: number;
  totalPages: number;
}

export interface RootObject {
  meta: Meta;
  items: IUser[];
}