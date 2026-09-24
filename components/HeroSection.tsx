import Image from 'next/image'
import SearchBar from '@/components/SearchBar'

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex flex-col">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent z-10"></div>
                <Image
                    alt="Luxury Resort Pool"
                    className="w-full h-full object-cover object-center animate-slow-zoom"
                    src="/images/hero-background-image.jpg"
                    fill
                    priority
                />
            </div>

            {/* Hero Content and Search - Combined Section */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-6 sm:py-8 lg:py-12 text-center max-w-[960px] mx-auto">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg animate-fade-up">
                    Unlock Paradise<br />
                    <span className="font-bold">For The Day</span>
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8 lg:mb-10 drop-shadow-md text-balance px-4 animate-fade-up [animation-delay:150ms]">
                    Experience world-class luxury at the finest resorts without the overnight stay. Your exclusive pass to relaxation awaits.
                </p>

                <div className="w-full max-w-4xl">
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}
