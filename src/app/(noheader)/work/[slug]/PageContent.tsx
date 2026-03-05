'use client'
import Link from 'next/link';
import { works } from '@/utils/util'
import React, { useEffect, useState } from 'react'
import { Work } from '@/utils/types';

const PageContent = ({ work, idx }: { work: Work, idx: number }) => {
    if (!work) return null;
   
    const [workIndex, setWorkIndex] = useState(() => getWorkIndex(idx));

    function getWorkIndex(idx: number) {
        return ({ 
            curr: idx, 
            prev: (idx == 0 ? works.length-1 : idx-1), 
            next: (idx == works.length-1 ? 0 : idx+1) 
        })
    }

    function handleKeyup(e: KeyboardEvent) {
    if (e.keyCode === 27) {
        window.location.href = '/work';
    }
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);
        return () => window.removeEventListener('keyup', handleKeyup);
    },[])
    
    return (
        <div className="main-container">
            <div className="relative min-h-screen bg-center bg-cover bg-no-repeat pb-10" style={{backgroundImage: `url(${work.image})`}}>
                <div className="absolute top-0 left-0 overlay w-full h-full bg-black/50"></div>
                <h1 className="max-w-5xl mx-auto text-3xl md:text-6xl px-4 text-white text-center leading-relaxed drop-shadow-lg font-cambria tracking-wide italic pt-24">
                    <i className="md:font-bold">{work.title}</i>
                </h1>
                <div dangerouslySetInnerHTML={{__html: work.description}} className='xprose max-w-5xl mx-auto mt-8 px-4 text-white text-xl sm:text-2xl drop-shadow-lg sm:leading-10 font-thin'></div>
                <Link href={'/work'}>
                    <button className="absolute cursor-pointer top-24 right-20 p-2 text-white hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </Link>
                <Link href={'/work'}>
                    <span className="cursor-pointer text-white absolute top-4 right-4 md:hidden block text-3xl">×</span> 
                </Link>
            </div>

            {/* <div className="px-4 py-12 sm:py-24">
                <div className="max-w-5xl w-full mx-auto space-y-12 md:space-y-20">
                <div className="text-[#178DA1] text-2xl md:text-3xl text-center leading-relaxed" x-text="selectedWork.subtitle">{work.description}</div>
                
                <div className="lg:pr-68 space-y-8 md:space-y-16">

                    {
                    work.elements &&
                    work.elements.map((ele) => {
                        if (ele.type === 'list') {
                        return (
                            <div key={ele.title}>
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{ele.title}</h2>
                            <ul className="ml-4 md:ml-8 space-y-1">
                                {ele.listItems.map((li, index) => {
                                if (typeof li === "string") {
                                    return (
                                    <li key={index} className="text-xl md:text-2xl">
                                        - {li}
                                    </li>
                                    );
                                }
                                return null; 
                                })}
                            </ul>
                            </div>
                        )
                        } else if (ele.type === "underline") {
                            return (
                            <div key={ele.title}>
                                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{ele.title}</h2>
                                <ul className="ml-4 md:ml-8 space-y-8">
                                {ele.listItems.map((li, index) => {
                                    if (typeof li !== "string") {
                                    return (
                                        <li key={li.text} className="text-xl md:text-2xl">
                                        <span className="underline underline-offset-2 decoration-1 mr-2">
                                            {li.bullet}
                                        </span>
                                        <span>{li.text}</span>
                                        </li>
                                    );
                                    }
                                    return null; 
                                })}
                                </ul>
                            </div>
                            );
                        }

                    })
                    }

                    { work.conclusion &&
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Conslusion:</h2>
                        <p className="text-xl md:text-2xl">{work.conclusion}</p>
                    </div>
                    }

                </div>
                </div>
            </div> */}
            
            {
                (works.length > 2) && 
                <div className="grid grid-cols-2">
                    
                    <Link href={`/work/${works[workIndex.prev]?.slug}`}>
                        <div
                        className="relative bg-cover bg-no-repeat h-48 md:h-96 bg-center bg-blend-overlay bg-black/50 cursor-pointer hover:bg-black/70"
                        style={{ backgroundImage: `url(${works[workIndex.prev].image})` }}
                        >
                            <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold text-white text-center leading-normal font-cambria md:tracking-wide italic max-sm:line-clamp-4 w-3/4">
                                {works[workIndex.prev].title}
                            </h2>
                        </div>
                    </Link>

                    <Link href={`/work/${works[workIndex.next]?.slug}`}>
                        <div
                        className="relative bg-cover bg-no-repeat h-48 md:h-96 bg-center bg-blend-overlay bg-black/50 cursor-pointer hover:bg-black/70"
                        style={{ backgroundImage: `url(${works[workIndex.next].image})` }}
                        >
                            <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold text-white text-center leading-normal font-cambria md:tracking-wide italic max-sm:line-clamp-4 w-3/4">
                                {works[workIndex.next].title}
                            </h2>
                        </div>
                    </Link>
            
                </div>
            }
        </div>
    )
}

export default PageContent