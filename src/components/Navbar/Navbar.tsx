"use client";

import profileImage from "@/assets/Avatar.png";
import { RootState } from "@/redux/store/store";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { MediaButton } from "../ui/icon";

interface UserType {
  profileImage?: string;
  fullName?: string;
  role?: string;
}

export default function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user) as UserType;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`flex items-center px-2 md:px-10 py-4 shadow-[8px_8px_72px_10px_rgba(21,14,73,0.08)]  bg-white z-[9] w-full`}
    >
      <div className="flex justify-between w-full">
        <div className="hidden lg:block">
          <h1 className="text-textColor text-xl font-normal leading-normal">
            Good Afternoon Asif
          </h1>
          <p>13 June, 2026</p>
        </div>

        <div className="flex items-center gap-4">
          {user?.role === "PARTNER" && (
            <div ref={dropdownRef} className="relative">
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="border-2 border-[#EFEEFC] rounded-2xl p-5"
              >
                <MediaButton type="notification" />
              </div>
              {/* DROPDOWN */}
              {open && (
                <div className="absolute top-24  right-0 mt-3 min-w-96 bg-white shadow-custom rounded-xl p-4 z-50">
                  {/* <MyNotification /> */}
                </div>
              )}
            </div>
          )}

          <div className="hidden md:block text-right">
            <h1 className="text-textColor text-xl font-normal leading-normal">
              Rahat
            </h1>
            <p>Developer</p>
          </div>
          <Image
            src={user?.profileImage || profileImage}
            alt="Logo"
            className="h-14 w-14 rounded-full"
            priority
          />
        </div>
      </div>
    </nav>
  );
}
