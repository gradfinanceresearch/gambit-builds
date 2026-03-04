const projects = [
  {
    name: 'Ember & Oak',
    industry: 'Restaurant',
    color: '#B91C1C',
    desc: 'Modern restaurant site with online reservations, menu display, and chef spotlight. Mobile-first design that converts browsers into diners.',
    slug: 'ember-and-oak',
  },
  {
    name: 'Luxe Studio',
    industry: 'Salon & Spa',
    color: '#BE185D',
    desc: 'Elegant booking-enabled site with service catalog, stylist profiles, pricing, and integrated appointment scheduling.',
    slug: 'luxe-studio',
  },
  {
    name: 'Ironclad Roofing',
    industry: 'Contractor',
    color: '#1E3A5F',
    desc: 'Trust-building site with quote request forms, project gallery with before/after shots, and service area coverage.',
    slug: 'ironclad-roofing',
  },
  {
    name: 'Summit Legal',
    industry: 'Law Firm',
    color: '#0F172A',
    desc: 'Professional site with practice area pages, attorney bios, and consultation booking. Clean, authoritative design.',
    slug: 'summit-legal',
  },
  {
    name: 'Peak Fitness',
    industry: 'Gym & Fitness',
    color: '#15803D',
    desc: 'High-energy site with class schedules, membership tiers, trainer profiles, and a streamlined sign-up flow.',
    slug: 'peak-fitness',
  },
];

function BrowserMockup({ color }: { color: string }) {
  return (
    <div
      className="w-4/5 max-w-[260px] rounded-[10px] overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]"
      style={{
        background: 'rgba(0,0,0,0.65)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Browser bar */}
      <div
        className="h-6 flex items-center px-2.5 gap-[5px]"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        <div className="w-[7px] h-[7px] rounded-full bg-red-500" />
        <div className="w-[7px] h-[7px] rounded-full bg-yellow-500" />
        <div className="w-[7px] h-[7px] rounded-full bg-green-500" />
        <div
          className="flex-1 h-3 rounded ml-2"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        />
      </div>
      {/* Browser content */}
      <div className="p-4">
        <div
          className="h-2 w-[55%] rounded mb-2.5"
          style={{ background: color + '88' }}
        />
        <div
          className="h-[5px] w-[90%] rounded mb-[6px]"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />
        <div
          className="h-[5px] w-[70%] rounded mb-3.5"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        />
        <div className="flex gap-[6px]">
          <div
            className="h-[18px] w-[52px] rounded-[5px]"
            style={{ background: color + '55' }}
          />
          <div
            className="h-[18px] w-[44px] rounded-[5px]"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="block text-accent text-[11px] font-semibold tracking-[0.12em] uppercase mb-3">
            Portfolio
          </span>
          <h2
            className="font-normal leading-[1.15] tracking-tight"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
          >
            Built for businesses
            <br />
            <span className="text-gray-600">like yours.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group rounded-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(249,115,22,0.25)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  'rgba(255,255,255,0.05)')
              }
            >
              {/* Preview area */}
              <div
                className="h-[200px] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <BrowserMockup color={p.color} />
              </div>

              {/* Content */}
              <div className="p-[20px_22px_24px]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-[19px] text-white font-normal italic">
                    {p.name}
                  </h3>
                  <span
                    className="text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      color: p.color,
                      background: p.color + '12',
                    }}
                  >
                    {p.industry}
                  </span>
                </div>
                <p className="font-sans text-[13.5px] text-gray-500 leading-relaxed mb-4 font-light">
                  {p.desc}
                </p>
                <a
                  href={`/demos/${p.slug}`}
                  className="font-sans text-xs font-semibold text-accent inline-flex items-center gap-1.5 tracking-wide opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                >
                  View Demo
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
