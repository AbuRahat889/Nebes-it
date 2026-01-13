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
    createNotificatios: build.mutation({
      query: (data) => ({
        url: `/notices`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["notices"],
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useUpdateStatusMutation,
  useCreateNotificatiosMutation,
} = AuthApi;
export default AuthApi;
