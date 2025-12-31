export default function AboutCTA() {
    return (
        <div className="w-full bg-[#101922] py-20 px-4">
            <div className="max-w-[960px] mx-auto text-center flex flex-col gap-8 items-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                    Your Day in Paradise Awaits
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Don't let exclusive gates stop you. Experience the best pools, beaches, and amenities Turks and Caicos has to offer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-blue-600 transition-colors">
                        Explore Destinations
                    </button>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-white/20 text-white text-base font-bold hover:bg-white/10 transition-colors">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    )
}