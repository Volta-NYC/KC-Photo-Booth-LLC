import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import ScrollReveals from "@/lib/components/scroll-reveals"

export const metadata: Metadata = {
  title: { default: "KC Photo Booth | 360 & Digital Photo Booths in NYC", template: "%s | KC Photo Booth" },
  description: "Elevated 360 video and digital photo booth experiences for weddings, corporate events, and celebrations across New York City.",
  icons: { icon: "/icon.png" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /><ScrollReveals /></body></html>
}
