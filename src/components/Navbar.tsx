import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0F17]/90 backdrop-blur-md border-b border-[#1F293D] shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 text-white hover:text-[#3FE3C4] transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#141C30] border border-[#25314F] flex items-center justify-center text-[#3FE3C4] group-hover:border-[#3FE3C4]/50 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading font-bold text-base tracking-tight text-white flex items-center gap-2">
                <span>Jayasri Muthukumaran</span>
                <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#3FE3C4]/10 text-[#3FE3C4] border border-[#3FE3C4]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3FE3C4] animate-pulse"></span>
                  2026 Grad
                </span>
              </div>
              <div className="text-[11px] text-[#8D96AE] font-mono leading-none hidden sm:block">
                Software & AI/ML Developer
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  id={`nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#3FE3C4] bg-[#3FE3C4]/10'
                      : 'text-[#8D96AE] hover:text-white hover:bg-[#141C30]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#141C30] text-[#EDEFF5] border border-[#25314F] hover:border-[#3FE3C4] hover:text-[#3FE3C4] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#3FE3C4]" />
              Resume
            </button>
            <a
              id="nav-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#8D96AE] hover:text-[#3FE3C4] transition-colors"
              title="GitHub Profile"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-resume-quick-btn"
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded text-xs font-mono bg-[#141C30] text-[#3FE3C4] border border-[#25314F]"
            >
              Resume
            </button>
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141C30] border border-[#25314F] text-[#EDEFF5] hover:text-[#3FE3C4] focus:outline-none focus:ring-2 focus:ring-[#3FE3C4]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-[#0E1524] border-b border-[#25314F] px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-150"
        >
          <div className="px-3 py-2 text-xs font-mono text-[#3FE3C4] bg-[#3FE3C4]/10 rounded mb-2 flex items-center justify-between">
            <span>Status: Seeking Full-Time 2026 Roles</span>
            <span className="w-2 h-2 rounded-full bg-[#3FE3C4] animate-ping"></span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`mobile-nav-link-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#EDEFF5] hover:bg-[#141C30] hover:text-[#3FE3C4] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#1F293D] flex items-center gap-3">
            <button
              type="button"
              id="mobile-nav-full-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold bg-[#3FE3C4] text-[#0B0F17] hover:bg-[#5CEBD1] transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Full Resume
            </button>
            <a
              id="mobile-nav-linkedin-btn"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 rounded-lg text-sm font-medium bg-[#141C30] border border-[#25314F] text-[#EDEFF5]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
