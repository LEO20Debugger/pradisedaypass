import Reveal from '@/components/Reveal'
import Link from 'next/link'
import ResortCard from '@/components/ResortCard'
import type { Experience } from '@/lib/experiences'

interface ResortCarouselProps {
    experiences: Experience[]
    getBadge?: (experience: Experience) => { label: string; className: string } | undefined
}

/** Horizontally scrolling row of resort cards, with a "View All" button on mobile */
export default function ResortCarousel({ experiences, getBadge }: ResortCarouselProps) {
    return (
        <>
            {/* Desktop Horizontal Scroll */}
            <div className="hidden md:block overflow-x-auto scrollbar-hide">
                <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                    {experiences.map((experience, index) => (
                        <Reveal key={experience.id} delay={Math.min(index, 4) * 80}>
                            <ResortCard experience={experience} variant="desktop" badge={getBadge?.(experience)} />
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                    {experiences.map((experience, index) => (
                        <Reveal key={experience.id} delay={Math.min(index, 4) * 80}>
                            <ResortCard experience={experience} variant="mobile" badge={getBadge?.(experience)} />
                        </Reveal>
                    ))}
                </div>
            </div>

            <div className="md:hidden mt-8 flex justify-center">
                <Link
                    href="/experiences"
                    className="text-sm font-bold text-primary border border-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors w-full text-center"
                >
                    View All Resorts
                </Link>
            </div>
        </>
    )
}
