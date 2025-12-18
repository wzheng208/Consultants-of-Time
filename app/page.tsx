import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedGrid from '@/components/FeaturedGrid';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AboutPage from './components/AboutPage';
import Reviews from '@/components/Reviews';
import Services from './components/Services';


export default function Home() {
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-[#070A14] text-zinc-50'>
      <div className='pointer-events-none fixed inset-0 -z-10'>
        <div className='absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#1D4ED8]/20 blur-3xl' />
        <div className='absolute bottom-[-260px] right-[-160px] h-[520px] w-[520px] rounded-full bg-[#2563EB]/10 blur-3xl' />
      </div>

      <Header />
      <main>
        <Hero />
        <FeaturedGrid />
        <Services />
        <AboutPage />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

