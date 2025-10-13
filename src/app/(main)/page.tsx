import Clients from '@/components/Clients';
import HeroSection from '@/components/HeroSection';
import SideHero from '@/components/SideHero';
import Testimonials from '@/components/Testimonials';
import { Metadata } from 'next';
import Link from 'next/link';

export const generateMetadata = (): Metadata => {
  return {
    title: "Prestige Promotions Group",
    description: "Prestige Promotions Group was founded in 2011 with a desire to raise the standards of interactive marketing and go directly to the customer.",
    openGraph: {
      images: [
        {
          url: "/assets/images/ppg-og-image.png",
          alt: "prestige-promotions-group",
        },
      ],
      title: "Prestige Promotions Group",
      description: "Prestige Promotions Group was founded in 2011 with a desire to raise the standards of interactive marketing and go directly to the customer.",
      type: "website",
    },
  };
};

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection/>

      {/* Side hero */ }
      <SideHero/>

      {/* Testimonials */}
      <Testimonials/>

      {/* Clients */}
      {/* <Clients/> */}

      {/*  Buttons */}
      <div className="bg-black flex flex-row md:flex-row items-center justify-center space-x-4 pb-16">
          <Link href={'/contact'}>
            <div className="relative w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-[#178DA1] text-white flex items-center justify-center text-2xl sm:text-3xl font-semibold font-cambria italic">
              <img className='w-full object-cover' src="/assets/images/home/work-with-us.png" alt="work-with-us" />
              <span className='absolute top-[5%] sm:top-[15%] cambria bold italic text-center'>Work <br /> with us</span>
            </div>
          </Link>
          <Link href={'/careers'}>
            <div className="relative w-36 h-36 sm:w-56 sm:h-56 rounded-full bg-[#178DA1] mt-44 md:mt-48 text-white flex items-center justify-center text-xl sm:text-2xl font-semibold font-cambria italic">
              <img className='w-full object-cover' src="/assets/images/home/work-for-us.png" alt="work-with-us" />
              <span className='absolute sm:top-[25%] top-[20%] left-[15%] sm:left-[20%] cambria bold italic text-center'>Work <br /> for us</span>
            </div>
          </Link>
      </div>
    </>
  );
}
