import { Allura, Courier_Prime } from "next/font/google";
import "./globals.css";

const script = Allura({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" });
const mono = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

const BOUQUET = ["bush-1.webp", "bush-1-top.webp", "lily.webp", "anemone.webp", "dahlia.webp", "orchid.webp", "rose.webp", "sunflower.webp"];

export const metadata = {
  title: "My Chotu Don 💋",
  description: "Happy Birthday baby!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${script.variable}`}>
      <head>
        {BOUQUET.map((f) => (
          <link key={f} rel="preload" as="image" href={`/assets/bouquet/${f}`} type="image/webp" />
        ))}
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
