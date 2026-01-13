import { baseApi } from "./baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create user api
    getAllNotifications: build.query({
      query: () => ({
        url: `/notices`,
        method: "GET",
      }),
      providesTags: ["notices"],
    }),
    updateStatus: build.mutation({
      query: ({ id, status }) => ({
        url: `/notices/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["notices"],
    }),
  }),
});

export const { useGetAllNotificationsQuery, useUpdateStatusMutation } = AuthApi;
export default AuthApi;
