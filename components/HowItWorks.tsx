const steps = [
  {
    num: '01',
    title: 'Free Mockup',
    desc: "We audit your current site (or lack of one) and build a free mockup showing what's possible. Zero cost, zero commitment.",
  },
  {
    num: '02',
    title: 'Quick Call',
    desc: '10-minute call to walk through the mockup, hear your feedback, and define exactly what you need.',
  },
  {
    num: '03',
    title: 'We Build',
    desc: 'Your site gets built with modern tech — fast, mobile-friendly, and designed to turn visitors into customers.',
  },
  {
    num: '04',
    title: 'You Launch',
    desc: "We deploy your site, configure hosting, and hand you the keys. You're live in days, not months.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-[100px] px-6">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-center mb-14">
          <span className="block text-accent text-[11px] font-semibold tracking-[0.12em] uppercase mb-3">
            How It Works
          </span>
          <h2
            className="font-normal tracking-tight"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
          >
            Four steps to a better site.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-[32px_28px] rounded-[14px]"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div className="font-display text-5xl italic leading-none mb-3"
                style={{ color: 'rgba(249,115,22,0.1)' }}
              >
                {s.num}
              </div>
              <h3 className="font-sans text-base font-semibold text-white mb-2 tracking-tight">
                {s.title}
              </h3>
              <p className="font-sans text-[13.5px] text-gray-500 leading-relaxed font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
