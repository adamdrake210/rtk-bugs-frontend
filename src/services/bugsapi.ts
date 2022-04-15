import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Bug, CreateBugPayload, UpdateBugPayload } from "types/types";
import { USER_API_TAG } from "./usersapi";

export const BUGS_API_REDUCER_KEY = "bugs";
export const BUGS_API_TAG = "Bug";

export const bugsApi = createApi({
  reducerPath: BUGS_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_RTK_API }),
  tagTypes: [BUGS_API_TAG, USER_API_TAG],
  endpoints: (builder) => ({
    getAllBugs: builder.query<Bug[], void>({
      query: () => `/bugs`,
      providesTags: [BUGS_API_TAG],
    }),
    getBugById: builder.query<Bug, number>({
      query: (id) => `bugs/${id}`,
    }),
    addNewBug: builder.mutation<Bug, CreateBugPayload>({
      query: (initialBug) => ({
        url: `/bugs`,
        method: "POST",
        body: initialBug,
      }),
      invalidatesTags: [BUGS_API_TAG, USER_API_TAG],
    }),
    updateBug: builder.mutation<
      Bug,
      Partial<UpdateBugPayload> & Pick<Bug, "id">
    >({
      query: (bug) => ({
        url: `/bugs/${bug.id}`,
        method: "PATCH",
        body: bug,
      }),
      invalidatesTags: [BUGS_API_TAG, USER_API_TAG],
    }),
    removeBug: builder.mutation<void, number>({
      query: (id) => ({
        url: `/bugs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [BUGS_API_TAG, USER_API_TAG],
    }),
  }),
});

export const {
  useGetAllBugsQuery,
  useGetBugByIdQuery,
  useAddNewBugMutation,
  useUpdateBugMutation,
  useRemoveBugMutation,
} = bugsApi;
