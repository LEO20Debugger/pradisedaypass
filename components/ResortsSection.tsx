import Link from 'next/link'
import ResortCarousel from '@/components/ResortCarousel'
import { featuredExperienceIds, getExperiences } from '@/lib/experiences'

const TRENDING_IDS = [2]

export default function ResortsSection() {
    const resorts = getExperiences(featuredExperienceIds)

    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">Featured Resorts</h2>
                        <p className="text-gray-500 mt-2">Discover our most sought-after day pass experiences.</p>
                    </div>
                    <Link className="hidden md:flex items-center text-primary font-bold hover:text-blue-700 transition-colors" href="/experiences">
                        View all resorts
                        <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </Link>
                </div>

                <ResortCarousel
                    experiences={resorts}
                    getBadge={(resort) =>
                        TRENDING_IDS.includes(resort.id)
                            ? { label: 'Trending', className: 'bg-luxury-gold text-white' }
                            : undefined
                    }
                />
            </div>
        </section>
    )
}
