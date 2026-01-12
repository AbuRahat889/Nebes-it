"use client";

import { FileText, Play, Upload, X } from "lucide-react";
import Image from "next/image";
import {
  useRef,
  useState,
  useEffect,
  type ChangeEvent,
  type DragEvent,
} from "react";
import { useFormContext } from "react-hook-form";

export interface UploadedFile {
  id: string;
  file?: File; // optional for default images
  preview: string;
  type: "image" | "video" | "pdf";
  isDefault?: boolean; // ✅ mark existing images
}

interface UploadMediaProps {
  name: string;
  onUpload?: (formData: FormData) => Promise<string[] | void>;
  label?: string;
  defaultImages?: string | string[]; // ✅ can be a single URL or an array of URLs
}

export default function UploadMedia({
  name,
  onUpload,
  label,
  defaultImages,
}: UploadMediaProps) {
  const { setValue } = useFormContext();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultImages) {
      // Handle single or multiple image URLs
      const imageArray = Array.isArray(defaultImages)
        ? defaultImages
        : [defaultImages];

      const defaultFiles: UploadedFile[] = imageArray.map((url) => ({
        id: Math.random().toString(36).substr(2, 9),
        file: new File([], url.split("/").pop() || "image.jpg"), // dummy File object
        preview: url,
        type: "image",
        isDefault: true,
      }));

      setUploadedFiles(defaultFiles);

      setValue(
        name,
        defaultFiles.map((f) => f.file),
        { shouldValidate: true }
      );
    }
  }, [defaultImages, name, setValue]);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
      e.target.value = ""; // Reset so same file can be re-uploaded
    }
  };

  const handleFiles = async (files: File[]) => {
    const validFiles = files.filter((file) => {
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");
      const isPdf = file.type === "application/pdf";
      return isImage || isVideo || isPdf;
    });

    const newUploads: UploadedFile[] = validFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith("image/")
        ? "image"
        : file.type.startsWith("video/")
        ? "video"
        : "pdf",
      isDefault: false,
    }));

    setUploadedFiles((prev) => {
      const updated = [...prev, ...newUploads];
      // ✅ Combine both existing URLs and new Files for submission
      const formValue = updated.map((f) => f.file ?? f.preview);
      setValue(name, formValue, { shouldValidate: true });
      return updated;
    });

    if (onUpload) {
      const formData = new FormData();
      validFiles.forEach((file) => formData.append("files", file));
      await onUpload(formData);
    }
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => {
      const updated = prev.filter((f) => f.id !== id);

      const removedFile = prev.find((f) => f.id === id);
      if (removedFile && removedFile.file)
        URL.revokeObjectURL(removedFile.preview);

      // ✅ Update form value after removal
      const formValue = updated.map((f) => f.file ?? f.preview);
      setValue(name, formValue, { shouldValidate: true });

      return updated;
    });

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleBrowseClick = () => fileInputRef.current?.click();

  return (
    <>
      {label && (
        <p className="block text-base font-medium text-gray-700">{label}</p>
      )}

      <div
        className={`bg-[#f5f5f5] border-2 border-dashed border-primaryColor rounded-md w-full ${
          isDragOver ? "bg-blue-50 border-blue-400" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-3 text-center space-y-1">
          <Upload className="h-5 w-5 text-blue-500 mx-auto" />
          <p className="text-sm text-gray-700 mb-3">
            Drag & Drop your files
          </p>
          <button
            type="button"
            onClick={handleBrowseClick}
            className="bg-primaryColor text-sm rounded-md text-white px-6 py-1 font-semibold"
          >
            Browse to Upload
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="pt-6">
          <h2 className="text-xl font-semibold mb-4">
            Uploaded Files ({uploadedFiles.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {uploadedFiles.map((f) => (
              <div key={f.id} className="relative group">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  {f.type === "image" ? (
                    <Image
                      src={f.preview}
                      alt="preview"
                      fill
                      className="object-cover"
                    />
                  ) : f.type === "video" ? (
                    <div className="relative w-full h-full">
                      <video
                        src={f.preview}
                        className="w-full h-full object-cover"
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4">
                      <FileText className="h-10 w-10 text-red-500 mb-2" />
                      <span className="text-xs text-gray-600 text-center break-words">
                        {f.file?.name || "File"}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => removeFile(f.id)}
                    className="absolute top-1 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
