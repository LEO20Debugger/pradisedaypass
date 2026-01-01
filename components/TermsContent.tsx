'use client'

import { useState } from 'react'

export default function TermsContent() {
    const [searchTerm, setSearchTerm] = useState('')

    const sections = [
        { id: 'introduction', title: 'Introduction', icon: 'info' },
        { id: 'booking', title: 'Booking & Payments', icon: 'credit_card' },
        { id: 'cancellations', title: 'Cancellations & Refunds', icon: 'cancel' },
        { id: 'conduct', title: 'Resort Access & Conduct', icon: 'location_on' },
        { id: 'liability', title: 'Liability & Waivers', icon: 'verified_user' },
        { id: 'privacy', title: 'Privacy Policy', icon: 'lock' }
    ]

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex flex-col gap-3 max-w-2xl">
                    <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                        Terms & Conditions
                    </h1>
                    <p className="text-[#617589] dark:text-gray-400 text-lg font-normal leading-relaxed">
                        Please read these terms carefully before booking your day pass. They outline your rights, responsibilities, and our commitment to your luxury experience.
                    </p>
                </div>
                <button className="flex-shrink-0 flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-[#111418] dark:text-white text-sm font-bold border border-transparent dark:border-gray-700">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                    <span>Download PDF</span>
                </button>
            </div>

            {/* Two-Column Layout */}
            <div className="flex flex-col lg:flex-row gap-12 relative">
                {/* Sidebar (Sticky Navigation) */}
                <aside className="w-full lg:w-80 flex-shrink-0">
                    <div className="sticky top-24 flex flex-col gap-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589]">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-white dark:bg-gray-800 text-[#111418] dark:text-white placeholder-[#617589] dark:placeholder-gray-500 focus:ring-2 focus:ring-primary shadow-sm text-sm"
                                placeholder="Search within document..."
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Navigation Links */}
                        <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex flex-col gap-1">
                            <div className="px-2 mb-2">
                                <h3 className="text-[#111418] dark:text-white text-xs font-bold uppercase tracking-wider mb-1">Contents</h3>
                            </div>
                            {sections.map((section, index) => (
                                <a
                                    key={section.id}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${index === 0
                                            ? "bg-primary/10 text-primary dark:text-blue-400 font-medium"
                                            : "text-[#617589] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#111418] dark:hover:text-white"
                                        }`}
                                    href={`#${section.id}`}
                                >
                                    <span className="material-symbols-outlined">{section.icon}</span>
                                    <span className="text-sm font-medium">{section.title}</span>
                                </a>
                            ))}
                        </nav>

                        {/* Support Card */}
                        <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-5 border border-primary/10">
                            <p className="text-sm font-semibold text-[#111418] dark:text-white mb-2">Need Help?</p>
                            <p className="text-xs text-[#617589] dark:text-gray-400 mb-3">Our concierge team is available 24/7 to assist with your questions.</p>
                            <a className="text-xs font-bold text-primary hover:underline" href="/contact">Contact Support →</a>
                        </div>
                    </div>
                </aside>

                {/* Main Document Content */}
                <div className="flex-1 min-w-0">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                        {/* Metadata */}
                        <div className="flex items-center gap-2 mb-10 pb-4 border-b border-gray-100 dark:border-gray-700">
                            <span className="material-symbols-outlined text-[#617589] text-[20px]">schedule</span>
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">Last Updated: December 31, 2025</p>
                        </div>

                        {/* Content Sections */}
                        <div className="flex flex-col gap-12 text-[#111418] dark:text-gray-200">
                            {/* Section 1: Introduction */}
                            <section className="scroll-mt-32" id="introduction">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary dark:text-white">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">01</span>
                                    Introduction
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-[#617589] dark:text-gray-300">
                                    <p className="mb-4 leading-relaxed">
                                        Welcome to Paradise DayPass. By accessing our website and booking day passes for our partner resorts in Turks and Caicos, you agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you ("the Guest") and Paradise DayPass ("the Platform").
                                    </p>
                                    <p className="leading-relaxed">
                                        We act as an intermediary between you and luxury resort properties. While we facilitate the booking, the specific rules and regulations of each resort also apply to your visit.
                                    </p>
                                </div>
                            </section>

                            {/* Section 2: Booking & Payments */}
                            <section className="scroll-mt-32" id="booking">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary dark:text-white">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">02</span>
                                    Booking & Payments
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-[#617589] dark:text-gray-300">
                                    <p className="mb-4 leading-relaxed">
                                        All bookings must be confirmed through the Paradise DayPass platform. We accept all major credit cards including Visa, MasterCard, and American Express. All transactions are processed in US Dollars (USD).
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-primary">
                                        <li>Full payment is required at the time of booking to secure your reservation.</li>
                                        <li>A confirmation email with a unique QR code will be sent immediately upon successful payment.</li>
                                        <li>Prices listed include local taxes but may exclude specific resort fees or gratuities unless otherwise stated.</li>
                                    </ul>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary p-4 rounded-r-lg my-6">
                                        <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                                            <span className="font-bold">Note:</span> Your credit card statement will show a charge from "Paradise Travel Ltd."
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3: Cancellations */}
                            <section className="scroll-mt-32" id="cancellations">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary dark:text-white">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">03</span>
                                    Cancellations & Refunds
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-[#617589] dark:text-gray-300">
                                    <p className="mb-4 leading-relaxed">
                                        We understand that travel plans can change. Our cancellation policy is designed to be as flexible as possible while respecting the planning requirements of our luxury partners.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50">
                                            <h4 className="font-bold text-[#111418] dark:text-white mb-2">Standard Cancellation</h4>
                                            <p className="text-sm">Full refund for cancellations made at least 48 hours prior to the check-in time.</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50">
                                            <h4 className="font-bold text-[#111418] dark:text-white mb-2">Late Cancellation</h4>
                                            <p className="text-sm">50% refund for cancellations made between 24-48 hours. No refunds for same-day cancellations.</p>
                                        </div>
                                    </div>
                                    <p className="text-sm italic">*In the event of official hurricane warnings or severe weather closures by the resort, a full refund will be processed automatically regardless of the timing.</p>
                                </div>
                            </section>

                            {/* Section 4: Resort Conduct */}
                            <section className="scroll-mt-32" id="conduct">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary dark:text-white">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">04</span>
                                    Resort Access & Conduct
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-[#617589] dark:text-gray-300">
                                    <p className="mb-4 leading-relaxed">
                                        Guests are expected to adhere to the dress code and behavioral standards of each resort. Paradise DayPass partners with exclusive properties that maintain a tranquil and sophisticated atmosphere.
                                    </p>
                                    <p className="mb-4 leading-relaxed">
                                        <strong>Check-in:</strong> You must present a valid government-issued ID matching the name on the booking confirmation along with your digital pass at the resort front desk.
                                    </p>
                                    <p className="leading-relaxed">
                                        Resorts reserve the right to refuse entry or remove guests who exhibit intoxication, aggression, or behavior that disturbs other guests, without refund.
                                    </p>
                                </div>
                            </section>

                            {/* Section 5: Liability */}
                            <section className="scroll-mt-32" id="liability">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary dark:text-white">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">05</span>
                                    Liability & Waivers
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-[#617589] dark:text-gray-300">
                                    <p className="mb-4 leading-relaxed">
                                        Paradise DayPass is a booking agent and does not own or operate the resorts. By booking a pass, you acknowledge that you are using the resort facilities at your own risk.
                                    </p>
                                    <p className="leading-relaxed">
                                        Neither Paradise DayPass nor the resort partners shall be liable for any loss or damage to personal property, or for any personal injury sustained during your visit, except where such liability cannot be excluded by law.
                                    </p>
                                </div>
                            </section>

                            {/* Section 6: Privacy */}
                            <section className="scroll-mt-32" id="privacy">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-primary dark:text-white">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">06</span>
                                    Privacy Policy
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-[#617589] dark:text-gray-300">
                                    <p className="mb-4 leading-relaxed">
                                        We respect your privacy and are committed to protecting your personal data. We only share necessary booking details (Name, Date of Visit) with the resort to facilitate your access.
                                    </p>
                                    <p className="leading-relaxed">
                                        For a full explanation of how we collect, use, and store your data, please refer to our dedicated <a className="text-primary hover:underline font-medium" href="/privacy">Privacy Policy page</a>.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 flex items-center justify-between bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
                        {/* Decorative elements */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                        <div className="absolute left-10 bottom-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                        <div className="relative z-10 max-w-lg">
                            <h3 className="text-xl font-bold mb-2">Ready to experience paradise?</h3>
                            <p className="text-blue-100">Now that you've reviewed the terms, explore our exclusive collection of resort day passes.</p>
                        </div>
                        <a
                            className="relative z-10 hidden sm:flex items-center justify-center bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-sm"
                            href="/experiences"
                        >
                            Browse Resorts
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}