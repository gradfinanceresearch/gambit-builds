import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-dark bg-opacity-95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-display text-2xl font-bold">
          Gambit<span className="text-accent">Builds</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-accent transition text-sm">
            Portfolio
          </a>
          <a href="#" className="hover:text-accent transition text-sm">
            How It Works
          </a>
          <a
            href="mailto:kaleb@gambitbuilds.com"
            className="bg-accent hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-lg transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4">
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:text-accent transition">
              Portfolio
            </a>
            <a href="#" className="hover:text-accent transition">
              How It Works
            </a>
            <a
              href="mailto:kaleb@gambitbuilds.com"
              className="bg-accent hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-lg transition text-center"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
