export default function Footer() {
  return (
    <footer
      className="py-9 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-[1140px] mx-auto flex justify-between items-center flex-wrap gap-3">
        <span className="font-sans text-[13px] text-gray-600">
          &copy; 2026 Gambit Builds. All rights reserved.
        </span>
        <a
          href="mailto:kaleb@gambitbuilds.com"
          className="font-sans text-[13px] text-gray-500 hover:text-accent transition-colors duration-200"
        >
          kaleb@gambitbuilds.com
        </a>
      </div>
    </footer>
  );
}
