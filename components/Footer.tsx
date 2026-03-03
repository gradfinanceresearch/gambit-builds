export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Gambit<span className="text-accent"> Builds</span>
            </h3>
            <p className="text-gray-500">Web development for small business owners.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="mailto:kaleb@gambitbuilds.com" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
            <a
              href="mailto:kaleb@gambitbuilds.com"
              className="text-accent hover:text-orange-400 transition break-all"
            >
              kaleb@gambitbuilds.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {currentYear} Gambit Builds. All rights reserved.</p>
            <p>Built with Next.js • Tailwind CSS • Deployed on Vercel</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
