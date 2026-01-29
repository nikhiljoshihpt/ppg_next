import React from "react";
import WorkSection from "@/components/WorkSection";

export const metadata = {
  title: 'PPG | Work',
  description: 'Work page of PPG website.',
  openGraph: {
    images: [
      {
        url: "/assets/images/ppg-og-image.png",
        alt: "prestige-promotion-group",
      },
    ],
    title: 'PPG | Work',
    description: 'Work page of PPG website.',
    type: "website",
  },
};

const page = () => {
  return (
    <div className="bg-black">
      <div className="text-center text-5xl font-bold text-white italic font-cambria pb-16">
        Work
      </div>

      <WorkSection />
      
    </div>
  );
};

export default page;
