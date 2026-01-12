import ReduxProvider from "@/redux/provider/ReduxProvider";
import type { Metadata } from "next";
import { Arimo, Rubik } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const rubic = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      <body className={` ${arimo.variable} ${rubic.variable} antialiased`}>
        <ReduxProvider>
          <div>{children}</div>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
