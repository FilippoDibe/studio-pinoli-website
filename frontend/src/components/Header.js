import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const BOOKING_URL = "https://prenota.alfadocs.com/p/milano-studio-pinoli-31191";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>

      {/* Top Bar - Desktop Only */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href="tel:+390242272381" className="top-bar-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>02 4272381</span>
              </a>
              <a href="mailto:info@studiopinoli.it" className="top-bar-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@studiopinoli.it</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-hours">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                Lun - Ven: 9:00 - 19:00
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="logo" onClick={closeMenu}>
              <Image
                src="/images/studio-pinoli-logo-oriz-1.png"
                alt="Studio Pinoli"
                width={180}
                height={50}
                priority
                style={{ height: "auto", maxHeight: "48px", width: "auto" }}
              />
            </Link>

            <nav className="nav-desktop">
              <Link href="/">Home</Link>
              <Link href="/i-nostri-servizi">Servizi</Link>
              <Link href="/prima-visita">Prima Visita</Link>
              <Link href="/chi-siamo">Chi Siamo</Link>
              <Link href="/blog">Blog</Link>
              <a
                href={BOOKING_URL}
                className="nav-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gestionale
              </a>
              <Link href="/contatti" className="nav-cta">
                Contattaci
              </Link>
            </nav>

            <button
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu} />

      {/* Mobile Menu */}
      <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <div className="mobile-nav-header">
          <Image
            src="/images/studio-pinoli-logo-oriz-1.png"
            alt="Studio Pinoli"
            width={150}
            height={42}
            style={{ height: "auto", maxHeight: "42px", width: "auto" }}
          />
          <button className="mobile-nav-close" onClick={closeMenu} aria-label="Chiudi menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="mobile-nav-links">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/i-nostri-servizi" onClick={closeMenu}>I Nostri Servizi</Link>
          <div className="mobile-nav-submenu">
            <Link href="/servizi/odontoiatria" onClick={closeMenu}>Odontoiatria</Link>
            <Link href="/servizi/bionutrizione" onClick={closeMenu}>Bionutrizione</Link>
            <Link href="/servizi/medicina-estetica" onClick={closeMenu}>Medicina Estetica</Link>
            <Link href="/servizi/medicina-integrata" onClick={closeMenu}>Medicina Integrata</Link>
          </div>
          <Link href="/prima-visita" onClick={closeMenu}>Prima Visita</Link>
          <Link href="/chi-siamo" onClick={closeMenu}>Chi Siamo</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Gestionale</a>
          <Link href="/contatti" onClick={closeMenu}>Contatti</Link>
        </div>

        <div className="mobile-nav-footer">
          <Link href="/contatti" className="btn btn-primary btn-block" onClick={closeMenu}>
            Prenota Appuntamento
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-block btn-gestionale"
            onClick={closeMenu}
          >
            Apri Gestionale
          </a>
          <div className="mobile-nav-contact">
            <a href="tel:+390242272381">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              02 4272381
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
