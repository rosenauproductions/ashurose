import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashurose.com"),
  title: {
    default: "AshurRose",
    template: "%s · AshurRose",
  },
  description:
    "AshurRose builds FamilyFlow, a touch-screen family wall calendar, and Hinterviewer for trade-school careers.",
  openGraph: {
    title: "AshurRose",
    description:
      "FamilyFlow, a touch-screen family wall calendar, and Hinterviewer.",
    url: "https://ashurose.com",
    siteName: "AshurRose",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
