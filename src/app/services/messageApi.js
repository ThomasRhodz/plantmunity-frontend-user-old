import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: "http://192.168.110.150:80/api",
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
  tagTypes: ["Messages"],
  endpoints(build) {
    return {
      sendMessage: build.mutation({
        query(id) {
          return {
            url: `chat/send-message`,
            method: "POST",
          };
        },
        invalidatesTags: ["Messages"],
        transformResponse: (response) => response,
      }),

      getMessages: build.query({
        query(id) {
          return {
            url: `chat/messages`,
            method: "GET",
          };
        },
        providesTags: ["Messages"],
        transformResponse: (response) => response,
      }),
    };
  },
});

export const { useSendMessageMutation, useGetMessagesQuery } = messageApi;
