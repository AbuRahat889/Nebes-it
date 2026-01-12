import { Notice } from "@/Types/Notice";
import { Edit2, Eye, MoreVertical } from "lucide-react";
import React from "react";

export default function NotificationsHistory({
  notices,
}: {
  notices: Notice[];
}) {
  return (
    <div>
      {/* Table Section */}
      <div className="px-8 py-6">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-300 rounded cursor-pointer"
                  />
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 text-sm">
                  Title
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 text-sm">
                  Notice Type
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 text-sm">
                  Departments/Individual
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 text-sm">
                  Published On
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 text-sm">
                  Status
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, index) => (
                <tr
                  key={notice.id}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-4 text-gray-900 text-sm font-medium">
                    {notice.title}
                  </td>
                  <td className="px-4 py-4 text-gray-700 text-sm">
                    {notice.type}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`text-sm font-medium ${notice.departmentColor}`}
                    >
                      {notice.department}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-700 text-sm">
                    {notice.publishedOn}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          notice.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : notice.status === "Unpublished"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {notice.status}
                      </span>
                      {notice.isToggled !== undefined && (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked={notice.isToggled}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                        </label>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
