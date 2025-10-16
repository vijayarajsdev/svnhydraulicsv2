import { Geist, Geist_Mono, Volkhov } from "next/font/google";
import "./globals.css";
const volkhov=Volkhov({
  subsets:['english'],
  weight:["400"],
  style:['normal']
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manufacturer of Hydraulic Hose India",
  description: "SVN Hydraulics is one of leading manufacturer and supplier of durable hydraulic hoses, fittings, and custom assemblies with faster delivery across Tamil Nadu and India.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="robots" content="index, follow" />
      <body className={volkhov.className} >
        {children}
      </body>
    </html>
  );
}
