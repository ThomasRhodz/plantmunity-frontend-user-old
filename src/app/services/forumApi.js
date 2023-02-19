import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const forumApi = createApi({
  reducerPath: "forumApi",
  baseQuery: fetchBaseQuery({
    //baseUrl: 'http://192.168.110.150:80/api',
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
  tagTypes: ["MyForum", "UserForum", "PublicForum", "Activities"],
  endpoints(build) {
    return {
      addForum: build.mutation({
        query(body) {
          return {
            url: "forum/my-forum/add-forum",
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["MyForum"],
        transformResponse: (response) => response,
      }),

      getMyForums: build.query({
        query() {
          return {
            url: "forum/my-forums",
            method: "GET",
          };
        },
        providesTags: ["MyForum"],
        transformResponse: (response) => response,
      }),

      updateForum: build.mutation({
        query(body) {
          const { id, data } = body;
          return {
            url: `forum/my-forum/${id}/update-forum/`,
            method: "PATCH",
            body: data,
          };
        },
        invalidatesTags: ["MyForum", "PublicForum"],
        transformResponse: (response) => response,
      }),

      deleteForum: build.mutation({
        query(id) {
          return {
            url: `forum/my-forum/${id}/delete-forum/`,
            method: "PATCH",
          };
        },
        invalidatesTags: ["MyForum", "PublicForum"],
        transformResponse: (response) => response,
      }),

      getUserForums: build.query({
        query(id) {
          return {
            url: `forum/user-forums/${id}`,
            method: "GET",
          };
        },
        providesTags: ["UserForum"],
        transformResponse: (response) => response,
      }),

      getPublicForums: build.query({
        query() {
          return {
            url: `forum/public-forums`,
            method: "GET",
          };
        },
        providesTags: ["PublicForum"],
        transformResponse: (response) => response,
      }),

      ///////////////////////////  Activities ///////////////////////////
      addReply: build.mutation({
        query(body) {
          const { id, data } = body;
          return {
            url: `forum/${id}/add-reply`,
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["Activities"],
        transformResponse: (response) => response,
      }),

      deleteReply: build.mutation({
        query(id) {
          return {
            url: `activity/${id}/delete-reply`,
            method: "PATCH",
          };
        },
        invalidatesTags: ["Activities"],
        transformResponse: (response) => response,
      }),

      getActivities: build.query({
        query(id) {
          return {
            url: `forum/${id}/replies`,
            method: "GET",
          };
        },
        providesTags: ["Activities"],
        transformResponse: (response) => response,
      }),
    };
  },
});

export const {
  useAddForumMutation,
  useGetMyForumsQuery,
  useDeleteForumMutation,
  useUpdateForumMutation,

  useGetPublicForumsQuery,
  useGetUserForumsQuery,

  useAddReplyMutation,
  useDeleteReplyMutation,
  useGetActivitiesQuery
} = forumApi;
