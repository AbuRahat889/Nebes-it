"use client";

import {
  departmentOptions,
  employeeOptions,
  noticeTypeOptions,
  positionOptions,
} from "@/constants/DropdownInfo";
import { useCreateNotificatiosMutation } from "@/redux/api/notifications";
import type React from "react";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { CustomDropdown } from "../ui/dropdown";
import { FormInput } from "../ui/Input";
import Modal from "../ui/modal";
import { SuccessNotification } from "./SuccesfullModal";
import { useRouter } from "next/navigation";

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

  const { handleSubmit, reset, control, register } = methods;

  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [employeeId, setEmployeeId] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [noticeType, setNoticeType] = useState<string>("");
  const [targetDepartment, setTargetDepartment] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [createFN] = useCreateNotificatiosMutation();

  const onSubmit = async (data: any) => {
    const isoPublishDate = data.publishDate
      ? new Date(data.publishDate).toISOString()
      : null;
    const notificationData = {
      title: data.noticeTitle,
      employeeId: employeeId,
      employeeName: data.employeeName,
      body: data.noticeBody,
      noticeType: noticeType,
      publishDate: isoPublishDate,
      targetType: targetDepartment,
      position: position,
      uploadedFile: uploadedFile,
    };
    try {
      const res = await createFN(notificationData).unwrap();
      if (res?.success) {
        setIsOpen(true);
        reset();
        setUploadedFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Show a temporary file name while uploading
      setUploadedFile("Uploading...");

      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=1e13255856d715beab83748dbccfb5e9`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();

        if (data.success) {
          setUploadedFile(data.data.url); // Save the image URL
        } else {
          setUploadedFile(null);
        }
      } catch (error) {
        console.log(error);
        setUploadedFile(null);
      }
    }
  };

  const handleCancel = () => {
    reset();
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-lg border"
        >
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

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="bg-white rounded-xl border border-borderColor">
            <div className="bg-gray-50 border border-gray-200 rounded-t-xl p-4">
              <p className="text-base font-medium leading-6 text-primaryColor">
                Please fill in the details below
              </p>
            </div>

            <div className="p-6">
              {/* Department Dropdown */}
              <div className="bg-[#f5f6fa] p-6 rounded-xl mb-4">
                <CustomDropdown
                  label="Target Department(s) or Individual"
                  options={departmentOptions}
                  placeholder="Select a department"
                  onChange={setTargetDepartment}
                />
              </div>

              {/* Notice Title */}
              <div className="mb-4">
                <FormInput
                  name="noticeTitle"
                  type="text"
                  label="Notice Title"
                  placeholder="Write the Title of Notice"
                  required
                />
              </div>

              {/* Three Column Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <CustomDropdown
                    label="Select Employee ID"
                    options={employeeOptions}
                    placeholder="Select employee designation"
                    onChange={setEmployeeId}
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
                    onChange={setPosition}
                  />
                </div>
              </div>

              {/* Notice Type and Publish Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <CustomDropdown
                    label="Notice Type"
                    options={noticeTypeOptions}
                    placeholder="Select Notice Type"
                    onChange={setNoticeType}
                  />
                </div>
                <div>
                  {/* Date Picker */}
                  <Controller
                    control={control}
                    name="publishDate"
                    render={({ field }) => (
                      <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">
                          Publish Date
                        </label>
                        <input
                          type="date"
                          {...field}
                          className="px-4 py-3 border border-[#9096b1] rounded-lg text-[#747474] text-base font-medium outline-none"
                          required
                        />
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Notice Body */}
              <div className="mb-4">
                <textarea
                  {...register("noticeBody")}
                  placeholder="Write the details about notice"
                  rows={5}
                  className="w-full px-4 py-3 border border-[#9096b1] rounded-lg text-[#747474] text-base font-medium outline-none resize-none mt-2"
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
                  <div className="mt-4 flex items-center gap-2 bg-[#f5f6fa] rounded-lg max-w-96 p-2">
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
          <div className="flex justify-end gap-4 pt-6">
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
                  const fullData = {
                    ...data,
                    employeeId,
                    position,
                    noticeType,
                    targetDepartment,
                    uploadedFile,
                  };
                  console.log("[v0] Draft saved:", fullData);
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
        <SuccessNotification onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}
