import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Inter } from 'next/font/google'; // 1. Import Font

// 2. Configure Font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SVN Hydraulics | Tamil Nadu',
  description: 'Hydraulic Hose Manufacturers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. Apply Font Class to Body */}
      <body className={inter.className} style={{ margin: 0 }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}