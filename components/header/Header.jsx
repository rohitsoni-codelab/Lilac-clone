"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const lastSectionIndex = useRef(0);

  /* -------------------------------
     ACTIVE LINK LOGIC
  -------------------------------- */
  const isActive = (href) => {
    if (href === "/blog") {
      return pathname.startsWith("/blog");
    }
    return pathname === href;
  };

  /* -------------------------------
     SCROLL VISIBILITY LOGIC
  -------------------------------- */
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll(".section")
    );

    if (!sections.length) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 5) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        lastSectionIndex.current = 0;
        return;
      }

      const scrollingDown = currentScrollY > lastScrollY.current;
      let currentSection = 0;

      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.25) {
          currentSection = i;
        }
      }

      if (currentSection === 0) {
        setHidden(false);
      } else if (scrollingDown) {
        setHidden(true);
        setMenuOpen(false); // close menu on scroll
      } else if (currentSection < lastSectionIndex.current) {
        setHidden(false);
      }

      lastSectionIndex.current = currentSection;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="bg-[var(--bg-cream)] border-b border-[var(--border-soft)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-serif text-lg">
            Dr. Maya Reynolds
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            <NavLink href="/services" active={isActive("/services")}>
              Services
            </NavLink>
            <NavLink href="/blog" active={isActive("/blog")}>
              Blog
            </NavLink>
            <NavLink href="/contact" active={isActive("/contact")}>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-sm uppercase tracking-widest"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--border-soft)] bg-[var(--bg-cream)]">
            <nav className="flex flex-col px-6 py-6 gap-4 text-sm">
              <MobileLink
                href="/services"
                active={isActive("/services")}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </MobileLink>

              <MobileLink
                href="/blog"
                active={isActive("/blog")}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </MobileLink>

              <MobileLink
                href="/contact"
                active={isActive("/contact")}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </MobileLink>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

/* -------------------------------
   DESKTOP NAV LINK
-------------------------------- */
function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`
        relative pb-1 transition-colors
        ${active ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}
        hover:text-[var(--text-primary)]
      `}
    >
      {children}
      {active && (
        <span className="absolute left-0 -bottom-[2px] w-full h-[1px] bg-[var(--text-primary)]" />
      )}
    </Link>
  );
}

/* -------------------------------
   MOBILE NAV LINK
-------------------------------- */
function MobileLink({ href, children, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        py-2
        border-b border-[var(--border-soft)]
        ${active ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}
      `}
    >
      {children}
    </Link>
  );
}
