import Image from 'next/image'

export default function ResortsSection() {
    const resorts = [
        {
            id: 5,
            name: 'The Shore Club',
            location: 'Long Bay Beach, Providenciales',
            rating: 4.9,
            price: 'From $150',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPhn2TmOPFNq6ceXNRXtwsfn56TeW2CwMACrNbtEW2Q409M_6ckRefgk0rrLrEz6SU13wePNYYWLQlEafvJh3GHZmabO03eFSDqO6KY7f3O9yLg4zsYNJK7Hty2V_H15X_T4nufb2hTiHXdaXDIVBN1eUUqsXQcAPKPGVdKpl3e9tPipJwpzOVzl--jmAq_0DTxZ5Pn-CW-JVSjFs3MiprvUBCXSFdkYq_O1V-f5pgKtTz2Z45RIxaqBpz1Rvs6HF1mbUir-59Lew6',
            amenities: ['Pool Access', 'Towel Service', 'Gym']
        },

        {
            id: 2,
            name: 'Wymara Resort & Villas',
            location: 'Grace Bay, Lower Bight',
            rating: 4.8,
            price: 'From $180',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUupZELwgu8iGZmVUt11HmHGQSBh_foNhyqIDuPc2Nm6tC72ludcQd_SukGcUGt2CO_l0uTnIv4xRv_MOPhxFCmNDVqPMq4ujyL8PUyXpkgVmG6WjnrIMbBCiQ3AWbqtl8snK1bn1yfeP3nFyWD3m4FxaiernnpdyQ-r1njrL-2do0CKVDE3xggVTKki1MDudq8SSJ89aeZbrsT3LSAWq9n6cfRLIGvBYYy5R0XCKOL60NU6KGoWBGx6hZHzD0qZBR9KCFRFJ15tQe',
            amenities: ['Cabana', 'Dining Credit'],
            trending: true
        },
        {
            id: 7,
            name: 'The Ritz-Carlton',
            location: 'Grace Bay, Providenciales',
            rating: 4.9,
            price: 'From $280',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
            amenities: ['Luxury Spa', 'Fine Dining', 'Butler Service']
        },
        {
            id: 8,
            name: 'Beaches Resort',
            location: 'Lower Bight, Providenciales',
            rating: 4.7,
            price: 'From $195',
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
            amenities: ['Water Park', 'Kids Club', 'Multiple Pools']
        },

        {
            id: 9,
            name: 'Conch Bar Beach Resort',
            location: 'Conch Bar, Middle Caicos',
            rating: 4.6,
            price: 'From $125',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
            amenities: ['Eco-Tours', 'Fishing', 'Kayaking']
        }
    ]

    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">Featured Resorts</h2>
                        <p className="text-gray-500 mt-2">Discover our most sought-after day pass experiences.</p>
                    </div>
                    <a className="hidden md:flex items-center text-primary font-bold hover:text-blue-700 transition-colors" href="/experiences">
                        View all resorts
                        <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </a>
                </div>

                {/* Desktop Horizontal Scroll */}
                <div className="hidden md:block overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                        {resorts.map((resort, index) => (
                            <div key={index} className="group flex flex-col bg-background-light dark:bg-background-dark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 w-[320px] flex-shrink-0">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        alt={resort.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        src={resort.image}
                                        fill
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                        {resort.price}
                                    </div>
                                    {resort.trending && (
                                        <div className="absolute top-4 left-4 bg-luxury-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                            Trending
                                        </div>
                                    )}
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">{resort.name}</h3>
                                        <div className="flex items-center gap-1 text-luxury-gold">
                                            <span className="material-symbols-outlined text-sm fill-current">star</span>
                                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{resort.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        {resort.location}
                                    </p>

                                    <div className="flex gap-2 mb-4 flex-wrap">
                                        {resort.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                                            <span key={amenityIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                                        <a
                                            href={`/experiences/${resort.id}`}
                                            className="block w-full py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Horizontal Scroll */}
                <div className="md:hidden overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                        {resorts.map((resort, index) => (
                            <div key={index} className="group flex flex-col bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm w-[280px] flex-shrink-0">
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        alt={resort.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        src={resort.image}
                                        fill
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold shadow-sm">
                                        {resort.price}
                                    </div>
                                    {resort.trending && (
                                        <div className="absolute top-3 left-3 bg-luxury-gold text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
                                            Trending
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">{resort.name}</h3>
                                        <div className="flex items-center gap-1 text-luxury-gold">
                                            <span className="material-symbols-outlined text-sm fill-current">star</span>
                                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{resort.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-xs mb-3 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">location_on</span>
                                        {resort.location}
                                    </p>

                                    <div className="flex gap-1 mb-4 flex-wrap">
                                        {resort.amenities.slice(0, 2).map((amenity, amenityIndex) => (
                                            <span key={amenityIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <a
                                            href={`/experiences/${resort.id}`}
                                            className="block w-full py-2 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center text-sm"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:hidden mt-8 flex justify-center">
                    <a
                        href="/experiences"
                        className="text-sm font-bold text-primary border border-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors w-full text-center"
                    >
                        View All Resorts
                    </a>
                </div>
            </div>
        </section>
    )
}