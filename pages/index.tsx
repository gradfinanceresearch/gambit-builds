import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Portfolio from '../components/Portfolio';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gambit Builds - Web Design for Small Business</title>
        <meta
          name="description"
          content="Modern, fast websites built with Next.js and Tailwind CSS. Perfect for restaurants, salons, contractors, law firms, and gyms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gambit Builds - Web Design for Small Business" />
        <meta
          property="og:description"
          content="Modern, fast websites built with Next.js and Tailwind CSS."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-dark text-white">
        <Header />
        
        {/* Add top padding to account for fixed header */}
        <main className="pt-16">
          <Hero />
          <StatsBar />
          <Portfolio />
          <HowItWorks />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
