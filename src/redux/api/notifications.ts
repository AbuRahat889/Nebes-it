import { baseApi } from "./baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create user api
    getAllNotifications: build.query({
      query: () => ({
        url: `/notices`,
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const { useGetAllNotificationsQuery } = AuthApi;
export default AuthApi;
