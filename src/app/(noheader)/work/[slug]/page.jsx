import React, { cache } from "react";
import { works } from '@/utils/util'
import PageContent from "./PageContent";

const getWork = cache((slug) => {
  const idx = works.findIndex(w => w.slug === slug);
  const work = works.find(w => w.slug === slug);
  return { idx, work };
})

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const { work } = getWork(slug);
  return {
    title: work?.title,
    description: work?.description,
    openGraph: {
      images: [
        {
          url: "/assets/images/ppg-og-image.png",
          alt: "prestige-promotions-group",
        },
      ],
      title: work?.title,
      description: work?.description,
      type: "website",
    },
  };
};

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const { work, idx } = getWork(slug);

  return (
    <PageContent work={work} idx={idx}/>
  );
}
