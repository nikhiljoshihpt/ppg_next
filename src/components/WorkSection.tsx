'use client'
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Work } from "@/utils/types";
import { works } from '@/utils/util'
import Link from "next/link";

interface PageProps {
    data: Work | undefined;
}

const WorkSection = ( { data }: PageProps ) => {
    const [work, setWork] = useState(data);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {works.map((work) => {
                    return (
                        <Link key={uuidv4()} href={`/work/${work?.slug}`}>
                            <div
                            className="relative bg-cover bg-no-repeat h-96 bg-center bg-blend-overlay bg-black/50 cursor-pointer hover:bg-black/70"
                            style={{ backgroundImage: `url(${work.image})` }}
                            >
                                <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-semibold text-white text-center font-cambria md:tracking-wide italic w-3/4">
                                    {work.title}
                                </h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    )
}

export default WorkSection