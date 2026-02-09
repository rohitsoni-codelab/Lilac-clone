import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Inter, Libre_Baskerville } from "next/font/google";

/* ===============================
   FONT SETUP (Matches Squarespace Feel)
================================ */
const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD",
  description: "Licensed Clinical Psychologist in Santa Monica, CA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        {/* Sticky Header */}
        <Header />

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
