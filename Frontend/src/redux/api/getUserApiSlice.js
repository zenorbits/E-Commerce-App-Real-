import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const adminPageApi = createApi({
    reducerPath: 'adminPageApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/get/admin' }),
    endpoints: (build) => ({
        getUser: build.query({
            query: ({ page, limit }) => ({
                url: `/users?page=${page}&limit=${limit}`,
                method: 'GET',

            })
        })

    })
});

export const {useGetUserQuery} = adminPageApi;
export default adminPageApi;