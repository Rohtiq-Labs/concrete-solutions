import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { Providers } from "@/components/Providers/Providers";
import { getDictionary } from "@/lib/dictionary";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const dictionary = getDictionary("EN");

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  openGraph: {
    title: "Concrete Solutions Group — Denver, Colorado",
    description: "Concrete built. Solutions delivered.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
