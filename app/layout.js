// import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });

const myCustomFont = localFont({
  src: "./GlukEtiudaNo23-Semibold_Personal_Use.otf", // Path to your font file
  weight: "400", // You can specify the font weight (optional)
  style: "normal", // You can specify the font style (optional)
  variable: "--font-custom", // Optional: A CSS variable to apply the font
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myCustomFont.variable}>
      <body>{children}</body>
    </html>
  );
}
