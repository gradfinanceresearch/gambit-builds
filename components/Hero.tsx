export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-[120px] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Gradient orb top-right */}
      <div
        className="absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Gradient orb bottom-left */}
      <div
        className="absolute -bottom-[200px] -left-[100px] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-[720px] text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-block px-[18px] py-1.5 rounded-full mb-8"
          style={{
            border: '1px solid rgba(249,115,22,0.2)',
            background: 'rgba(249,115,22,0.06)',
          }}
        >
          <span className="text-orange-400 text-[11px] font-semibold tracking-[0.12em] uppercase">
            Web Development for Small Business
          </span>
        </div>

        <h1
          className="text-white font-normal mb-6 leading-[1.08] tracking-tight"
          style={{ fontSize: 'clamp(40px, 6.5vw, 72px)' }}
        >
          Your business deserves
          <br />
          <span
            className="italic"
            style={{
              background: 'linear-gradient(135deg, #f97316, #fdba74)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            a better website.
          </span>
        </h1>

        <p
          className="font-sans text-gray-500 font-light mb-9 mx-auto max-w-[520px] leading-relaxed"
          style={{ fontSize: 'clamp(16px, 2vw, 19px)' }}
        >
          We build fast, modern, mobile-first websites for restaurants, salons,
          contractors, and local businesses. Delivered in days, not months.
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap">
          <a
            href="mailto:kaleb@gambitbuilds.com"
            className="bg-accent hover:bg-orange-400 text-black font-semibold text-[15px] px-8 py-4 rounded-[10px] transition-all duration-200 hover:-translate-y-[2px]"
          >
            Get a Free Mockup →
          </a>
          <a
            href="#work"
            className="text-gray-400 hover:text-white font-medium text-[15px] px-8 py-4 rounded-[10px] transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
