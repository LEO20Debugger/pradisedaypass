import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-[650px] flex flex-col justify-center items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent z-10"></div>
                <Image
                    alt="Luxury Resort Pool"
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1733253870586-e70849d1b752?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fill
                    priority
                />
            </div>

            <div className="relative z-20 layout-container flex flex-col items-center justify-center px-4 py-8 sm:py-12 text-center max-w-[960px] mt-6 sm:mt-10">
                <span className="text-luxury-gold text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-3 sm:mb-4 drop-shadow-md">
                    Turks & Caicos Collection
                </span>
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight mb-4 sm:mb-6 drop-shadow-lg">
                    Unlock Paradise<br />
                    <span className="font-bold">For The Day</span>
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8 lg:mb-10 drop-shadow-md text-balance px-4">
                    Experience world-class luxury at the finest resorts without the overnight stay. Your exclusive pass to relaxation awaits.
                </p>

                <div className="w-full max-w-4xl glass-panel p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-glass">
                    {/* Mobile Layout */}
                    <div className="flex flex-col gap-2 sm:hidden">
                        <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                            <span className="material-symbols-outlined text-gray-400 mr-3">location_on</span>
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Destination</label>
                                <input
                                    className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 placeholder-gray-400 text-gray-900 dark:text-white"
                                    placeholder="Where do you want to go?"
                                    type="text"
                                    defaultValue="Providenciales, TCI"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-gray-400 mr-3 flex-shrink-0">calendar_month</span>
                                <div className="flex flex-col items-start w-full">
                                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Date</label>
                                    <input
                                        className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 text-gray-900 dark:text-white [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
                                        type="date"
                                        placeholder="mm/dd/yyyy"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-gray-400 mr-3">group</span>
                                <div className="flex flex-col items-start w-full">
                                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Guests</label>
                                    <select className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 text-gray-900 dark:text-white cursor-pointer">
                                        <option>2 Guests</option>
                                        <option>1 Guest</option>
                                        <option>3 Guests</option>
                                        <option>4+ Guests</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <a
                            href="/experiences"
                            className="bg-primary hover:bg-blue-600 text-white font-bold rounded-lg px-6 py-3 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">search</span>
                            <span>Search</span>
                        </a>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:flex flex-col md:flex-row gap-2">
                        <div className="flex-1 flex items-center bg-white dark:bg-gray-800 rounded-xl px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                            <span className="material-symbols-outlined text-gray-400 mr-3">location_on</span>
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Destination</label>
                                <input
                                    className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 placeholder-gray-400 text-gray-900 dark:text-white"
                                    placeholder="Where do you want to go?"
                                    type="text"
                                    defaultValue="Providenciales, TCI"
                                />
                            </div>
                        </div>

                        <div className="flex-1 flex items-center bg-white dark:bg-gray-800 rounded-xl px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                            <span className="material-symbols-outlined text-gray-400 mr-3 flex-shrink-0">calendar_month</span>
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Date</label>
                                <input
                                    className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 text-gray-900 dark:text-white [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
                                    type="date"
                                    placeholder="mm/dd/yyyy"
                                />
                            </div>
                        </div>

                        <div className="flex-[0.5] flex items-center bg-white dark:bg-gray-800 rounded-xl px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                            <span className="material-symbols-outlined text-gray-400 mr-3">group</span>
                            <div className="flex flex-col items-start w-full">
                                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Guests</label>
                                <select className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 text-gray-900 dark:text-white cursor-pointer">
                                    <option>2 Guests</option>
                                    <option>1 Guest</option>
                                    <option>3 Guests</option>
                                    <option>4+ Guests</option>
                                </select>
                            </div>
                        </div>

                        <a
                            href="/experiences"
                            className="bg-primary hover:bg-blue-600 text-white font-bold rounded-xl px-6 sm:px-8 py-3 md:py-0 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined">search</span>
                            <span>Search</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}