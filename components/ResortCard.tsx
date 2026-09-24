import Image from 'next/image'
import Link from 'next/link'
import type { Experience } from '@/lib/experiences'

interface ResortCardProps {
    experience: Experience
    variant: 'desktop' | 'mobile'
    /** Optional pill shown top-left over the image, e.g. "New" or "Trending" */
    badge?: { label: string; className: string }
}

const styles = {
    desktop: {
        card: 'rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-[320px]',
        image: 'h-48',
        pill: 'px-3',
        pricePos: 'top-4 right-4',
        badgePos: 'top-4 left-4',
        body: 'p-5',
        rating: 'text-sm',
        location: 'text-sm mb-4',
        locationIcon: 'text-sm',
        highlights: 'gap-2',
        highlightCount: 3,
        footer: 'pt-4 border-t border-gray-100 dark:border-gray-800',
        button: 'py-2.5',
    },
    mobile: {
        card: 'rounded-xl w-[280px]',
        image: 'h-40',
        pill: 'px-2',
        pricePos: 'top-3 right-3',
        badgePos: 'top-3 left-3',
        body: 'p-4',
        rating: 'text-xs',
        location: 'text-xs mb-3',
        locationIcon: 'text-xs',
        highlights: 'gap-1',
        highlightCount: 2,
        footer: '',
        button: 'py-2 text-sm',
    },
}

export default function ResortCard({ experience, variant, badge }: ResortCardProps) {
    const s = styles[variant]

    return (
        <div className={`group flex flex-col bg-background-light dark:bg-background-dark overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm flex-shrink-0 ${s.card}`}>
            <div className={`relative overflow-hidden ${s.image}`}>
                <Image
                    alt={experience.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={experience.image}
                    fill
                    sizes={variant === 'desktop' ? '320px' : '280px'}
                />
                <div className={`absolute ${s.pricePos} bg-white/90 backdrop-blur-sm py-1 rounded-full text-xs font-bold shadow-sm ${s.pill}`}>
                    From ${experience.price}
                </div>
                {badge && (
                    <div className={`absolute ${s.badgePos} py-1 rounded-full text-xs font-bold shadow-sm ${s.pill} ${badge.className}`}>
                        {badge.label}
                    </div>
                )}
            </div>

            <div className={`flex flex-col flex-1 ${s.body}`}>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-[#111418] dark:text-white">{experience.name}</h3>
                    <div className="flex items-center gap-1 text-luxury-gold">
                        <span className="material-symbols-outlined text-sm fill-current">star</span>
                        <span className={`font-bold text-gray-700 dark:text-gray-300 ${s.rating}`}>{experience.rating}</span>
                    </div>
                </div>

                <p className={`text-gray-500 flex items-center gap-1 ${s.location}`}>
                    <span className={`material-symbols-outlined ${s.locationIcon}`}>location_on</span>
                    {experience.location}
                </p>

                <div className={`flex mb-4 flex-wrap ${s.highlights}`}>
                    {experience.highlights.slice(0, s.highlightCount).map((highlight) => (
                        <span key={highlight} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                            {highlight}
                        </span>
                    ))}
                </div>

                <div className={`mt-auto ${s.footer}`}>
                    <Link
                        href={`/experiences/${experience.id}`}
                        className={`block w-full rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center ${s.button}`}
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
