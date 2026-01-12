import React from "react";

export default function TableSk() {
  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-x-auto">
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="border-t">
                {Array.from({ length: 8 }).map((_, i) => (
                  <td key={i} className="px-6 py-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
