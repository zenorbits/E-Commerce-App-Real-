import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const userAuthApi = createApi({
    reducerPath:'userAuthApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000/api/auth/user'}),
    endpoints:(build)=>({
        userLogin:build.mutation({
            query:(credentials)=>({
                url:'/login',
                method:'POST',
                body:credentials,
            })
            
        }),

        userRegister:build.mutation({
            query:(newUser)=>({
                url:'/register',
                method:'POST',
                body:newUser
            })
        })
    })

});

export default userAuthApi;

export const {useUserLoginMutation,useUserRegisterMutation} = userAuthApi;
