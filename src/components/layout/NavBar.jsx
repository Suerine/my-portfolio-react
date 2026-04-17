import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";
import SueLogo from "../../assets/images/SueLogo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop / Pill Nav ── */}
      <nav
        className="apple-nav fixed top-0 left-0 right-0 z-50 w-full"
        style={{ paddingTop: '14px' }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

          {/* Pill */}
          <div className={`nav-pill ${isScrolled ? 'scrolled' : ''}`}
               style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 18px' }}>

            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <img src={SueLogo} alt="Sue Logo" className="w-12 h-12 object-contain" />
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '28px' }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 2px' }}
                >
                  {link.label}
                </button>
              ))}
               <button className="cta-btn" onClick={() => handleNavClick('contact')}>
                 Hire Me
               </button>
            </div>

            
            {/* Mobile menu toggle */}
            <button
              className="md:hidden icon-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen
                ? <X style={{ width: '14px', height: '14px' }} />
                : <Menu style={{ width: '14px', height: '14px' }} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Bottom Sheet ── */}
      <div className={`mobile-drawer md:hidden ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-backdrop" onClick={() => setIsMenuOpen(false)} />
        <div className="drawer-sheet apple-nav">
          <div className="drawer-handle" />

          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </button>
          ))}

          <button
            className="cta-btn"
            onClick={() => handleNavClick('contact')}
            style={{ width: '100%', marginTop: '16px', padding: '14px', fontSize: '15px', borderRadius: '14px' }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;