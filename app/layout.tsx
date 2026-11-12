import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Krupa - Personal Website",
  description: "Hi I'm Krupa! Welcome to my personal website featuring my articles, work, and projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <head>
        <style>{`
html {
  font-family: ${quicksand.style.fontFamily};
  --font-sans: ${quicksand.style.fontFamily};
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
        `}</style>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
