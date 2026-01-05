import Image from 'next/image'

export default function NewArrivalsSection() {
    const newArrivals = [
        {
            id: 1,
            name: 'The Palms Turks & Caicos',
            location: 'Grace Bay, Providenciales',
            rating: 4.8,
            price: 'From $250',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuzCjvoygQ4AfY2mZH-vEWMJqB-QjSTKTNvnZUtmHEPtI4XEe49DOJbXY7BiZKchlEV9fefmsU0SxsBTkwdl9K9gexIrOncqWS-LW5n2_w3p6SAZ5kuZwgglt9AAhJ85gqf9uxUoYUd2p2fweK5Vode4LXAQ3Yeec1b3sZCyBdEpImnfZfW_VykUI8D5_Pt668FATuePF7zE4rCbflKCwl96EQmxSr-i6Pr6iyNk6x7Ucqh5Fyl2AY58tLsLMAPuLMFWXPfYCFmAwI',
            amenities: ['Spa Access', 'Pool & Beach', 'Fine Dining'],
            badge: 'New'
        },
        {
            id: 3,
            name: 'Seven Stars Resort',
            location: 'Grace Bay, Providenciales',
            rating: 4.9,
            price: 'From $300',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJrT11p0gc86-RSLkOK04C7dGa4nhd0ZP5gFggOycspWlrON4kuvEJabnZj__HhqY7gdRT-Nx3TtzBlvbVP5BPUKaZsRZeLQhnU8vzQZcblVR3zgkcfIDRLAY2gsGjurydHWKk-Qendn5Zz1IGM4ZApR8dQ0c-n1mVu4UapFB_p14o__F87CYqLVXKOYD3jB9QVlr6UXE1t81_ED436lizDZ-yvPXO1dpH-3BvjENac5fsBsbmLc7xOrip_xy0N7pdXbqD0uvtVYff',
            amenities: ['All-Inclusive', 'Water Sports', 'Golf Access'],
            badge: 'New'
        },
        {
            id: 9,
            name: 'Conch Bar Beach Resort',
            location: 'Conch Bar, Middle Caicos',
            rating: 4.5,
            price: 'From $125',
            image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
            amenities: ['Eco-Tours', 'Fishing', 'Nature Walks'],
            badge: 'New'
        }
    ]

    return (
        <section className="pt-4 pb-20 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#111418] dark:text-white tracking-tight">New Arrivals</h2>
                        <p className="text-gray-500 mt-2">Discover our newest resort partners in Turks and Caicos.</p>
                    </div>
                    <a className="hidden md:flex items-center text-coral-500 font-bold hover:text-coral-600 transition-colors" href="/experiences">
                        View all resorts
                        <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                    </a>
                </div>

                {/* Desktop Horizontal Scroll */}
                <div className="hidden md:block overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                        {newArrivals.map((resort, index) => (
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
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-coral-400 to-coral-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                        {resort.badge}
                                    </div>
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
                        {newArrivals.map((resort, index) => (
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
                                    <div className="absolute top-3 left-3 bg-gradient-to-r from-coral-400 to-coral-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
                                        {resort.badge}
                                    </div>
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