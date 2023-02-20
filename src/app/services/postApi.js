import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
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
  tagTypes: ["Posts", "MyPosts", "Comments", "ExplorePosts"],
  endpoints(build) {
    return {
      addPost: build.mutation({
        query(body) {
          return {
            url: "user/post/add-post",
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["Posts", "MyPosts"],
        transformResponse: (response) => response,
      }),

      updatePost: build.mutation({
        query(body) {
          const {id, data} = body
          return {
            url: `user/post/${id}/edit-post`,
            method: "PATCH",
            body: data,
          };
        },
        invalidatesTags: ["Posts", "MyPosts"],
        transformResponse: (response) => response,
      }),

      deletePost: build.mutation({
        query(id) {
          return {
            url: `user/post/${id}/delete-post`,
            method: "PATCH",
          };
        },
        invalidatesTags: ["Posts", "MyPosts"],
        transformResponse: (response) => response,
      }),

      getMyPosts: build.query({
        query(body) {
          return {
            url: "user/post/user-feed",
            method: "GET",
            body,
          };
        },
        providesTags: ["MyPosts"],
        transformResponse: (response) => response,
      }),

      getTimelinePosts: build.query({
        query(body) {
          return {
            url: "user/post/user-timeline",
            method: "GET",
            body,
          };
        },
        providesTags: ["Posts"],
        transformResponse: (response) => response,
      }),

      getExplorePost: build.query({
        query(body) {
          return {
            url: "user/post/discover-feed",
            method: "GET",
            body,
          };
        },
        providesTags: ["ExplorePosts"],
        transformResponse: (response) => response,
      }),

      addComment: build.mutation({
        query(body) {
          const { id, data } = body;
          return {
            url: `post/${id}/add-comment`,
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["Comments"],
        transformResponse: (response) => response,
      }),

      getComments: build.query({
        query(id) {
          return {
            url: `post/${id}/comments`,
            method: "GET",
          };
        },
        providesTags: ["Comments"],
        transformResponse: (response) => response,
      }),

      addLike: build.mutation({
        query(id) {
            return {
            url: `post/${id}/add-like`,
            method: 'POST',
            };
        },
        transformResponse: (response) => response,
      }),

      getIsLiked: build.query({
        query(id) {
            return {
            url: `post/${id}/liked`,
            method: 'GET',
            };
        },
       // providesTags:['Liked'],
        transformResponse: (response) => response,
      }),

      updateUnlike: build.mutation({
        query(id) {
            return {
            url: `post/unlike/${id}`,
            method: 'PATCH',
            };
        },
        transformResponse: (response) => response,
      }),
    };
  },
});

export const {
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetMyPostsQuery,
  useGetTimelinePostsQuery,
  useGetExplorePostQuery,
  useAddCommentMutation,
  useGetCommentsQuery,

  useAddLikeMutation,
  useGetIsLikedQuery,
  useLazyGetIsLikedQuery,
  useUpdateUnlikeMutation,
} = postApi;
