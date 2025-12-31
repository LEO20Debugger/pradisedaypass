import Image from 'next/image'

export default function AboutHero() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 z-10"></div>
                <Image
                    alt="Luxury turquoise caribbean ocean view from a resort balcony"
                    className="w-full h-full object-cover object-center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcl7i9gT9UwPB1-Gga9Vlpbiyl_6gdUidg301u61VvBO_CVtNrOvvYwfRoTJv78tRwJQZT8oDbCFwVcW3PrRI_0lw0inXJziHuotuykzmSJqnIjTzlU27lVdcXM_qMR3jqyALi6dbrjl2-DkOUz62pbgnu2i8Y16qhPy5M6OjE-5LfjnzQ_-1VmnkDhwq0bZQmctAsr-2ubO_FSbvYLG4MNBM9sUGRNm7pf5qy7GojfWm0QIojDlMporVsd-NB1KJCvkPafSeAhxY"
                    fill
                    priority
                />
            </div>

            <div className="flex flex-col gap-6 text-center max-w-[800px] px-4 z-10">
                <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                    Born in the Islands,<br />Built for Luxury
                </h1>
                <h2 className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                    Discover the story behind the premier day pass booking platform in Turks and Caicos. We bridge the gap between discerning travelers and exclusive amenities.
                </h2>
                <div className="flex justify-center pt-4">
                    <button className="flex h-12 px-8 cursor-pointer items-center justify-center rounded-full bg-white text-primary text-base font-bold transition-transform hover:scale-105 shadow-xl">
                        <span>Read Our Story</span>
                    </button>
                </div>
            </div>
        </div>
    )
}