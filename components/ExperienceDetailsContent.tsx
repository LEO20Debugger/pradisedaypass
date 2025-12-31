'use client'

import { useState } from 'react'

interface ExperienceDetailsContentProps {
    experienceId: string
}

export default function ExperienceDetailsContent({ experienceId }: ExperienceDetailsContentProps) {
    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [selectedDate, setSelectedDate] = useState('2023-10-24')

    // Mock data - in real app this would come from API based on experienceId
    const experience = {
        id: experienceId,
        name: "The Shore Club",
        location: "Long Bay Beach, Providenciales, Turks and Caicos",
        rating: 4.9,
        reviewCount: 124,
        pricePerAdult: 150,
        pricePerChild: 75,
        serviceFee: 45,
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB4YywlBWVdOS-lwyrc_rh1-9sOKq937DE1xyCw-_knmCG9Jm6Ew_Dx5UHOn6TKbwg26kL76PuUR-Pw1U8LShPVOJ9HRt6HFmeAdboU-ngInSoEmUK1QuiqhKkqAMUlGCwKpoO8Pp-4oCKimP4dipdCp8iOf7xQXImqLXszrDk0M5rK6cAFuYPwKlZwqzbkOnEM8kKI8jFqa0AZX_GG5XhumxClWK4DC8ENYNx5U7sJhqSsoHEfok48-_GsVjPyf4NjVxa13MMpLCSY",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCcnh8n_V2knx8x5ZZWRIyDgL2drtIo7Ep8T--QGrTuWtxIwzAD7bDdn12ew0RVS-nR6Nki0p6rXiMtaKyrU5_VhCTLg9jLrk-JybZPfJ1BZ5uboCr-U_N47PutQ8y3V0ULAU5J4ugACBxN06oyueTNmjA5TsIRowUeu6pU1tYw0dVrXifY2WQSWw79BNnf08RYyxntspQYwirH8HhMSi4UAVx_QalNhkS0QgnFeYPX2Zccj9Pw2kLpOafwSG867XR3V2oDCilamzQF",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuClz4E_YAnbiXir-cwF6PBUsn604LbCq_bH7NnwqVHPMnK_qm8ND6xbw-dynBTvEEVi1P1U4W-RjZGSf_qamb0Db81JvqXrwdXeCgvHdbv1fvTU7fHOHC3tuZLmbJwA6bzZ5vvP1Ht5tPpIG_CIG549J5BHHbg-gcDH51y4mSEvWxEjKLs6LV8bbZS7d_zC47qSMztpdnC8T4jirYbb74c_M5SVczWAmkK8JAkiE1CN_vFfLJ2rFCrebZd_DCkHaU1P7rbssTrhfGQM",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAv6D6XYbMqAsDEhpONMuwoe9KeDMtLcBXrNj7iwbTiR8bR9T5dBvzj-7vaYQf6TgIwZAbXF5dSaOFMlfZoeZ1pCe7RQ6w5ICa5sBfBb2COvndQgv95MHmybTHeZeavBSzY_gB6OOROvKm7xlXhpqSO_Wt_tisfo73Jq6d4jXhu2YLzUvLM-d2yDX6DtdiRBMqMvF2wwUULo8ThrsT5upl9Y4Z5DELnBQwaa9hNXpn8jZ97PP1ALBFOf1u9St_2SXBxN8yfE1MIAKXH",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDLXkYyfatM25bL94mAqV_SblAV7BfZDnn6HLLLasLzw6kljEerb-90MD87vcGkC-sXF3Gg0nOUKNBNgXPmzcFt_DK-SqujC0YwkqUobrG2d-2SlGafmyLBt8Nq5MJhxkmG7rL3bRgxgJlQ_uiTVq-dAqhQ4GrExpXoVzehwSvfCoQmQTTfTCuNe6RO-wrQcJzOns3xnbb4io5Hc9AE1fotPhY-zIe6zZRr1dxrmF_y4XSlCn3BHjuiI_CTfcM2B2zLFYvco5Usnmrf"
        ],
        amenities: [
            { icon: "pool", title: "Access to 4 Pools", description: "Including adults-only and family pools" },
            { icon: "restaurant", title: "$50 Food & Beverage Credit", description: "Valid at Sea Grapes or The Courtyard" },
            { icon: "wifi", title: "High-Speed WiFi", description: "Available throughout the property" },
            { icon: "beach_access", title: "Beach Chair & Towel Service", description: "Reserved seating on Long Bay Beach" },
            { icon: "local_parking", title: "Complimentary Valet Parking", description: "Secure on-site parking" },
            { icon: "fitness_center", title: "Fitness Center Access", description: "State-of-the-art equipment" }
        ]
    }

    const totalAdults = adults * experience.pricePerAdult
    const totalChildren = children * experience.pricePerChild
    const subtotal = totalAdults + totalChildren
    const total = subtotal + experience.serviceFee

    return (
        <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 py-4 sm:py-6 lg:px-10">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 py-2 items-center text-sm">
                <a className="text-gray-500 hover:text-primary hover:underline" href="/experiences">
                    Turks and Caicos
                </a>
                <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
                <a className="text-gray-500 hover:text-primary hover:underline" href="/experiences">
                    Providenciales
                </a>
                <span className="material-symbols-outlined text-[16px] text-gray-400">chevron_right</span>
                <span className="text-[#111418] dark:text-white font-medium">{experience.name}</span>
            </div>

            {/* Page Heading & Quick Stats */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 py-4 sm:py-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#111418] dark:text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                        {experience.name}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 text-sm lg:text-base">
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[20px]">location_on</span>
                            <p className="text-xs sm:text-sm">{experience.location}</p>
                        </div>
                        <span className="hidden sm:inline mx-1 text-gray-300">•</span>
                        <a className="flex items-center gap-1 hover:underline text-[#111418] dark:text-white font-medium" href="#reviews">
                            <span className="material-symbols-outlined text-yellow-400 text-[18px]">star</span>
                            {experience.rating} ({experience.reviewCount} reviews)
                        </a>
                    </div>
                </div>
                <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">ios_share</span>
                        <span className="hidden sm:inline">Share</span>
                    </button>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">favorite</span>
                        <span className="hidden sm:inline">Save</span>
                    </button>
                </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 mb-6 sm:mb-10 h-[250px] sm:h-[400px] md:h-[500px] rounded-lg sm:rounded-2xl overflow-hidden relative group">
                {/* Main Large Image */}
                <div className="col-span-2 row-span-2 relative overflow-hidden">
                    <div
                        className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url("${experience.images[0]}")` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Secondary Images - Show fewer on mobile */}
                {experience.images.slice(1, 3).map((image, index) => (
                    <div key={index} className="col-span-1 row-span-1 relative overflow-hidden">
                        <div
                            className="w-full h-full bg-center bg-cover hover:opacity-90 transition-opacity"
                            style={{ backgroundImage: `url("${image}")` }}
                        ></div>
                    </div>
                ))}

                {/* Additional images for larger screens */}
                {experience.images.slice(3).map((image, index) => (
                    <div key={index + 3} className="hidden lg:block col-span-1 row-span-1 relative overflow-hidden">
                        <div
                            className="w-full h-full bg-center bg-cover hover:opacity-90 transition-opacity"
                            style={{ backgroundImage: `url("${image}")` }}
                        ></div>
                    </div>
                ))}

                <button className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white dark:bg-gray-900 text-[#111418] dark:text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">grid_view</span>
                    <span className="hidden sm:inline">Show all photos</span>
                    <span className="sm:hidden">Photos</span>
                </button>
            </div>

            {/* Layout Grid: Content + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 relative">
                {/* LEFT COLUMN: Content */}
                <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    {/* About Section */}
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#111418] dark:text-white">About the Day Pass</h3>
                        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                            <p className="mb-3 sm:mb-4">
                                Escape to paradise at The Shore Club, the first and only resort on Long Bay Beach. Immerse yourself in the most sought-after stretch of coastline in Providenciales. Your day pass grants you exclusive access to our four distinct pool environments, pristine white sands, and world-class amenities.
                            </p>
                            <p className="mb-3 sm:mb-4">
                                Whether you're looking to lounge by the adults-only pool, enjoy family fun at the Sea Grapes pool, or indulge in a gourmet lunch with your included credit, The Shore Club offers an unparalleled luxury experience.
                            </p>
                            <button className="text-[#111418] dark:text-white font-bold underline flex items-center gap-1 hover:text-primary transition-colors text-sm sm:text-base">
                                Read more
                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
                            </button>
                        </div>
                    </section>

                    <hr className="border-gray-200 dark:border-gray-800" />

                    {/* Amenities / What's Included */}
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#111418] dark:text-white">What's included</h3>
                        <div className="grid grid-cols-1 gap-y-3 sm:gap-y-4 sm:gap-x-8">
                            {experience.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-start gap-3 sm:gap-4">
                                    <span className="material-symbols-outlined text-[#111418] dark:text-white text-[20px] sm:text-[24px] mt-0.5">
                                        {amenity.icon}
                                    </span>
                                    <div>
                                        <p className="font-bold text-[#111418] dark:text-white text-sm sm:text-base">{amenity.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{amenity.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-gray-200 dark:border-gray-800" />

                    {/* Location Map */}
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#111418] dark:text-white">Where you'll be</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Long Bay Beach, Providenciales</p>
                        <div className="w-full h-48 sm:h-64 md:h-80 rounded-xl overflow-hidden relative bg-gray-200 dark:bg-gray-800">
                            <div
                                className="w-full h-full bg-cover bg-center grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK0shd_e43yalu7bwU0Yz0yZk8eOSDHwxH7tjDML5AR72U4Ki-V1WnEqxS1OvI4XPkyNaX6sHkKyPxdaTO0CzdZg2o3HYCKGMui10Feh1gPBrlgGUYaJs9X69yN_gWRUwv0taJ3d6yM61-ZtHg_knSp8XVIRk0RKmVE-Z88Twu5W7sSNgXzf9jNKEJH2ZTzJ31tU7zB-OxPnx4ZcwAHulTrZwW9El53HcTCzODyT0Hor87jjWsuQTis7aqx8520H0WLaoSu4bZu2qb")' }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-white dark:bg-gray-900 p-2 sm:p-3 rounded-full shadow-xl animate-bounce">
                                    <span className="material-symbols-outlined text-primary text-[24px] sm:text-[32px]">location_on</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-gray-200 dark:border-gray-800" />

                    {/* Reviews Section */}
                    <section id="reviews">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-[#111418] dark:text-white">Guest Reviews</h3>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-x-8 sm:gap-y-6">
                            <div className="flex flex-col gap-2">
                                <p className="text-[#111418] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                                    {experience.rating}
                                </p>
                                <div className="flex gap-0.5 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined text-[18px] sm:text-[20px]">star</span>
                                    ))}
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-normal">
                                    {experience.reviewCount} reviews
                                </p>
                            </div>

                            {/* Rating Bars */}
                            <div className="grid min-w-[200px] sm:min-w-[240px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2 sm:gap-y-3">
                                {[
                                    { rating: 5, percentage: 80 },
                                    { rating: 4, percentage: 15 },
                                    { rating: 3, percentage: 4 },
                                    { rating: 2, percentage: 1 },
                                    { rating: 1, percentage: 0 }
                                ].map(({ rating, percentage }) => (
                                    <>
                                        <p key={`rating-${rating}`} className="text-[#111418] dark:text-white text-xs sm:text-sm font-medium">{rating}</p>
                                        <div key={`bar-${rating}`} className="flex h-1.5 sm:h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                            <div className="rounded-full bg-[#111418] dark:bg-white" style={{ width: `${percentage}%` }}></div>
                                        </div>
                                        <p key={`percent-${rating}`} className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-right">{percentage}%</p>
                                    </>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Policies / Need to know */}
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#111418] dark:text-white">Things to know</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <h4 className="font-bold text-[#111418] dark:text-white mb-2 text-sm">Resort Rules</h4>
                                <ul className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-1.5 sm:space-y-2">
                                    <li>Check-in: 10:00 AM</li>
                                    <li>Check-out: 6:00 PM</li>
                                    <li>Smart casual dress code for dining</li>
                                    <li>No outside food or drinks allowed</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111418] dark:text-white mb-2 text-sm">Cancellation Policy</h4>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    Free cancellation up to 24 hours before your reservation time. Afterward, cancel before check-in for a partial refund.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN: Sticky Sidebar */}
                <div className="lg:col-span-1 order-first lg:order-last">
                    <div className="lg:sticky lg:top-28 w-full">
                        <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-black/40 border border-gray-200 dark:border-gray-700 overflow-hidden p-4 sm:p-6">
                            {/* Header */}
                            <div className="flex items-end justify-between mb-4 sm:mb-6">
                                <div>
                                    <span className="text-xl sm:text-2xl font-bold text-[#111418] dark:text-white">${experience.pricePerAdult}</span>
                                    <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base"> / adult</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                                    <span className="material-symbols-outlined text-[12px] sm:text-[14px]">check_circle</span>
                                    <span className="hidden sm:inline">Available Today</span>
                                    <span className="sm:hidden">Available</span>
                                </div>
                            </div>

                            {/* Form Inputs */}
                            <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                                {/* Date Picker */}
                                <div className="relative">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Date</label>
                                    <div className="relative">
                                        <input
                                            className="w-full bg-gray-50 dark:bg-[#101922] border-none rounded-lg py-2.5 sm:py-3 px-3 sm:px-4 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary outline-none cursor-pointer text-sm sm:text-base"
                                            type="date"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Guests Selector */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Guests</label>
                                    <div className="bg-gray-50 dark:bg-[#101922] rounded-lg p-3 flex flex-col gap-3">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-[#111418] dark:text-white">
                                                Adults <span className="text-xs text-gray-500">(${experience.pricePerAdult})</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <button
                                                    className="size-6 sm:size-7 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 text-[#111418] dark:text-white disabled:opacity-50"
                                                    onClick={() => setAdults(Math.max(1, adults - 1))}
                                                    disabled={adults <= 1}
                                                >
                                                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">remove</span>
                                                </button>
                                                <span className="text-sm font-bold w-4 text-center">{adults}</span>
                                                <button
                                                    className="size-6 sm:size-7 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 text-[#111418] dark:text-white"
                                                    onClick={() => setAdults(adults + 1)}
                                                >
                                                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">add</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="h-px bg-gray-200 dark:bg-gray-700 w-full"></div>
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-[#111418] dark:text-white">
                                                Children <span className="text-xs text-gray-500">(${experience.pricePerChild})</span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <button
                                                    className="size-6 sm:size-7 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 text-[#111418] dark:text-white disabled:opacity-50"
                                                    onClick={() => setChildren(Math.max(0, children - 1))}
                                                    disabled={children <= 0}
                                                >
                                                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">remove</span>
                                                </button>
                                                <span className="text-sm font-bold w-4 text-center">{children}</span>
                                                <button
                                                    className="size-6 sm:size-7 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 text-[#111418] dark:text-white"
                                                    onClick={() => setChildren(children + 1)}
                                                >
                                                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">add</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 sm:py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all transform active:scale-[0.98] mb-3 sm:mb-4 text-sm sm:text-base">
                                Reserve Now
                            </button>

                            {/* Price Breakdown */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex justify-between">
                                    <span>${experience.pricePerAdult} x {adults} adults</span>
                                    <span>${totalAdults}</span>
                                </div>
                                {children > 0 && (
                                    <div className="flex justify-between">
                                        <span>${experience.pricePerChild} x {children} children</span>
                                        <span>${totalChildren}</span>
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <span>Service fee</span>
                                    <span>${experience.serviceFee}</span>
                                </div>
                                <div className="h-px bg-gray-200 dark:bg-gray-700 my-1.5 sm:my-2"></div>
                                <div className="flex justify-between text-sm sm:text-base font-bold text-[#111418] dark:text-white">
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>
                            </div>

                            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 dark:bg-gray-800/50 py-2 rounded-lg">
                                <span className="material-symbols-outlined text-[14px] sm:text-[16px]">verified_user</span>
                                <span className="text-center">Secure booking & Free cancellation 24h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}