import { formatDate } from "@/lib/dateFormate";
import { useUpdateStatusMutation } from "@/redux/api/notifications";
import { Notice } from "@/Types/Notice";
import { Edit2, Eye, MoreVertical } from "lucide-react";
import { useState } from "react";
import { ImSpinner11 } from "react-icons/im";

export default function NotificationsHistory({
  notices,
}: {
  notices: Notice[];
}) {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const [updateStatusFN, { isLoading }] = useUpdateStatusMutation();
  const toggleMenu = async (id: number, status: string) => {
    try {
      const statusInfo = {
        status: status === "PUBLISHED" ? "ARCHIVED" : "PUBLISHED",
        id: id,
      };

      const res = await updateStatusFN(statusInfo).unwrap();
      if (res?.success) {
        setOpenMenuId(null);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <div className="px-8 py-6">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3">
                  <input type="checkbox" className="w-5 h-5" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Notice Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Departments/Individual
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Published On
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {notices?.map((notice, index) => (
                <tr
                  key={notice.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-4 py-4">
                    <input type="checkbox" className="w-5 h-5" />
                  </td>

                  <td className="px-4 py-4 text-sm font-medium">
                    {notice.title}
                  </td>

                  <td className="px-4 py-4 text-sm">{notice?.noticeType}</td>

                  <td className="px-4 py-4">
                    <span className={`text-sm font-medium `}>
                      {notice.position}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm">
                    {formatDate(notice.publishDate)}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-semibold ${
                        notice.status === "PUBLISHED"
                          ? "bg-green-100 text-green-700"
                          : notice.status === "DRAFT"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {notice.status}
                    </span>
                  </td>

                  <td className="px-4 py-4 relative">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 hover:bg-gray-200 rounded-lg">
                        <Edit2 size={18} />
                      </button>

                      <button
                        onClick={() =>
                          setOpenMenuId(!openMenuId ? notice.id : null)
                        }
                        className="p-2 hover:bg-gray-200 rounded-lg"
                      >
                        <MoreVertical size={18} />
                      </button>
                    </div>

                    {openMenuId === notice.id && (
                      <div className="absolute right-16 bottom-14 bg-white w-44 p-3 rounded-xl shadow-lg border z-10">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Published</p>

                          <label className="relative inline-flex cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked={notice.status === "PUBLISHED"}
                              onChange={() =>
                                toggleMenu(notice.id, notice.status)
                              }
                            />
                            {isLoading ? (
                              <ImSpinner11 className="animate-spin" />
                            ) : (
                              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
                            )}
                          </label>
                        </div>
                      </div>
                    )}
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
