import fs from 'fs';
import path from 'path';
import type { GetStaticPaths, GetStaticProps } from 'next';

type Concept = {
  slug: string;
  business: string;
  city: string;
  headline: string;
  subheadline: string;
  services: string[];
  phone: string;
  logo: string;
  colors: { primary: string; accent: string };
  cta: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const conceptsDir = path.join(process.cwd(), 'public', 'concepts');

  if (!fs.existsSync(conceptsDir)) {
    return { paths: [], fallback: 'blocking' };
  }

  const files = fs.readdirSync(conceptsDir).filter((f) => f.endsWith('.json'));
  const paths = files.map((file) => ({ params: { slug: file.replace('.json', '') } }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug || '');
  const filePath = path.join(process.cwd(), 'public', 'concepts', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const concept: Concept = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: { concept },
    revalidate: 60,
  };
};

export default function ConceptPage({ concept }: { concept: Concept }) {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#080808', color: '#fff', minHeight: '100vh' }}>
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '64px 24px' }}>
        <p style={{ color: concept.colors.accent, fontWeight: 700, letterSpacing: '0.04em' }}>GAMBIT BUILDS CONCEPT</p>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: '12px 0 8px' }}>{concept.headline}</h1>
        <p style={{ fontSize: 20, color: '#d1d5db', marginBottom: 28 }}>{concept.subheadline}</p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
          <span style={{ padding: '8px 12px', background: '#111827', borderRadius: 8 }}>{concept.business}</span>
          <span style={{ padding: '8px 12px', background: '#111827', borderRadius: 8 }}>{concept.city}</span>
          <span style={{ padding: '8px 12px', background: '#111827', borderRadius: 8 }}>{concept.phone}</span>
        </div>

        <h2 style={{ fontSize: 28, margin: '32px 0 16px' }}>Services</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, padding: 0, listStyle: 'none' }}>
          {concept.services.map((service) => (
            <li key={service} style={{ background: '#111827', border: `1px solid ${concept.colors.primary}`, borderRadius: 10, padding: '14px 16px' }}>
              {service}
            </li>
          ))}
        </ul>

        <a
          href={`tel:${concept.phone.replace(/[^\d]/g, '')}`}
          style={{
            marginTop: 32,
            display: 'inline-block',
            background: concept.colors.accent,
            color: '#111827',
            padding: '12px 18px',
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          {concept.cta}
        </a>
      </section>
    </main>
  );
}
