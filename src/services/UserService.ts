import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootObject } from '../models/Types';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://new-backend.unistory.app/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<RootObject, number>({
      query: (page) => `data?page=${page}&perPage=49`,
    }),
  }),
});

export const { useGetUsersQuery } = userAPI;