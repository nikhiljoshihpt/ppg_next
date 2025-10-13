import PageContent from './PageContent';
import { Metadata } from 'next';
import React from 'react'

export const generateMetadata = (): Metadata => {
    return {
      title: "PPG | Careers",
      description: "We’re always on the lookout for young and energetic team members. Because this is an event-based organization, you would work limited hours and make money on the side while having plenty of time to pursue another career or passion.",
      openGraph: {
        images: [
          {
            url: "/assets/images/ppg-og-image.png",
            alt: "prestige-promotions-group",
          },
        ],
        title: "PPG | Careers",
        description: "We’re always on the lookout for young and energetic team members. Because this is an event-based organization, you would work limited hours and make money on the side while having plenty of time to pursue another career or passion.",
        type: "website",
      },
    };
};

const page = () => {
  return (
    <PageContent/>
  )
}

export default page