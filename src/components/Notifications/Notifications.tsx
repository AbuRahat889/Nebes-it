"use client";

import { Notice } from "@/Types/Notice";
import { Edit2, Plus } from "lucide-react";
import Link from "next/link";
import Pagination from "../ui/Pagination";
import NotificationsHistory from "./NotificationsHistory";
import SearchNotification from "./SearchNotification";

const notices: Notice[] = [
  {
    id: 1,
    title: "Office closed on Friday for maintenance.",
    type: "General / Company-Wide",
    department: "All Department",
    departmentColor: "text-blue-600",
    publishedOn: "15-Jun-2025",
    status: "Published",
  },
  {
    id: 2,
    title: "Eid al-Fitr holiday schedule.",
    type: "Holiday & Event",
    department: "Finance",
    departmentColor: "text-blue-600",
    publishedOn: "15-Jun-2025",
    status: "Published",
  },
  {
    id: 3,
    title: "Updated code of conduct policy",
    type: "HR & Policy Update",
    department: "Sales Team",
    departmentColor: "text-orange-500",
    publishedOn: "15-Jun-2025",
    status: "Published",
  },
  {
    id: 4,
    title: "Payroll for October will be processed on 28th",
    type: "Finance & Payroll",
    department: "Web Team",
    departmentColor: "text-blue-600",
    publishedOn: "15-Jun-2025",
    status: "Published",
  },
  {
    id: 5,
    title: "System update scheduled for 30 Oct 10:09 PM",
    type: "IT / System Maintenance",
    department: "Database Team",
    departmentColor: "text-purple-600",
    publishedOn: "15-Jun-2025",
    status: "Published",
    isToggled: true,
  },
  {
    id: 6,
    title: "Design team sprint review moved to Tuesday",
    type: "Department / Team",
    department: "Admin",
    departmentColor: "text-purple-600",
    publishedOn: "15-Jun-2025",
    status: "Published",
  },
  {
    id: 7,
    title: "Unauthorized absence recorded on 18 Oct 2025",
    type: "Warning / Disciplinary",
    department: "Individual",
    departmentColor: "text-cyan-600",
    publishedOn: "15-Jun-2025",
    status: "Unpublished",
  },
  {
    id: 8,
    title: "Office closed today due to severe weather",
    type: "Emergency / Urgent",
    department: "HR",
    departmentColor: "text-pink-600",
    publishedOn: "15-Jun-2025",
    status: "Draft",
  },
];

export default function NoticeManagement() {
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
        <SearchNotification />
      </div>

      <NotificationsHistory notices={notices} />

      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={(page: number) => console.log(page)}
      />
    </div>
  );
}
