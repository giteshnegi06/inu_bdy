import { Allura, Courier_Prime } from "next/font/google";
import "./globals.css";

const script = Allura({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" });
const mono = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Content",
  description: "Happy Birthday baby!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${script.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
