import Image from 'next/image'

export default function LocationsSection() {
    const locations = [
        {
            name: 'Grace Bay Beach',
            description: 'World\'s #1 beach with luxury resorts and pristine white sand.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6e5COp2Ju_9T3hX43Ieteboi7CNQusQgWH8FEGVv3aUmw7h3xU1LCH8RicZuOdGmFfX4soJRJJdS3j0R4IYXgGgPCLijX6gdSTt9BEdi2uX2_vUMTAvr4GY4AE2MryftBT89tbNOsQEJRYGmp-N7xx-4kRRhD7yknSrchhg-zs2rNcMUvXPxjliNXoYCUobbIaxVx8tugC2kBwNCFBWGtAuM3cpwRXYycO3CRyomnnV23flEx9Mq3f4NcpKuv-hX2l1itp6TipCz4'
        },
        {
            name: 'Long Bay Beach',
            description: 'Secluded luxury resort area with world-class kitesurfing.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
        },
        {
            name: 'Lower Bight Beach',
            description: 'Premium resort destination with exclusive beachfront properties.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPhn2TmOPFNq6ceXNRXtwsfn56TeW2CwMACrNbtEW2Q409M_6ckRefgk0rrLrEz6SU13wePNYYWLQlEafvJh3GHZmabO03eFSDqO6KY7f3O9yLg4zsYNJK7Hty2V_H15X_T4nufb2hTiHXdaXDIVBN1eUUqsXQcAPKPGVdKpl3e9tPipJwpzOVzl--jmAq_0DTxZ5Pn-CW-JVSjFs3MiprvUBCXSFdkYq_O1V-f5pgKtTz2Z45RIxaqBpz1Rvs6HF1mbUir-59Lew6'
        },
        {
            name: 'Northwest Point',
            description: 'Ultra-luxury resort enclave with private beaches and villas.',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
        },
        {
            name: 'Turtle Cove Marina',
            description: 'Upscale marina resort area with waterfront dining and luxury yachts.',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
        },
        {
            name: 'Leeward Beach',
            description: 'Exclusive resort corridor with high-end accommodations.',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
        },
        {
            name: 'Cockburn Harbour',
            description: 'Historic resort town with boutique hotels and cultural attractions.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4rstIekle1oSgJQg4FkMQAxhNE_AexKbNfitX7ENPoIYH_OKtU3jGmMG6Ncv7ITYXVg1DClWC532Qer5LpPRVMM2-4FjrVWkAfv7YmxlwNHYBeTndKVZwXHDtz6dH4V6eIaQWV5EOJg5_Z7291yloDJW2RafIA3S25dWBtf9K5ud4GDXDi483E4xozAgXyqPyqWcRzHHwhd8t62LmSy0xCDjYCfgR2Z7y3ZCBEOjI4XyVbguLbw3tG8gSFf-DJ4iNdnxykp7y10Tz'
        }
    ]

    return (
        <section className="py-24 px-4 bg-background-light dark:bg-background-dark">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111418] dark:text-white tracking-tight mb-2">
                            Popular Locations
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Discover the premier resort destinations in Turks and Caicos.
                        </p>
                    </div>
                    <a className="group flex items-center gap-2 text-primary font-bold hover:text-blue-700 transition-colors" href="/experiences">
                        <span>View destination guide</span>
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                </div>

                {/* Desktop Horizontal Scroll */}
                <div className="hidden md:block overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                        {locations.map((location, index) => (
                            <a key={index} className="group relative h-[320px] w-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 isolate flex-shrink-0" href="/experiences">
                                <Image
                                    alt={location.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={location.image}
                                    fill
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-6 z-10">
                                    <h3 className="text-xl font-bold text-white mb-2">{location.name}</h3>
                                    <p className="text-white/80 text-sm font-medium leading-relaxed">
                                        {location.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                        {locations.map((location, index) => (
                            <a key={index} className="group relative h-[280px] w-[240px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 isolate flex-shrink-0" href="/experiences">
                                <Image
                                    alt={location.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={location.image}
                                    fill
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-4 z-10">
                                    <h3 className="text-lg font-bold text-white mb-1">{location.name}</h3>
                                    <p className="text-white/80 text-xs font-medium leading-relaxed">
                                        {location.description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}