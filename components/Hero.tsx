export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white">
          Web Design for Small Business.
        </h1>
        <p className="font-sans text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          We build modern, fast websites that turn browsers into customers. Next.js, React, Tailwind CSS. Deployed on Vercel.
        </p>
        <a
          href="mailto:kaleb@gambitbuilds.com"
          className="inline-block bg-accent hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 active:scale-95"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
