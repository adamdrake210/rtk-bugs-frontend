import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Bug, CreateBugPayload } from "types/types";

export const bugsApi = createApi({
  reducerPath: "bugs",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_RTK_BUGS_API }),
  tagTypes: ["Bug"],
  endpoints: (builder) => ({
    getAllBugs: builder.query<Bug[], any>({
      query: () => `/bugs`,
      providesTags: ["Bug"],
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
      invalidatesTags: ["Bug"],
    }),
    updateBug: builder.mutation<Bug, Partial<Bug> & Pick<Bug, "id">>({
      query: (bug) => ({
        url: `/bugs/${bug.id}`,
        method: "PATCH",
        body: bug,
      }),
      invalidatesTags: ["Bug"],
    }),
  }),
});

export const {
  useGetAllBugsQuery,
  useGetBugByIdQuery,
  useAddNewBugMutation,
  useUpdateBugMutation,
} = bugsApi;
