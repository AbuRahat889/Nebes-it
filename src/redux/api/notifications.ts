import { baseApi } from "./baseApi";

const AuthApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create user api
    getAllNotifications: build.query({
      query: ({ page, limit, params }) => ({
        url: `/notices`,
        method: "GET",
        params: { page, limit, ...params },
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
    createNotificatios: build.mutation({
      query: (data) => ({
        url: `/notices`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notices"],
    }),
    getSingleNotification: build.query({
      query: (id) => ({
        url: `/notices/${id}`,
        method: "GET",
      }),
      providesTags: ["notices"],
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useUpdateStatusMutation,
  useCreateNotificatiosMutation,
  useGetSingleNotificationQuery,
} = AuthApi;
export default AuthApi;
