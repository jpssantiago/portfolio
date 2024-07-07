import type { Metadata } from "next"
import { Sora } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { NavBar } from "@/components/nav-bar"

import "./globals.css"
import { SocialsLine } from "@/components/socials-line"

const sora = Sora({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "João Santiago",
  description: "Welcome to my portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={twMerge(sora.className, "bg-background text-white min-h-screen")}>
        <NavBar />
        {children}
        
        <SocialsLine />
      </body>
    </html>
  )
}
