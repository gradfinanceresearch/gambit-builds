const industries = [
  { icon: '🍽', name: 'Restaurants' },
  { icon: '✂️', name: 'Salons' },
  { icon: '🔨', name: 'Contractors' },
  { icon: '⚖️', name: 'Law Firms' },
  { icon: '🦷', name: 'Dentists' },
  { icon: '💪', name: 'Gyms' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-11">
          <span className="block text-accent text-[11px] font-semibold tracking-[0.12em] uppercase mb-3">
            Industries
          </span>
          <h2
            className="font-normal tracking-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}
          >
            We know your business.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {industries.map((item, i) => (
            <div
              key={i}
              className="py-7 px-5 text-center rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(249,115,22,0.2)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(255,255,255,0.05)')
              }
            >
              <div className="text-[28px] mb-2.5">{item.icon}</div>
              <div className="font-sans text-sm text-gray-400 font-medium">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
