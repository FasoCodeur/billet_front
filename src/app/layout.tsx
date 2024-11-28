import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/reduxProvider";
import { Toaster } from "react-hot-toast";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ByBus app",
  description: "Application de reservation de billet de bus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} w-full h-screen bg-bgColor`}
      >
      <ReduxProvider>
          <Toaster position="top-left" />
        {children}
      </ReduxProvider>
      </body>
    </html>
  );
}
