import NavbarSlider from "@/components/Navbar/DashboardNavbar/NavbarSlider";
import Navbar from "@/components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen overflow-hidden">
      <ToastContainer />

      <div className="flex h-full">
        {/* Sidebar - fixed, no scrolling */}
        <div className="shrink-0 overflow-y-auto">
          <NavbarSlider />
        </div>

        {/* Right content area */}
        <div className="flex flex-col w-full h-full">
          <Navbar />

          {/* Only this scrolls */}
          <div className="flex-1 overflow-y-auto bg-[#f5f6fa] py-5">{children}</div>
        </div>
      </div>
    </main>
  );
}
