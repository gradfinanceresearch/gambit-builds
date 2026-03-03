const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We learn about your business, competitors, and goals. 30 minutes, zero obligation.',
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'We design and build your site using Next.js, React, and Tailwind CSS. Fast, modern, responsive.',
  },
  {
    number: '03',
    title: 'Review & Refine',
    description: 'You review the site, request changes, and we ship it perfect for your business.',
  },
  {
    number: '04',
    title: 'Deploy & Launch',
    description: 'Your site goes live on Vercel. We handle the technical setup and provide support.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">
            Simple process. Fast turnaround. Transparent pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className="text-6xl font-display font-bold text-accent opacity-20 mb-4">
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-sans font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-1 bg-gradient-to-r from-accent to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
