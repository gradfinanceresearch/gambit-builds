import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? '14px 0' : '22px 0',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center font-bold text-[15px] text-black">
            G
          </div>
          <span className="font-semibold text-[17px] text-white tracking-tight">
            Gambit Builds
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#work"
            className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
          >
            Portfolio
          </a>
          <a
            href="#process"
            className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
          >
            Process
          </a>
          <a
            href="#industries"
            className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
          >
            Industries
          </a>
          <a
            href="mailto:kaleb@gambitbuilds.com"
            className="bg-accent hover:bg-orange-400 text-black font-semibold text-[13px] px-[22px] py-[10px] rounded-lg transition-all duration-200 hover:-translate-y-[1px]"
          >
            Get a Free Mockup
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 mt-2"
          style={{
            background: 'rgba(8,8,8,0.98)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-500 hover:text-white py-2.5 text-[15px] transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#process"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-500 hover:text-white py-2.5 text-[15px] transition-colors"
          >
            Process
          </a>
          <a
            href="#industries"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-500 hover:text-white py-2.5 text-[15px] transition-colors"
          >
            Industries
          </a>
          <a
            href="mailto:kaleb@gambitbuilds.com"
            className="block bg-accent text-black font-semibold text-sm px-6 py-3 rounded-lg text-center mt-3"
          >
            Get a Free Mockup
          </a>
        </div>
      )}
    </header>
  );
}
