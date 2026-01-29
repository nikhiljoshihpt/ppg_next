import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const generateMetadata = (): Metadata => {
    return {
      title: "PPG | Contact",
      description: "Contact page of PPG website.",
      openGraph: {
        images: [
          {
            url: "/assets/images/ppg-og-image.png",
            alt: "prestige-promotion-group",
          },
        ],
        title: "PPG | Contact",
        description: "Contact page of PPG website.",
        type: "website",
      },
    };
};

const page = () => {
    return (
        <div className='bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] text-white px-4 flex-1 flex flex-col gap-8 items-center max-sm:pt-16 sm:justify-center'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria">Get in touch</div>
            <div className="text-center text-3xl md:text-4xl font-bold italic text-gray-900 font-cambria">(636) 279-5829<span className='hidden sm:inline-block mx-2'>|</span><br className='block sm:hidden' />(314) 223-3545
</div>
            <div className="text-center font-cambria font-bold sm:mb-20 text-2xl sm:text-3xl md:text-4xl italic text-gray-900">
                <Link href={`mailto:KHouston@activateppg.com`} className="text-center border-b border-gray-900">KHouston@activateppg.com</Link>
                <span className='hidden sm:inline-block mx-2'> | </span><br className='block sm:hidden' />
                <Link href={`mailto:SHouston@activateppg.com`} className="text-center border-b border-gray-900">SHouston@activateppg.com</Link>
            </div>
        </div>
    )
}

export default page