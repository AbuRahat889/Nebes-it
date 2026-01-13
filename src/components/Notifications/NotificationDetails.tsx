"use client";

import { formatDate } from "@/lib/dateFormate";
import { useGetSingleNotificationQuery } from "@/redux/api/notifications";
const getStatusColor = (status: string) => {
  switch (status) {
    case "DRAFT":
      return "bg-yellow-100 text-yellow-800";
    case "PUBLISHED":
      return "bg-green-100 text-green-800";
    case "ARCHIVED":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};
export default function NoticeModal({ id }: { id: number | null }) {
  const { data } = useGetSingleNotificationQuery(id);
  const notice = data?.data;

  return (
    <>
      <div className="">
        <div className="">
          <div className="border-b flex flex-row items-start justify-between">
            <div className="flex-1">
              <h1 className="text-2xl text-balance">{notice?.title}</h1>
              <p className="mt-2">Notice ID: {notice?.id?.slice(-8)}</p>
            </div>
          </div>

          <div className="gap-6 pt-6">
            <div className="mb-4 flex gap-2">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                  notice?.status
                )}`}
              >
                {notice?.status}
              </span>
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                {notice?.noticeType}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Notice Content
              </h3>
              <p className="leading-relaxed text-foreground">{notice?.body}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-2">
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground">
                  Publish Date
                </h4>
                <p className="mt-1 text-sm text-foreground">
                  {formatDate(notice?.publishDate)}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-muted-foreground">
                  Target Type
                </h4>
                <p className="mt-1 text-sm text-foreground">
                  {notice?.targetType}
                </p>
              </div>

              {notice?.employeeName && (
                <>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground">
                      Employee Name
                    </h4>
                    <p className="mt-1 text-sm text-foreground">
                      {notice?.employeeName}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground">
                      Position
                    </h4>
                    <p className="mt-1 text-sm text-foreground">
                      {notice?.position || "N/A"}
                    </p>
                  </div>
                </>
              )}

              <div>
                <h4 className="text-xs font-semibold text-muted-foreground">
                  Created At
                </h4>
                <p className="mt-1 text-sm text-foreground">
                  {formatDate(notice?.createdAt)}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-muted-foreground">
                  Last Updated
                </h4>
                <p className="mt-1 text-sm text-foreground">
                  {formatDate(notice?.updatedAt)}
                </p>
              </div>
            </div>

            {notice?.attachments && (
              <div className="border-t border-border pt-6">
                <h4 className="text-xs font-semibold text-muted-foreground">
                  Attachments
                </h4>
                <p className="mt-1 text-sm text-foreground">
                  {notice?.attachments}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
