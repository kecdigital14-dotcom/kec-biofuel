import "./globals.css";

export const metadata = {
  title: "KEC Biofuel- Farm to Fuel",
  description: "Your site description here",
  icons: {
  icon: "/images/Kecicon.jpeg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
