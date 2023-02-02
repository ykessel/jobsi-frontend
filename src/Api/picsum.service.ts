import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Picsum } from "../types/Picsum";

// Define a service using a base URL and expected endpoints
export const picsumApi = createApi({
  reducerPath: "picsumApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://picsum.photos/v2/" }),
  endpoints: (builder) => ({
    getPicsums: builder.query<Picsum[], string>({
      query: () => "list",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPicsumsQuery } = picsumApi;
