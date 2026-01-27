'use client'
import Link from 'next/link'
import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { heroImages } from '@/utils/util'
import CircleAnimation from './CircleAnimation'
import { useRouter } from 'next/navigation'
import './HeroSection.css'

const HeroSection = () => {
    const [bubblesSize, setBubblesSize] = useState(() => 0)
    const [isClient, setIsClient] = useState(false)
    
    const bubbleAnimations = useMemo(() => {
        return heroImages.map((_, index) => ({
            driftClass: index % 2 === 0 ? "bubble-drift-left" : "bubble-drift-right",
            duration: `${6 + (index * 0.7) % 6}s`,
            delay: `${(index * 0.5) % 5}s`,
        }))
    }, [])
    // const [showAnimation, setShowAnimation] = useState(false)
    const [animation, setAnimation] = useState({
        display: false,
        color: "",
    })
    const router = useRouter()
    
    function getBubbleSize() {
        if (typeof window === "undefined") return 1.3
         
        const windowWidth = window.innerWidth
        let size = 4;
        if (windowWidth >= 1024) {
            size = 4
        } else if (windowWidth < 1024 && windowWidth >= 880) {
            size = 3.5
        } else if (windowWidth < 880 && windowWidth > 768) {
            size = 3
        } else if (windowWidth <= 768 && windowWidth >= 640) {
            size = 2.5
        } else if (windowWidth < 640 && windowWidth >= 500) {
            size = 2
        } else if (windowWidth < 500 && windowWidth >= 400) {
            size = 1.5
        } else if (windowWidth < 400 && windowWidth >= 360) {
            size = 1.3
        } else if (windowWidth < 360) {
            size = 1.2
        }
        return size
    }
   
    useEffect(() => {
        setIsClient(true)
        
        function handleResizeOrLoad() {
            const size = getBubbleSize()
            setBubblesSize(size)
        }

        handleResizeOrLoad()
    
        window.addEventListener('resize', handleResizeOrLoad)

        return () => {
            window.removeEventListener('resize', handleResizeOrLoad)
        }
    },[getBubbleSize])

    function spreadCircle(url: string, color: string) {
        setAnimation({color, display: true})
        setTimeout(() => {
            router.push(url)
        },500)
    }
    
    return (
    <div className='bg-black pb-32 px-4'>
        <div className="w-full max-w-5xl mx-auto aspect-square relative top-[-20px] sm:top-[-150px] xl:top-[-220px]">
        {
            heroImages.map((heroImage, index) => {
                const anim = bubbleAnimations[index]
                return (
                    heroImage.url ?
                    <div
                        onClick={()=>spreadCircle(heroImage.url, heroImage.color)}
                        key={`hero-bubble-${index}`}
                        className={`shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.6)] 
                                    rounded-full bg-cover absolute animate-bubble 
                                    ${isClient ? anim.driftClass : ""}`}
                        style={{
                            height: `${heroImage.size * bubblesSize}px`,
                            width: `${heroImage.size * bubblesSize}px`,
                            top: `${heroImage.top}%`,
                            left: `${heroImage.left}%`,
                            backgroundImage: `url(${heroImage.path})`,
                            animationDuration: isClient ? anim.duration : undefined,
                            animationDelay: isClient ? anim.delay : undefined,
                        }}
                    ></div>
                    :
                    <div
                        key={`hero-bubble-${index}`}
                        className={`shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.6)] rounded-full bg-cover absolute`}
                        style={{
                            height: `${heroImage.size*bubblesSize}px`,
                            width: `${heroImage.size*bubblesSize}px`,
                            top: `${heroImage.top}%`,
                            left: `${heroImage.left}%`,
                            backgroundImage: `url(${heroImage.path})`,
                        }}
                    ></div>
                )
            })
        }
        </div>
        
        {/* Quote */}
        <div className="text-center mx-auto w-full md:w-2/3 leading-relaxed p-8">
            <h2 className='text-gray-100 text-3xl md:text-4xl mb-4 font-semibold'>You're the life of the party!</h2>
            <div className="font-thin text-gray-100 text-2xl md:text-3xl leading-relaxed md:leading-relaxed">Your brand deserves to be brought to the right people at the right time. We'll make sure you give your customers a time to remember.</div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-24">
                <Link href="/capabilities" className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.6)] text-center py-6 text-2xl md:text-3xl text-[#178DA1] italic font-cambria font-bold w-full hover:bg-[#E1E3E1] transition-colors duration-500 ease-in-out">capabilities</Link>
                <Link href="/careers" className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.6)] text-center py-6 text-2xl md:text-3xl text-[#178DA1] italic font-cambria font-bold mt-8 md:mt-0 md:ml-16 w-full hover:bg-[#E1E3E1] transition-colors duration-500 ease-in-out">work with us</Link>
            </div>
        </div>

        {/* circle animation */}
        {animation.display && <CircleAnimation animationColor={animation.color} />}
    </div>
    )
}

export default HeroSection
