import Image from 'next/image'
import SearchBar from '@/components/SearchBar'

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex flex-col">
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Readability scrims: darker behind the headline and copy, clear again over the beach */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_40%,rgba(0,0,0,0.28),transparent)] z-10"></div>
                <Image
                    alt="Luxury Resort Pool"
                    className="w-full h-full object-cover object-center animate-slow-zoom"
                    src="/images/hero-background-image.jpg"
                    fill
                    priority
                />
                {/* Soft fade into the Featured Resorts section below (bg-white / dark:bg-gray-900) */}
                <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-white/90 dark:from-gray-900/90 to-transparent z-10"></div>
            </div>

            {/* Hero Content and Search - Combined Section */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-6 sm:py-8 lg:py-12 text-center max-w-[960px] mx-auto">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tight mb-3 sm:mb-4 lg:mb-6 [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] animate-fade-up">
                    Unlock Paradise<br />
                    <span className="font-bold">For The Day</span>
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-6 sm:mb-8 lg:mb-10 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] text-balance px-4 animate-fade-up [animation-delay:150ms]">
                    Experience world-class luxury at the finest resorts without the overnight stay. Your exclusive pass to relaxation awaits.
                </p>

                <div className="w-full max-w-4xl">
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}
