import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from '@/shared/store';

export type LoginDto = {
  email: string,
  password: string,
}

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/auth`,
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Bearer ')

      return headers;
    }
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body,
      })
    })
  })
});

export const { useLoginMutation } = authApi;
