'use client'

import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/SearchBar'

interface ExperiencesHeroProps {
    onSearch?: (query: string) => void
    initialSearchQuery?: string
}

export default function ExperiencesHero({ onSearch, initialSearchQuery }: ExperiencesHeroProps) {
    const searchParams = useSearchParams()

    // The search query from the parent wins over the URL so clearing the search works
    const initialDestination = initialSearchQuery ?? searchParams.get('destination') ?? ''
    const initialDate = searchParams.get('date') ?? ''

    return (
        <div className="relative w-full bg-white dark:bg-[#101922] group/design-root overflow-visible">
            <div className="@container">
                <div
                    className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 py-12 sm:p-8 sm:py-20 lg:py-24 overflow-visible"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("/images/experience-hero-image.jpg")`
                    }}
                >
                    <div className="flex flex-col gap-2 text-center max-w-[800px] px-4 animate-fade-up">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                            Exclusive Resort Day Passes
                        </h1>
                        <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-normal drop-shadow-sm opacity-90">
                            Unlock access to the most pristine pools, private beaches, and luxury amenities in Turks and Caicos.
                        </h2>
                    </div>

                    {/* Advanced Search Bar - Same as Homepage */}
                    <div className="w-full max-w-4xl mt-4 sm:mt-6 px-4 relative z-[60]">
                        <SearchBar
                            navigation="replace"
                            initialDestination={initialDestination}
                            initialDate={initialDate}
                            onSearch={onSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
