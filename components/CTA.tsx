export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-accent border-opacity-30 rounded-xl p-12 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to launch your website?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's build something great together. Send us an email or schedule a call.
          </p>
          <a
            href="mailto:kaleb@gambitbuilds.com"
            className="inline-block bg-accent hover:bg-orange-600 text-black font-semibold px-10 py-4 rounded-lg transition-all transform hover:scale-105 active:scale-95 text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
