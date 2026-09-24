import Link from 'next/link'
import ResortCarousel from '@/components/ResortCarousel'
import { newArrivalIds, getExperiences } from '@/lib/experiences'

const NEW_BADGE = { label: 'New', className: 'bg-gradient-to-r from-coral-400 to-coral-500 text-white' }

export default function NewArrivalsSection() {
    const newArrivals = getExperiences(newArrivalIds)

    return (
        <section className="pt-4 pb-20 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">New Arrivals</h2>
                        <p className="text-gray-500 mt-2">Discover our newest resort partners in Turks and Caicos.</p>
                    </div>
                    <Link className="hidden md:flex items-center text-coral-500 font-bold hover:text-coral-600 transition-colors" href="/experiences">
                        View all resorts
                        <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </Link>
                </div>

                <ResortCarousel experiences={newArrivals} getBadge={() => NEW_BADGE} />
            </div>
        </section>
    )
}
