'use client'

import Image from 'next/image'

interface HowItWorksHeroProps {
    activeTab: string
    setActiveTab: (tab: string) => void
}

export default function HowItWorksHero({ activeTab, setActiveTab }: HowItWorksHeroProps) {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 z-10"></div>
                <Image
                    alt="Turquoise ocean water and white sand beach in Turks and Caicos"
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fill
                    priority
                />
            </div>

            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center gap-6 max-w-4xl">
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                    Simple & Seamless
                </span>
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
                    How It Works
                </h1>
                <p className="text-white text-lg md:text-xl font-medium max-w-2xl text-white/90">
                    Whether you're seeking a day of luxury or looking to maximize your resort's potential, our platform bridges the gap effortlessly.
                </p>

                <div className="mt-8 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 flex relative">
                    <button
                        className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 w-36 ${activeTab === 'guests'
                            ? 'text-[#101922] bg-white shadow-sm'
                            : 'text-white hover:bg-white/10'
                            }`}
                        onClick={() => setActiveTab('guests')}
                    >
                        For Guests
                    </button>
                    <button
                        className={`relative z-10 px-6 md:px-10 py-2.5 rounded-full text-sm font-bold transition-all duration-300 w-36 md:w-44 ${activeTab === 'partners'
                            ? 'text-[#101922] bg-white shadow-sm'
                            : 'text-white hover:bg-white/10'
                            }`}
                        onClick={() => setActiveTab('partners')}
                    >
                        For Partners
                    </button>
                </div>
            </div>
        </section>
    )
}