const projects = [
  {
    id: 1,
    name: 'Ember & Oak',
    industry: 'Restaurant',
    description: 'Modern restaurant website with online ordering, reservation system, and full menu showcase.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    color: 'from-amber-600 to-orange-600',
  },
  {
    id: 2,
    name: 'Luxe Studio',
    industry: 'Salon',
    description: 'Elegant salon booking platform with stylist portfolios, pricing, and Instagram integration.',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe'],
    color: 'from-pink-600 to-rose-600',
  },
  {
    id: 3,
    name: 'Ironclad Roofing',
    industry: 'Contractor',
    description: 'Professional contractor site with project gallery, testimonials, and lead capture forms.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    color: 'from-slate-600 to-gray-700',
  },
  {
    id: 4,
    name: 'Summit Legal',
    industry: 'Law Firm',
    description: 'Credibility-focused law firm website highlighting services, team, and client success stories.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    color: 'from-blue-700 to-indigo-800',
  },
  {
    id: 5,
    name: 'Peak Fitness',
    industry: 'Gym',
    description: 'Fitness studio site with class schedules, membership pricing, trainer profiles, and sign-ups.',
    tech: ['Next.js', 'Tailwind CSS', 'Memberships'],
    color: 'from-red-600 to-orange-600',
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Recent Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Modern, fast websites that convert. Built with Next.js and deployed on Vercel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-accent"
            >
              {/* Browser Mockup */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-1">
                <div className="bg-gray-700 rounded-t px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className={`bg-gradient-to-br ${project.color} h-48 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="text-sm font-semibold opacity-75">www.gambitbuilds.com</div>
                    <div className="text-3xl font-display font-bold mt-4">{project.name}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-accent text-black px-3 py-1 rounded text-xs font-semibold">
                    {project.industry}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
