"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  label?: string;
}

export function CustomDropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
  label,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <label
        htmlFor="description"
        className="text-sm font-medium text-gray-700 "
      >
        {label}
      </label>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-w-52 flex gap-2 items-center justify-between px-4 py-2 text-left text-primaryColor  border border-[#9096b1] rounded-lg mt-2"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
     
        <div className="flex items-center justify-between w-full">
          <span className="block truncate ">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <div className="">
            <svg
              className={cn(
                "w-4 h-4 text-primaryColor transition-transform duration-200",
                isOpen && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-[9999] w-full mt-1 bg-white border-2 border-primaryColor rounded-lg  shadow-lg">
          <ul
            className="py-1 max-h-60 overflow-auto"
            role="listbox"
            aria-label="Options"
          >
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "w-full px-4 py-3 text-left text-gray-900 hover:bg-primaryColor hover:text-white transition-colors duration-150",
                    selectedValue === option.value &&
                      "bg-primaryColor text-white"
                  )}
                  role="option"
                  aria-selected={selectedValue === option.value}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
// const [selectedBrand, setSelectedBrand] = useState("");

// const timeTypes = [
//   { value: "Year", label: "Year" },
//   { value: "Month", label: "Month" },
//   { value: "Week", label: "Week" },
// ];

{
  /* <CustomDropdown
  options={carBrands}
  value={selectedBrand}
  onChange={setSelectedBrand}
  placeholder="Select a car brand"
/>; */
}
