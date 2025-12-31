'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FAQHero() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="w-full">
            <div className="relative flex flex-col items-center justify-center py-20 px-4 sm:px-10 min-h-[400px] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/50 z-10"></div>
                    <Image
                        alt="Turks and Caicos pristine beach with turquoise water"
                        className="w-full h-full object-cover object-center"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7tGRD3epHFgFUznR7PDm3IMtOyMWiTaHb4wtMoOpF9MrKpV6sMvmVBPHUDwhvaUjmJfQcKVY4nyIvrvzJMFcBytk0tyZD8KOsGf-vbrtpg7T0P9TjR9orLy3_XmjlI9AdhXDVlil9O5kOnODZtq5mL7UQu8lt5az53tabhgH-jLVY2GKmQSuVaOiGrTzxqbsFlREc8KMUemWpR3KrbljxKrInD3wylhvcm265MJ3SvFpRacSef5_1JF5R0s-ILgBXA5xgY_WCJvEb"
                        fill
                        priority
                    />
                </div>

                <div className="flex flex-col gap-4 text-center max-w-3xl z-10">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                        How can we help?
                    </h1>
                    <h2 className="text-white/90 text-base sm:text-lg font-medium leading-relaxed drop-shadow-sm max-w-xl mx-auto">
                        Everything you need to know about your luxury day pass experience, from booking details to resort etiquette.
                    </h2>
                </div>

                <div className="mt-8 w-full max-w-[560px] z-10">
                    <div className="flex w-full h-14 sm:h-16 shadow-lg rounded-lg overflow-hidden">
                        <div className="flex w-full flex-1 items-stretch bg-white dark:bg-[#1a2632] rounded-lg">
                            <div className="text-[#617589] flex items-center justify-center pl-4 sm:pl-5 bg-transparent">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#111418] dark:text-white placeholder:text-[#617589] focus:outline-0 bg-transparent h-full px-3 sm:px-4 text-sm sm:text-base font-normal leading-normal border-none ring-0 focus:ring-0"
                                placeholder="Search for answers (e.g. cancellation, dress code)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="flex items-center justify-center p-2">
                                <button className="flex min-w-[80px] sm:min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-full bg-primary hover:bg-primary/90 transition-colors text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}