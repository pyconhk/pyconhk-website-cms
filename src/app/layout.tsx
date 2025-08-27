import "../styles/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PyCon HK CMS",
  description:
    "The official content management system for PyCon Hong Kong website.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body id="outstatic">{children}</body>
    </html>
  );
}
