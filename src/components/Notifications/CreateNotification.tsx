"use client";

import type React from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import { FormInput } from "../ui/Input";
import {
  departmentOptions,
  employeeOptions,
  noticeTypeOptions,
  positionOptions,
} from "@/constants/DropdownInfo";
import Modal from "../ui/modal";
import { SuccessNotification } from "./SuccesfullModal";

export default function CreateNoticePage() {
  const methods = useForm({
    defaultValues: {
      targetDepartment: "",
      noticeTitle: "",
      employeeId: "",
      employeeName: "",
      position: "",
      noticeType: "",
      publishDate: "",
      noticeBody: "",
    },
  });

  const { handleSubmit, reset } = methods;
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data: any) => {
    console.log("[v0] Form submitted with data:", data);
    console.log("[v0] Uploaded file:", uploadedFile);
    // Handle form submission here
    setIsOpen(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const handleCancel = () => {
    reset();
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen  p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg border">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-xl font-normal text-textColor">Create a Notice</h1>
      </div>

      {/* Instructions */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="bg-white rounded-xl border border-borderColor">
            <div className="bg-gray-50 border border-gray-200 rounded-t-xl p-4">
              <p className="text-base font-medium leading-6 text-primaryColor">
                Please fill in the details below
              </p>
            </div>
            {/* Form */}
            <div className="p-6">
              <div className="bg-[#f5f6fa] p-6 rounded-xl">
                <CustomDropdown
                  // name="targetDepartment"
                  label="Target Department(s) or Individual"
                  options={departmentOptions}
                  placeholder="Select a department"
                />
              </div>

              {/* Notice Title */}
              <div>
                <FormInput
                  name="noticeTitle"
                  type="text"
                  label="Notice Title"
                  placeholder="Write the Title of Notice"
                  required
                />
              </div>

              {/* Three Column Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <CustomDropdown
                    label="Select Employee ID"
                    options={employeeOptions}
                    placeholder="Select employee designation"
                  />
                </div>
                <div>
                  <FormInput
                    name="employeeName"
                    type="text"
                    label="Employee Name"
                    placeholder="Enter employee full name"
                  />
                </div>
                <div>
                  <CustomDropdown
                    label="Position"
                    options={positionOptions}
                    placeholder="Select employee department"
                  />
                </div>
              </div>

              {/* Notice Type and Publish Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <CustomDropdown
                    label="Notice Type"
                    options={noticeTypeOptions}
                    placeholder="Select Notice Type"
                  />
                </div>
                <div>
                  <FormInput
                    name="publishDate"
                    type="text"
                    label="Publish Date"
                    required
                  />
                </div>
              </div>

              {/* Notice Body */}
              <div>
                <FormInput
                  name="noticeBody"
                  type="text"
                  label="Notice Body"
                  placeholder="Write the details about notice"
                />
              </div>

              {/* Upload Attachments */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Upload Attachments (optional)
                </h3>
                <div className="border-2 border-dashed border-cyan-400 rounded-lg p-8 text-center bg-cyan-50">
                  <svg
                    className="w-12 h-12 mx-auto text-cyan-500 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  <p className="text-cyan-600 font-medium mb-1">
                    Upload nominee profile image or drag and drop.
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    Accepted File Type: jpg, png
                  </p>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block cursor-pointer text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    Click to browse
                  </label>
                </div>

                {/* Uploaded File */}
                {uploadedFile && (
                  <div className="mt-4 flex items-center gap-2 bg-[#f5f6fa]  rounded-lg max-w-96 p-2">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-sm overflow-hidden truncate text-gray-700 w-full">
                      {uploadedFile}
                    </span>
                    <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setUploadedFile(null)}
                        className="text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end  gap-4 pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-8 py-2 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() =>
                handleSubmit((data) => {
                  console.log("[v0] Draft saved:", data);
                })()
              }
              className="px-8 py-2 border-2 border-blue-500 text-blue-600 rounded-full font-medium hover:bg-blue-50"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600"
            >
              Publish Notice
            </button>
          </div>
        </form>
      </FormProvider>

      <Modal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
        <SuccessNotification />
      </Modal>
    </div>
  );
}
