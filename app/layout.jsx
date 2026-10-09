import { Allura } from "next/font/google";
import "./globals.css";

const script = Allura({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" });

export const metadata = {
  title: "Content",
  description: "Happy Birthday baby!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={script.variable}>
      <body id="top">{children}</body>
    </html>
  );
}
