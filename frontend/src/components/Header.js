import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
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
      {/* Skip Navigation Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <a href="tel:+390242272381" className="top-bar-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                02 4272381
              </a>
              <a href="tel:+393314773905" className="top-bar-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
                331 4773905
              </a>
              <a href="mailto:info@studiopinoli.it" className="top-bar-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@studiopinoli.it
              </a>
            </div>
            <div className="top-bar-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              Lun - Ven: 9:00 - 19:00
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-main">
          <Link href="/" className="logo">
            <Image
              src="/images/studio-pinoli-logo-oriz-1.png"
              alt="Studio Pinoli - Dentista a Milano"
              width={200}
              height={55}
              priority
              style={{ height: "auto", maxHeight: "55px", width: "auto" }}
            />
          </Link>

          <nav className="nav" aria-label="Navigazione principale">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/i-nostri-servizi" className="nav-link">I Nostri Servizi</Link>
            <Link href="/prima-visita" className="nav-link">Prima Visita</Link>
            <Link href="/chi-siamo" className="nav-link">Chi Siamo</Link>
            <Link href="/contatti" className="nav-link">Contatti</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <Link href="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link href="/i-nostri-servizi" className="nav-link" onClick={closeMenu}>I Nostri Servizi</Link>
        <Link href="/servizi/odontoiatria" className="nav-link" onClick={closeMenu} style={{ paddingLeft: "32px", fontSize: "0.95rem" }}>
          Odontoiatria
        </Link>
        <Link href="/servizi/bionutrizione" className="nav-link" onClick={closeMenu} style={{ paddingLeft: "32px", fontSize: "0.95rem" }}>
          Bionutrizione
        </Link>
        <Link href="/servizi/medicina-estetica" className="nav-link" onClick={closeMenu} style={{ paddingLeft: "32px", fontSize: "0.95rem" }}>
          Medicina Estetica
        </Link>
        <Link href="/servizi/medicina-integrata" className="nav-link" onClick={closeMenu} style={{ paddingLeft: "32px", fontSize: "0.95rem" }}>
          Medicina Integrata
        </Link>
        <Link href="/prima-visita" className="nav-link" onClick={closeMenu}>Prima Visita</Link>
        <Link href="/chi-siamo" className="nav-link" onClick={closeMenu}>Chi Siamo</Link>
        <Link href="/contatti" className="nav-link" onClick={closeMenu}>Contatti</Link>
        <Link href="/blog" className="nav-link" onClick={closeMenu}>Blog</Link>
        <Link href="/contatti" className="btn btn-primary" onClick={closeMenu}>
          Prenota un appuntamento
        </Link>
      </nav>
    </>
  );
}
