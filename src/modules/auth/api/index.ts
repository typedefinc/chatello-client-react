import { baseApi } from "@/shared/api";

export type LoginDtoType = {
  email: string,
  password: string,
}

export type TokensDtoType = {
  accessToken: string,
  refreshToken: string,
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<TokensDtoType, LoginDtoType>({
      query: (body: LoginDtoType) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      })
    })
  })
});

export const { useLoginMutation } = authApi;

