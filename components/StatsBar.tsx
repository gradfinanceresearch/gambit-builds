export default function StatsBar() {
  const stats = [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Time to Deploy', value: '2-4 weeks' },
    { label: 'Sites on Vercel', value: '50+' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900 bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
