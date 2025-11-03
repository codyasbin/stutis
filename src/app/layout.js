import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Stuti Path',
  description: 'Access your daily devotional stutis with ease',
  manifest: '/manifest.json',
  themeColor: '#EA580C',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Stuti Path',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#EA580C" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
