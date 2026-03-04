export default function StatsBar() {
  const stats = [
    { value: '48hr', label: 'Average Delivery' },
    { value: '100%', label: 'Mobile Responsive' },
    { value: '$0', label: 'Hosting Setup' },
    { value: '5+', label: 'Industries Served' },
  ];

  return (
    <section className="px-6">
      <div
        className="max-w-[900px] mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-display text-4xl text-accent mb-0.5 italic">
              {s.value}
            </div>
            <div className="font-sans text-[11px] text-gray-600 uppercase tracking-[0.1em] font-medium">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
