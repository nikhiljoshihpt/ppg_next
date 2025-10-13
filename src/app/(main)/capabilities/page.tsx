import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const capabilities = [
    {image: "/assets/images/capabilities/event-planning.png", title: "Event Planning", subtitle: "A good plan ensures you’re not running around on event day. Leave the crunchy preparation to us."},
    {image: "/assets/images/capabilities/event-management.png", title: "Event Management", subtitle: "We’re on ground at every event to ensure it goes smoothly."},
    {image: "/assets/images/capabilities/interactive-experiences.png", title: "Interactive Experiences", subtitle: "Create memorable ventures for every occasion, from sport events to tasting menus and everything in between."},
    {image: "/assets/images/capabilities/product-sampling.png", title: "Product Sampling", subtitle: "Engage real customers with giveaways and samples, collecting crucial feedback from early customers."},
    {image: "/assets/images/capabilities/technology-integration.png", title: "Technology Integration", subtitle: "Be on the forefront of experiential activities designed to boost your product activation from the ground up."},
    {image: "/assets/images/capabilities/analytics.png", title: "Analysis", subtitle: "We provide data-driven, actionable insights after every event."},
]

export const generateMetadata = (): Metadata => {
    return {
      title: "PPG | Capabilities",
      description: "We specialize in crafting events that place your products in front of your ideal consumer. Whether you’re looking for a dedicated special celebration or are interested in collecting primary customer feedback, we’ll work with you to activate your brand.",
      openGraph: {
        images: [
          {
            url: "",
            alt: "",
          },
        ],
        title: "PPG | Capabilities",
        description: "We specialize in crafting events that place your products in front of your ideal consumer. Whether you’re looking for a dedicated special celebration or are interested in collecting primary customer feedback, we’ll work with you to activate your brand.",
        type: "website",
      },
    };
};
  

const page = () => {
  return (
    <div className='bg-black text-white pb-24 px-8'>
        <div className="text-center text-5xl font-bold text-white italic font-cambria">Capabilities</div>
        <div className="w-full md:w-2/3 text-2xl md:text-3xl text-center leading-relaxed font-thin mt-16 mx-auto">We specialize in crafting events that place your products in front of your ideal consumer. Whether you’re looking for a dedicated special celebration or are interested in collecting primary customer feedback, we’ll work with you to activate your brand.</div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 place-content-center mt-16 md:mt-32 mx-auto w-3/4">
            {
                capabilities.map((capability) => {
                    return (
                        <div key={uuidv4()} className="h-72 w-72 p-4 bg-white rounded-full flex items-center justify-center text-4xl font-bold italic text-cyan-700 text-center">{capability.title}</div>   
                    )
                })
            }
        </div> */}
        <div className='max-w-5xl mx-auto mt-28 md:mt-48 grid grid-cols-1 md:grid-cols-2 gap-12 gap-x-40'>
          {capabilities.map((capability, idx) => {
            return (
              <div key={idx} className="md:pb-12 flex flex-col items-center">
                <figure className='w-48 h-48 rounded-full'>
                  <img src={capability.image} alt={capability.title} />
                </figure>
                <h3 className="font-cambria font-bold italic text-2xl sm:text-3xl text-[#178DA1] tracking-wide leading-relaxed text-center mt-4">
                  {capability.title}
                </h3>
                <p className="text-xl md:text-2xl opacity-80 font-thin text-center">
                  {capability.subtitle}
                </p>

                {/* short separator line */}
                <div className="h-[1px] w-[60px] bg-[#178DA1] mt-14 max-md:block hidden"></div>
              </div>
            )
          })}
        </div>
        <div className="mt-24 md:mt-32 mx-auto md:w-1/2 text-2xl md:text-3xl text-center font-thin leading-relaxed tracking-wide">Connect with us to know how we could collaborate to bubble up your brand</div>
        <div className="text-center mt-10 md:mt-16">
            <Link href="/contact" className="w-full md:w-max bg-cyan-600 italic font-cambria font-bold text-black text-2xl md:text-3xl px-8 md:px-32 py-4 md:py-8">work with us</Link>
        </div>
    </div>
  )
}

export default page