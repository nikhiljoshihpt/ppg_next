import React, { cache, use } from "react";
import WorkSection from "@/components/WorkSection";
import { works } from '@/utils/util'


const getWork = cache((slug) => {
  return works.find(w => w.slug === slug) 
})

export const generateMetadata = async ( { params })=> {
  const { slug } = await params;
  const work = getWork(slug);
  return {
    title: 'PPG | Work',
    description: '',
    openGraph: {
      images: [
        {
          url: "",
          alt: "",
        },
      ],
      title: 'PPG | Work',
      description: '',
      type: "website",
    },
  };
};

const page = ( { params }) => {
  const { slug } = use(params);
  const work = getWork(slug);
  
  return (
    <div className="bg-black">
      <div className="text-center text-5xl font-bold text-white italic font-cambria pb-16">
        Work
      </div>

      <WorkSection data={work}/>
      
    </div>
  );
};

export default page;
