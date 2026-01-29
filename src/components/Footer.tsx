import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { socials } from '../utils/util'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-black text-gray-100 flex items-center justify-between px-8 py-12 md:px-32 md:py-16">
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
  )
}

export default Footer