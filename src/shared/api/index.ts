import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CustomError = {
  status: number,
  data: {
    message: string,
  }
}


export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError>,
  endpoints: () => ({})
});
