import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import RootHeader from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  applicationName: "Fellow",
  title: "Fellow",
  description: "Generated by create next app",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} mx-auto max-w-[100rem]`}>
        <Providers>
          <RootHeader />
          <main className="mx-5 md:mx-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
