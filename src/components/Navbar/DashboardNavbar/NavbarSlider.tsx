"use client";
import logo from "@/assets/Logo.svg";
import { navigation } from "@/constants/Navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavbarSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const userRole = "SUPERADMIN";

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Hamburger (mobile only) */}
      <div
        className={cn(
          "absolute lg:hidden top-5 left-5 p-3 flex items-center justify-between bg-primaryColor rounded-xl shadow-xl z-[9999]",
          isOpen && "hidden"
        )}
      >
        <button onClick={toggleSidebar}>
          <Menu className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Sidebar Desktop */}
      <div className="hidden lg:flex bg-white w-[220px] xl:w-[320px] h-screen border-r px-6 overflow-y-auto shrink-0">
        <SidebarContent isOpen={true} path={path} userRole={userRole} />
      </div>

      {/* Sidebar Mobile (Drawer) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={toggleSidebar}
          ></div>

          {/* Drawer */}
          <div className="relative z-50 w-[290px] h-full shadow-lg px-6 overflow-y-auto bg-white">
            <div className="flex justify-end items-end py-3">
              <button onClick={toggleSidebar}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <SidebarContent isOpen={true} path={path} userRole={userRole} />
          </div>
        </div>
      )}
    </>
  );
};

/* ---------------- Shared Sidebar Content ---------------- */

const SidebarContent = ({
  isOpen,
  path,
  userRole,
}: {
  isOpen: boolean;
  path: string;
  userRole: string | undefined;
}) => (
  <aside className="flex flex-col font-inter py-10 w-full h-full">
    {/* Logo */}
    <div className="h-40 md:h-48 w-40 md:w-48 mb-12">
      <Image
        src={logo}
        alt="Logo"
        width={400}
        height={400}
        className="h-full w-full object-contain"
      />
    </div>

    {/* Nav Items */}
    <ul className="ml-1">
      {navigation
        ?.filter((item) => item.role.includes(userRole || ""))
        ?.map((item, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-md transition-colors ${
                path === item.route && item.role.includes(userRole || "")
                  ? "bg-[#f5f6fa] text-[#232948]"
                  : "text-[#232948] "
              }`}
            >
              <span className="text-xl font-medium">
                {path === item.route ? item.whiteIcon : item.iconPath}
              </span>
              {isOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          </li>
        ))}
    </ul>
  </aside>
);

export default NavbarSlider;
