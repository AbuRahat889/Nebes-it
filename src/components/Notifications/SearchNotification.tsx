"use client";
import React, { useState, useEffect } from "react";
import { CustomDropdown } from "../ui/dropdown";
import { departmentOptions, status } from "@/constants/DropdownInfo";

// Debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchNotification({
  onFiltersChange,
}: {
  onFiltersChange: (filters: any) => void;
}) {
  // Local state
  const [department1, setDepartment1] = useState("");
  const [department2, setDepartment2] = useState("");
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  // Debounced search
  const debouncedSearchText = useDebounce(employeeSearch, 500); // 500ms debounce

  // Update parent whenever filters change
  useEffect(() => {
    const filters: Record<string, string> = {};

    if (debouncedSearchText) filters.employeeName = debouncedSearchText;
    if (department1) filters.targetType = department1;
    if (department2) filters.status = department2;
    if (selectedDate) filters.publishDate = selectedDate;

    onFiltersChange(filters);
  }, [
    department1,
    department2,
    debouncedSearchText,
    selectedDate,
    onFiltersChange,
  ]);

  // Local reset button
  const handleReset = () => {
    setDepartment1("");
    setDepartment2("");
    setEmployeeSearch("");
    setSelectedDate("");
    // No need to notify parent here
  };

  return (
    <div>
      <div className="flex items-center justify-end gap-4 flex-wrap pt-10">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Filter by:</span>
        </div>

        {/* First Department Dropdown */}
        <CustomDropdown
          options={departmentOptions}
          value={department1}
          onChange={setDepartment1}
          placeholder="Select a department"
        />

        {/* Employee Search Input */}
        <input
          type="text"
          placeholder="Employee Id/ Name"
          className="text-primaryColor text-base font-medium outline-none px-5 py-2 mt-2 bg-transparent border border-borderColor rounded-lg"
          value={employeeSearch}
          onChange={(e) => setEmployeeSearch(e.target.value)}
        />

        {/* Second Department Dropdown */}
        <CustomDropdown
          options={status}
          value={department2}
          onChange={setDepartment2}
          placeholder="Select a department"
        />

        {/* Date Picker */}
        <div className="flex items-center gap-2 px-4 py-2 border border-borderColor rounded-lg text-primaryColor">
          <input
            type="date"
            className="focus:outline-none bg-transparent"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <span className="text-gray-400">Published on</span>
        </div>

        {/* Local Reset Button */}
        <button
          className="px-4 py-2 text-[#3b82f6] font-medium border border-[#3b82f6] rounded-lg"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
