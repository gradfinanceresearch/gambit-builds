export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div
        className="max-w-[700px] mx-auto text-center py-[60px] px-10 rounded-[20px] relative overflow-hidden"
        style={{
          border: '1px solid rgba(249,115,22,0.12)',
          background:
            'linear-gradient(135deg, rgba(249,115,22,0.06), rgba(249,115,22,0.015))',
        }}
      >
        {/* Orb */}
        <div
          className="absolute -top-[100px] -right-[80px] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />

        <div className="relative z-10">
          <h2
            className="font-normal mb-3.5 leading-[1.2] tracking-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 38px)' }}
          >
            Ready to upgrade your
            <br />
            online presence?
          </h2>
          <p className="font-sans text-[15px] text-gray-500 leading-relaxed mb-7 mx-auto max-w-[440px] font-light">
            We'll build you a free mockup — no commitment, no cost. Just a
            preview of what your new site could look like.
          </p>
          <a
            href="mailto:kaleb@gambitbuilds.com"
            className="inline-block bg-accent hover:bg-orange-400 text-black font-semibold text-[15px] px-9 py-4 rounded-[10px] transition-all duration-200 hover:-translate-y-[2px]"
          >
            Get Your Free Mockup →
          </a>
        </div>
      </div>
    </section>
  );
}
