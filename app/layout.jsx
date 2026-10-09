import "./globals.css";

export const metadata = {
  title: "Content",
  description: "Happy Birthday baby!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">{children}</body>
    </html>
  );
}
