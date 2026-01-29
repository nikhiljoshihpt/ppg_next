'use client'

import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { socials } from '@/utils/util';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    {text: "Work", url: "/work", },
    {text: "Capabilities", url: "/capabilities", },
    {text: "Careers", url: "/careers", },
    {text: "About us", url: "/about-us", },
    {text: "Contact", url: "/contact", },
];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname();

    const paths = ['/careers', '/about-us', '/contact']

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key == 'Escape') {
            setShowMenu(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [])

    return (
        <div className={`w-full p-8 max-sm:pb-0 md:pt-24 md:pb-16 md:px-24 ${paths.includes(pathname) ? 'bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1]' : 'bg-black'} text-white ${showMenu && 'h-screen'}`}>
            {/* Header  */}
            <div className="h-32 flex items-start justify-between">
                <Link href="/" className="w-24 md:w-32 h-24 md:h-32">
                    <img src="/assets/images/ppg-logo.svg" alt=""/>
                </Link>
                <button className="w-16 h-16 cursor-pointer" onClick={(() => setShowMenu(true))}>
                    <img src="/assets/images/menu-icon.svg" alt=""/>
                </button>
            </div>
            {/* Menu */}
            <div className={`fixed overflow-hidden flex flex-col justify-between top-0 left-0 w-full min-h-screen bg-gradient-to-r from-[#125F6C] via-[#1C7A8A] via-30% to-[#178DA1] z-20 ${!showMenu && 'hidden'}`}>
                <div className='flex-1 flex items-center justify-center px-8 py-4'>
                    <div className="relative flex flex-col space-y-8 font-cambria max-w-6xl w-full">
                        {
                            menuItems.map((menuItem) => {
                                return <Link onClick={()=>setShowMenu(false)} key={uuidv4()} href={menuItem.url} className="text-4xl sm:text-5xl italic font-semibold tracking-wide text-white hover:text-gray-100">{menuItem.text}</Link>
                            })
                        }
                        <button onClick={(() => setShowMenu(false))} className="hidden cursor-pointer w-24 h-24 text-white absolute top-0 right-0 md:-top-4 md:-right-4 sm:flex items-center justify-center">
                            <div className='w-full h-full relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="absolute top-0 right-0 size-12 md:size-16 lg:size-20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                
                <div className="bg-black text-gray-100 px-8 py-12 md:px-32 md:py-16">
                    <div className='max-w-6xl w-full flex items-center justify-between mx-auto'>
                        <div className="text-sm md:text-2xl">
                            <div className="font-bold tracking-wide">Prestige Promotion Group LLC</div>
                            <div className="font-light tracking-wider">St Louis, Missouri, United States</div>
                        </div>
                        <div className="flex space-x-2 md:space-x-4">
                            {
                                socials.map((social) => {
                                    return (
                                        <Link key={uuidv4()} href={social.url} target="_blank" className="w-8 md:w-12 h-8 md:h-12 drop-shadow-lg">
                                            <img src={`/assets/images/${social.icon}`} alt=""/>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> 

                <button onClick={(() => setShowMenu(false))} className="cursor-pointer sm:hidden w-24 h-24 text-white absolute top-6 right-6 flex items-center justify-center">
                    <div className='w-full h-full relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="absolute top-0 right-0 size-8 md:size-16 lg:size-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </button>         
            </div>
        </div>
    )
}

export default Header
