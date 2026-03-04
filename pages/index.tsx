import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Portfolio from '../components/Portfolio';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gambit Builds — Web Development for Small Business</title>
        <meta
          name="description"
          content="We build fast, modern, mobile-first websites for restaurants, salons, contractors, and local businesses. Delivered in days, not months."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Gambit Builds — Web Development for Small Business"
        />
        <meta
          property="og:description"
          content="Modern websites for local businesses. Delivered in days, not months."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-dark text-white">
        <Header />
        <main>
          <Hero />
          <StatsBar />
          <Portfolio />
          <HowItWorks />
          <Industries />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
