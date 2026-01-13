"use client";

import { useGetAllNotificationsQuery } from "@/redux/api/notifications";
import { Edit2, Plus } from "lucide-react";
import Link from "next/link";
import Pagination from "../ui/Pagination";
import NotificationsHistory from "./NotificationsHistory";
import SearchNotification from "./SearchNotification";
import { useState } from "react";

export default function NoticeManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    employeeName: "",
    targetType: "",
    status: "",
    publishDate: "",
  });

  const { data } = useGetAllNotificationsQuery({
    page: currentPage,
    limit: 10,
    params: { ...filters },
  });
  console.log(data, "data");
  const totalPages = data?.meta?.totalPages || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen ">
      <div className="px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Notice Management
            </h1>
            <div className="flex gap-4 pt-3">
              <div className="border-r-2 pr-4">
                <span className="text-green-600 font-semibold">
                  Active Notices:
                </span>
                <span className="ml-2 text-green-600 font-bold">8</span>
              </div>

              <div>
                <span className="text-orange-500 font-semibold">
                  Draft Notice:
                </span>
                <span className="ml-2 text-orange-500 font-bold">04</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href={"/notifications/create-notifications"}>
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors">
                <Plus size={18} />
                Create Notice
              </button>
            </Link>
            <button className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <Edit2 size={18} />
              AI Draft Notice
            </button>
          </div>
        </div>
        <SearchNotification onFiltersChange={setFilters} />
      </div>

      <NotificationsHistory notices={data?.data} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
