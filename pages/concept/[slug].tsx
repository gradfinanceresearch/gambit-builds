import type { GetServerSideProps } from "next";

type ConceptData = {
  business?: string;
  city?: string;
  tagline?: string;
  headline?: string;
  subheadline?: string;
  services?: string[];
  service_descriptions?: string[];
  service_areas?: string[];
  reviews?: { text: string; detail: string }[];
  issues_addressed?: string[];
  phone?: string;
  cta?: string;
  colors?: { primary?: string; accent?: string };
  logo?: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = String(ctx.params?.slug || "");
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://gambitbuilds.com";
  const res = await fetch(`${base}/concepts/${slug}.json`);

  if (!res.ok) return { notFound: true };

  const data = (await res.json()) as ConceptData;
  return { props: { data, slug } };
};

export default function Concept({ data, slug }: { data: ConceptData; slug: string }) {
  const primary = data.colors?.primary || "#1E40AF";
  const accent = data.colors?.accent || "#F97316";
  const business = data.business || "Local Service Co";
  const city = data.city || "your area";
  const headline = data.headline || `${business} in ${city}`;
  const tagline = data.tagline || "";
  const subheadline =
    data.subheadline ||
    `Modern, mobile-first site concept designed to turn visitors into calls and quote requests.`;
  const phone = data.phone || "";
  const cta = data.cta || "Get a Free Estimate";

  const mailto = `mailto:kaleb@gambitbuilds.com?subject=${encodeURIComponent(
    `Concept mockup for ${business}`
  )}&body=${encodeURIComponent(
    `Hey Kaleb,\n\nI saw the concept page (${slug}) and want to talk.\n\nBest,\n`
  )}`;

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {data.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={data.logo} alt={business} className="h-8 w-auto rounded bg-white/5 p-1" />
            ) : (
              <div className="h-8 w-8 rounded bg-white/10" />
            )}
            <div className="leading-tight">
              <div className="text-sm font-semibold">{business}</div>
              <div className="text-xs text-neutral-400">Concept homepage • {city}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {phone ? (
              <a
                href={`tel:${phone}`}
                className="hidden rounded-lg border border-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/5 md:inline"
              >
                Call {phone}
              </a>
            ) : null}
            <a
              href={mailto}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-neutral-950"
              style={{ backgroundColor: accent }}
            >
              {cta}
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pb-8 pt-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
              Mobile-first concept • built for more calls
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{headline}</h1>
            <p className="mt-3 text-base text-neutral-300 md:text-lg">{subheadline}</p>
	    {tagline ? <p className="mt-2 text-sm text-neutral-400">{tagline}</p> : null}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailto}
                className="rounded-xl px-5 py-3 text-center text-sm font-semibold text-neutral-950"
                style={{ backgroundColor: accent }}
              >
                {cta}
              </a>
              {phone ? (
                <a
                  href={`tel:${phone}`}
                  className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm font-semibold text-neutral-200 hover:bg-white/5"
                >
                  Tap to Call
                </a>
              ) : (
                <a
                  href="#quote"
                  className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm font-semibold text-neutral-200 hover:bg-white/5"
                >
                  Request a Quote
                </a>
              )}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat label="Response" value="< 1 hr" accent={accent} />
              <Stat label="Rating" value="4.9★" accent={accent} />
              <Stat label="Insured" value="Yes" accent={accent} />
            </div>
          </div>

          {/* Feature card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <div className="text-sm font-semibold">What this concept improves</div>
	<ul className="mt-4 space-y-3 text-sm text-neutral-300">
  {(data.issues_addressed?.length ? data.issues_addressed : [
    "Clear call / estimate actions above the fold for mobile visitors.",
    "Strong trust signals to boost conversions.",
    "Clean services layout that's easy to scan."
  ]).map((issue, i) => (
    <li key={i} className="flex gap-3">
      <Dot color={accent} />
      {issue}
    </li>
  ))}
</ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-neutral-950/60 p-4">
              <div className="text-xs text-neutral-400">Brand color preview</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: primary }} />
                <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: accent }} />
                <div className="text-xs text-neutral-300">
                  Primary + Accent pulled from site / defaults
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Services</h2>
            <p className="mt-1 text-sm text-neutral-400">Simple, scannable, and conversion-focused.</p>
          </div>
          <a href="#quote" className="text-sm font-semibold" style={{ color: accent }}>
            Get pricing →
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(data.services?.length ? data.services : ["Service A", "Service B", "Service C"]).map(
            (s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
              >
                <div className="text-sm font-semibold">{s}</div>
                <p className="mt-2 text-sm text-neutral-400">
		{data.service_descriptions?.[i] || "Fast, reliable service with upfront pricing."}
                </p>
                <div className="mt-4 text-sm font-semibold" style={{ color: accent }}>
                  Request estimate →
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Reviews + Service area */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold">Trusted by local customers</h3>
            <div className="mt-4 space-y-4">
	   {(data.reviews?.length ? data.reviews : [
  { text: "Fast and professional.", detail: "Clear communication, showed up on time." },
  { text: "Highly recommend.", detail: "Fair pricing and great workmanship." },
  { text: "Will use again.", detail: "Solved the problem quickly and cleanly." }
]).map((r, i) => (
  <Review key={i} text={r.text} detail={r.detail} accent={accent} />
))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold">Service area</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Add nearby towns/neighborhoods to rank for more “near me” searches.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(data.service_areas?.length ? data.service_areas : [city]).map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-white/10 bg-neutral-950/40 px-3 py-1 text-xs text-neutral-200"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-neutral-950/60 p-4 text-sm text-neutral-300">
              <div className="font-semibold">Want this built for real?</div>
              <div className="mt-1 text-neutral-400">
                Reply to the email or click “{cta}” and I’ll convert this concept into a live site.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-6 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-bold">Request a quote</h2>
              <p className="mt-2 text-sm text-neutral-400">
                This is a concept — the form can route to email/SMS/CRM in the real build.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-3">
                <input
                  className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="Phone"
                />
                <textarea
                  className="h-24 w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="What do you need help with?"
                />
                <a
                  href={mailto}
                  className="rounded-xl px-5 py-3 text-center text-sm font-semibold text-neutral-950"
                  style={{ backgroundColor: accent }}
                >
                  Send request
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-xs text-neutral-500">
            Concept design generated by Gambit Builds (not affiliated with {business}). No data is
            collected on this page.
          </p>
        </div>
      </section>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />;
}

function Stat({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-neutral-400">{label}</div>
      <div className="mt-1 text-lg font-bold">
        <span style={{ color: accent }}>{value}</span>
      </div>
    </div>
  );
}

function Review({ text, detail, accent }: { text: string; detail: string; accent: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">"{text}"</div>
        <div className="text-xs font-semibold" style={{ color: accent }}>
          5.0 ★★★★★
        </div>
      </div>
      <div className="mt-2 text-sm text-neutral-400">"{detail}"</div>
      <div className="mt-3 text-xs text-neutral-500">— Local customer</div>
    </div>
  );
}
