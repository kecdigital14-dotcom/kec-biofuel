import Analytics from "./Components/Analytics";
import WhatsAppWidget from "./Components/WhatsAppWidget";
import "./globals.css";

import { DM_Sans, Inter } from 'next/font/google'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})



export const metadata = {
  title: "KEC Biofuel- Farm to Fuel",
  description: "Your site description here",
  icons: {
    icon: "/images/Kecicon.jpeg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className={dmSans.className}>
        {children}
        <Analytics/>
        <WhatsAppWidget/>
      </body>
    </html>
  );
}