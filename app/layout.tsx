
import "./globals.css";
import { Inter } from 'next/font/google'

import { SiteHeader } from "@/components/ui/site-header"
import { SiteFooter } from "@/components/ui/site-footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })



export const metadata = {
  title: "Adier & Co - Advocates, Notaries Public, Commissioners for Oaths and Patent Agents",
  description: "Legal services and consultation by Adier & Co.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
