import Image from 'next/image'

export default function GuestProcessSection() {
    const steps = [
        {
            icon: 'travel_explore',
            step: 'STEP 1',
            title: 'Discover',
            description: 'Browse our curated collection of luxury resort day passes. Filter by location, amenities, or price to find your perfect match.'
        },
        {
            icon: 'calendar_add_on',
            step: 'STEP 2',
            title: 'Reserve',
            description: 'Select your date and number of guests. Customize your experience with add-ons like cabanas or spa treatments.'
        },
        {
            icon: 'beach_access',
            step: 'STEP 3',
            title: 'Relax',
            description: 'Receive your digital pass instantly. Present it at the front desk upon arrival and enjoy world-class facilities.'
        }
    ]

    const benefits = [
        'Instant confirmation',
        'Secure payments via Stripe',
        'Verified resort amenities'
    ]

    return (
        <section className="py-20 px-4 md:px-10 lg:px-40 bg-white dark:bg-background-dark">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center mb-20">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111418] dark:text-white">
                            Your Day in Paradise, <span className="text-primary">Simplified</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Forget the hassle of phone calls and uncertain availability. We've streamlined the process so you can focus on the sunscreen and cocktails.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-gray-700 dark:text-gray-200 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3 z-0"></div>
                        <Image
                            alt="Woman relaxing on a lounge chair by a pool overlooking the ocean"
                            className="relative z-10 rounded-xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwMG-aLtN0Vg383vupjMo1EjviWSE1UDFedOzjqIUEBpeZ5KYYC6K-RtF2g22Z_aTAnWHuK86id6nNLiMXvVGwzZE8ZQjtiE7DXln-ZLBLLlTA5BzBRRJVrCxwxFkhSeKe6xEC68_MJ0Zy33FGuPiFHZmmKjWJ_H3m04PMknh9dUvfMSr_L34FXSLyMt4QHbKOZm8kE5dzRnLMgbdIogXksSfTpFA0lFyRVCChp_o9z9JoPXWowb_bjMAoXJP72fFdrxizr-HNQAd1"
                            width={600}
                            height={450}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white dark:bg-[#1a2632] border border-gray-100 dark:border-gray-700 shadow-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-primary text-4xl">{step.icon}</span>
                            </div>
                            <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded mb-3">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <button className="bg-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                        Start Browsing Passes
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    )
}