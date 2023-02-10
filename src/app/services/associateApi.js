import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const associateApi = createApi({
  reducerPath: "associateApi",
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
  tagTypes: [
    "Associate",
    "SentRequests",
    "FollowRequests",
    "Followers",
    "Followings",
  ],
  endpoints(build) {
    return {
      addAssociate: build.mutation({
        query(id) {
          return {
            url: `associate/follow/${id}`,
            method: "POST",
          };
        },
        invalidatesTags: ["Associate", "SentRequests"],
        transformResponse: (response) => response,
      }),

      getIsFollowed: build.query({
        query(id) {
          return {
            url: `associate/is-followed/${id}`,
            method: "GET",
          };
        },
        providesTags: ["Associate"],
        transformResponse: (response) => response,
      }),

      getIsFollowingYou: build.query({
        query(id) {
          return {
            url: `associate/is-following-you/${id}`,
            method: "GET",
          };
        },
        transformResponse: (response) => response,
      }),

      updateUnfollow: build.mutation({
        query(id) {
          return {
            url: `associate/unfollow/${id}`,
            method: "PATCH",
          };
        },
        invalidatesTags: [
          "Associate",
          "SentRequests",
          "FollowRequests",
          "Followers",
          "Followings",
        ],
        transformResponse: (response) => response,
      }),

      acceptFollowRequest: build.mutation({
        query(id) {
          return {
            url: `associate/accept-request/${id}`,
            method: "PATCH",
          };
        },
        invalidatesTags: [
          "Associate",
          "FollowRequests",
          "Followers",
        ],
        transformResponse: (response) => response,
      }),

      getFollowers: build.query({
        query() {
          return {
            url: `associate/followers`,
            method: "GET",
          };
        },
        providesTags: ["Followers"],
        transformResponse: (response) => response,
      }),

      getFollowing: build.query({
        query() {
          return {
            url: `associate/followings/`,
            method: "GET",
          };
        },
        providesTags: ["Followings"],
        transformResponse: (response) => response,
      }),

      getFollowRequests: build.query({
        query() {
          return {
            url: `associate/follow-requests/`,
            method: "GET",
          };
        },
        providesTags: ["FollowRequests"],
        transformResponse: (response) => response,
      }),

      getSentRequests: build.query({
        query() {
          return {
            url: `associate/sent-requests/`,
            method: "GET",
          };
        },
        providesTags: ["SentRequests"],
        transformResponse: (response) => response,
      }),
    };
  },
});

export const {
  useAddAssociateMutation,
  useUpdateUnfollowMutation,
  useAcceptFollowRequestMutation,

  useLazyGetIsFollowedQuery,
  useGetIsFollowingYouQuery,

  useGetFollowRequestsQuery,
  useGetSentRequestsQuery,
  useGetFollowersQuery,
  useGetFollowingQuery,
} = associateApi;
