import CoreValuesSection from '@/components/CoreValuesSection';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const teamMembers = [
    {name: "Kourtney Houston", designation: "Owner", blurb: "After a successful career managing salons, Kourtney was ready to go on the greatest adventure of her life when she founded PPG in 2011. A master of staffing and problem solving, she loves the exciting space of events and interactive marketing. Outside of work, Kourtney enjoys cooking for friends and family.", image: "/assets/images/about/kourtney-profile.jpg", linkedIn: "https://www.linkedin.com/in/kourtney-houston-26768264/", },
    {name: "Shale Houston", designation: "Owner", blurb: "Shale joined PPG during the pandemic, bringing 20+ years of sales and business experience and a willingness to take charge. He enjoys working in this industry precisely because there’s a different challenge every day. When not working, Shale enjoys hosting friends and family and boating.", image: "/assets/images/about/shale-profile.jpeg", linkedIn: "https://www.linkedin.com/in/shale-houston-9b186251/", },
    // {name: "Carrie Schoening", designation: "Manager", blurb: "Almost nothing happens here without Carrie’s effort and involvement. Carrie is the backend and calendar manager at PPG and has been a central member since 2014. Outside of work, Carrie is busy with her children and rescue animals, including the Irish wolfhounds she raises.", image: "", },
]

const description = `<p><b>Prestige Promotion Group</b> is a premier beverage sampling and experiential marketing company, dedicated to helping brands spark awareness, drive trial, and build lasting consumer connections through targeted, hands-on activations.</p><p>Founded in 2011, PPG has established itself as one of the largest and most trusted sampling partners in the Midwest—and expanding beyond—delivering compliant, high-quality programs that produce real results in both on-premise (bars, restaurants, venues, festivals) and off-premise (grocery stores, retail chains, convenience) settings.</p><p>We bring deep expertise in the beverage ecosystem, understanding the dynamics between brands, distributors, and consumers to create customized, effective strategies. We collaborate closely with partners to engage audiences authentically while offering clear, compliant education.</p><p>Our primary categories include beer, wine, spirits, RTDs, THC beverages, and energy drinks, with the flexibility to support others. We often team up with restaurants and major grocery chains for integrated food pairings that enhance the experience and boost impact.</p><p>We prioritize professionalism by recruiting and rigorously training our brand ambassadors to deliver genuine, knowledgeable interactions—ensuring every activation is executed with reliability, compliance, and a focus on building consumer trust and excitement.</p><p><b>Ready to partner on your next activation?</b> Contact us today to discuss how we can bring your brand to life.</p>`;

export const generateMetadata = (): Metadata => {
  return {
    title: "PPG | About",
    description: "Prestige Promotion Group is a premier beverage sampling and experiential marketing company, dedicated to helping brands spark awareness, drive trial, and build lasting consumer connections through targeted, hands-on activations. Founded in 2011, PPG has established itself as one of the largest and most trusted sampling partners in the Midwest—and expanding beyond—delivering compliant, high-quality programs that produce real results in both on-premise (bars, restaurants, venues, festivals) and off-premise (grocery stores, retail chains, convenience) settings. We bring deep expertise in the beverage ecosystem, understanding the dynamics between brands, distributors, and consumers to create customized, effective strategies. We collaborate closely with partners to engage audiences authentically while offering clear, compliant education.Our primary categories include beer, wine, spirits, RTDs, THC beverages, and energy drinks, with the flexibility to support others. We often team up with restaurants and major grocery chains for integrated food pairings that enhance the experience and boost impact. We prioritize professionalism by recruiting and rigorously training our brand ambassadors to deliver genuine, knowledgeable interactions—ensuring every activation is executed with reliability, compliance, and a focus on building consumer trust and excitement. Ready to partner on your next activation? Contact us today to discuss how we can bring your brand to life.",
    openGraph: {
      images: [
        {
          url: "/assets/images/ppg-og-image.png",
          alt: "prestige-promotion-group",
        },
      ],
      title: "PPG | About",
      description: "Prestige Promotion Group is a premier beverage sampling and experiential marketing company, dedicated to helping brands spark awareness, drive trial, and build lasting consumer connections through targeted, hands-on activations. Founded in 2011, PPG has established itself as one of the largest and most trusted sampling partners in the Midwest—and expanding beyond—delivering compliant, high-quality programs that produce real results in both on-premise (bars, restaurants, venues, festivals) and off-premise (grocery stores, retail chains, convenience) settings. We bring deep expertise in the beverage ecosystem, understanding the dynamics between brands, distributors, and consumers to create customized, effective strategies. We collaborate closely with partners to engage audiences authentically while offering clear, compliant education.Our primary categories include beer, wine, spirits, RTDs, THC beverages, and energy drinks, with the flexibility to support others. We often team up with restaurants and major grocery chains for integrated food pairings that enhance the experience and boost impact. We prioritize professionalism by recruiting and rigorously training our brand ambassadors to deliver genuine, knowledgeable interactions—ensuring every activation is executed with reliability, compliance, and a focus on building consumer trust and excitement. Ready to partner on your next activation? Contact us today to discuss how we can bring your brand to life.",
      type: "website",
    },
  };
};

const page = () => {
    return (
        <div className='bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] text-white pt-4'>
            <div className="text-center text-5xl font-bold text-white italic font-cambria">About Us</div>
            <div dangerouslySetInnerHTML={{__html: description}} className="xprose text-2xl md:text-3xl font-thin mt-12 w-full lg:w-2/3 mx-auto text-center px-4 leading-relaxed tracking-wide"></div>
            <div className="w-full lg:w-2/3 mx-auto px-4 flex flex-col gap-24 md:gap-28 my-24 md:my-32">
                {
                    teamMembers.map((member) => {
                        return (
                            <div key={uuidv4()} className="flex flex-col md:flex-row md:gap-16 justify-items-center items-center">
                                <figure className="w-64 md:w-80 h-64 md:h-80 bg-gray-100 rounded-full overflow-hidden shrink-0">
                                  <img className='w-full' src={member.image} alt={member.name} />
                                </figure>
                                <div className="leading-relaxed mt-8 md:mt-0">
                                    <h2 className="text-center md:text-left text-2xl md:text-3xl font-semibold italic font-cambria">{member.name}</h2>
                                    <h3 className="text-center md:text-left text-xl md:text-2xl font-thin italic mt-1">{member.designation}</h3>
                                    <p className="text-xl text-center md:text-left md:text-2xl mt-4 md:mt-8 font-thin">{member.blurb}</p>
                                    <Link href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                      <figure className='w-20 mt-4 max-md:mx-auto rounded overflow-hidden'>
                                        <img src="/assets/images/linkedin-black-new.png" alt="linkedin-icon" />
                                      </figure>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <CoreValuesSection/>
        </div>
    )
}

export default page