export default function HowItWorksSection() {
    const steps = [
        {
            icon: 'travel_explore',
            title: '1. Select a Resort',
            description: 'Browse our hand-picked collection of 5-star properties offering day pass availability.'
        },
        {
            icon: 'verified',
            title: '2. Instant Booking',
            description: 'Secure your spot instantly with our real-time availability calendar. No phone calls needed.'
        },
        {
            icon: 'beach_access',
            title: '3. Relax in Style',
            description: 'Check in at the concierge and enjoy full access to pools, beaches, and luxury amenities.'
        }
    ]

    return (
        <section className="hidden md:block pt-4 pb-20 px-4 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111418] dark:text-white mb-4 tracking-tight">
                        Seamless Luxury
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Your curated gateway to the most exclusive amenities on the island.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-luxury-sand/50">
                                <span className="material-symbols-outlined text-luxury-gold text-3xl">{step.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}