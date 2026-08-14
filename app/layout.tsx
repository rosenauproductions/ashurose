import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashurose.com"),
  title: {
    default: "AshurRose",
    template: "%s · AshurRose",
  },
  description:
    "AshurRose is a software solutions company. FamilyFlow is a touch-screen family wall calendar.",
  openGraph: {
    title: "AshurRose",
    description:
      "AshurRose is a software solutions company. FamilyFlow is a touch-screen family wall calendar.",
    url: "https://ashurose.com",
    siteName: "AshurRose",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${libreFranklin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
