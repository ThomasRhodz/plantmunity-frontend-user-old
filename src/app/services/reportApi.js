import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.GATSBY_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      } else {
        headers.set("Accept", `application/json`);
      }

      return headers;
    },
  }),
  endpoints(build) {
    return {
      addPostReport: build.mutation({
        query(body) {
            const {id, data} = body;
          return {
            url: `post/${id}/add-report`,
            method: "POST",
            body:data,
          };
        },
        transformResponse: (response) => response,
      }),
    };
  },
});

export const {
 useAddPostReportMutation
} = reportApi;
