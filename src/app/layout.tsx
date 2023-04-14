import "./globals.css";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  style: "normal",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
