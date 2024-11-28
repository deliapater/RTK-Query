import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',
            keepUnusedDataFor: 120,
            refetchOnFocus: true,
            refetchOnReconnect: true
        }),
    }),
});

export const { useGetPostsQuery } = postsApi;