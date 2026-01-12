import ReduxProvider from "@/redux/provider/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TeamUp – Pickup Sports!",
  description: "Pickup Sports! anywhere, anytime",
};

// Bellota

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ReduxProvider>
          <div>{children}</div>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
