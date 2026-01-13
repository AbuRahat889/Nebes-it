"use client";
import React, { useState } from "react";
import { CustomDropdown } from "../ui/dropdown";
import { departmentOptions } from "@/constants/DropdownInfo";

export default function SearchNotification() {
  const [selectDepartment, setSelectedDepartment] = useState("");

  return (
    <div>
      {" "}
      {/* Filter Section */}
      <div className="flex items-center justify-end gap-4 flex-wrap pt-10">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Filter by:</span>
        </div>
        <CustomDropdown
          options={departmentOptions}
          value={selectDepartment}
          onChange={setSelectedDepartment}
          placeholder="Select a department"
        />

        <input
          type="text"
          placeholder="Employee Id/ Name"
          className="text-primaryColor text-base font-medium outline-none px-5 py-2 mt-2 bg-transparent border border-borderColor rounded-lg"
        />

        <CustomDropdown
          options={departmentOptions}
          value={selectDepartment}
          onChange={setSelectedDepartment}
          placeholder="Select a department"
        />

        <div className="flex items-center gap-2 px-4 py-2 border border-borderColor rounded-lg  text-primaryColor">
          <input
            type="date"
            className="focus:outline-none bg-transparent"
            defaultValue="2025-06-15"
          />
          <span className="text-gray-400">Published on</span>
        </div>
        <button className="px-4 py-2 text-[#3b82f6] font-medium border border-[#3b82f6] rounded-lg">
          Reset Filters
        </button>
      </div>
    </div>
  );
}
