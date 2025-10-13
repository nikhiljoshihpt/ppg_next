import InfiniteCarousel from '@/components/InfiniteCarousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const testimonials = [
    {image: '/assets/images/careers/careerspage-dynamic.png', text: " Events are mercurial and volatile. In the days leading up to an event and on the day itself, there will be dozens of problems, no matter how well you plan. Vendors might go silent, logistics might fail, and it might rain on your parade. These problems should excite you, not overwhelm you.", name: "John Doe", title: "Dynamism", },
    {image: '/assets/images/careers/careerspage-proffessional.png', text: "We are an extension of the brands we’re promoting, and we are their representatives to the customer. It is important for you to put your best foot forward so that we can give our patrons the best experience possible.", name: "Jane Doe", title: "Professionalism", },
    {image: '/assets/images/careers/careerspage-communicative.png', text: "Events are for people, by people. You should enjoy talking to people and be a positive presence on the ground. Be the sort of magnetic personality that people remember.", name: "John Smith", title: "People skills", },
]

const PageContent = () => {
  return (
    <div className='bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] text-white pb-8'>
        <div className="text-center text-5xl font-bold text-white font-cambria italic">Careers</div>
        <div className="mt-8 text-2xl sm:text-3xl tracking-wide leading-relaxed px-8 mx-auto text-center font-thin sm:w-2/3 pb-8 md:pb-16">
            Are you excited by the prospect of working in the events space? Do you like fast and enjoyable work environments where everybody works together to pull off events in real time? Come work with us to get real-world experience in the marketing and promotions industry and build skills that are transferable to any industry.
            <br /><br />
            We’re always on the lookout for young and energetic team members. Because this is an event-based organization, you would work limited hours and make money on the side while having plenty of time to pursue another career or passion.
        </div>

            
        <InfiniteCarousel data={testimonials} />

        <div className='flex flex-col items-center px-4 py-16'>
            <Image src={'/assets/images/careers/BA_cluster.png'} alt={'images-cluster'} width={600} height={397}/>

            <p className='text-2xl sm:text-3xl font-thin tracking-wide leading-relaxed text-center mt-20'>Join our growing family of happy brand ambassadors</p>

            <button className='text-2xl text-[#178DA1] sm:text-3xl max-sm:px-8 px-12 sm:px-16 py-6 bg-black leading-relaxed text-center font-cambria font-bold italic cursor-pointer mt-4 md:mt-8'>contact us</button>

            <p className='text-xl text-center opacity-80 mt-12 leading-relaxed tracking-wide md:mt-16'><span className='font-thin'>Didn't find a suitable position?</span> {' '}
                <br className='block md:hidden' />
                <Link href={'/contact'}>
                    <span className='text-black underline cursor-pointer'>Send us a message</span> {' '}
                </Link>
                <br className='hidden md:block' />
                <span className='font-thin'>of what you're looking for and we'll get back to you.</span>
            </p>
        </div>

    </div>
  )
}

export default PageContent