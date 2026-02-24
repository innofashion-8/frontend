import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const creatoTitle = localFont({
  src: "../../public/assets/fonts/CreatoDisplay-Black.otf",
  variable: "--font-creato-title",
  display: "swap",
});

const creatoBody = localFont({
  src: "../../public/assets/fonts/CreatoDisplay-Regular.otf",
  variable: "--font-creato-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Innofashion 8",
  description: "Innofashionshow 8 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${creatoTitle.variable} ${creatoBody.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
