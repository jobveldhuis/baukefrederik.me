import { Inter } from "@next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="p-8 max-w-[55ch]">{children}</main>
      </body>
    </html>
  );
}
