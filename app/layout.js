import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD",
  description: "Licensed Clinical Psychologist in Santa Monica, CA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Sticky Header */}
        <Header />

        {/* Page Content (offset for fixed header) */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
