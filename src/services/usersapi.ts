import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { User } from "types/types";

export const USER_API_REDUCER_KEY = "users";
export const USER_API_TAG = "User";

export const userApi = createApi({
  reducerPath: USER_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_RTK_API }),
  tagTypes: [USER_API_TAG],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => `/users`,
      providesTags: [USER_API_TAG],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userApi;
