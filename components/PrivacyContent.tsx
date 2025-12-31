'use client'

export default function PrivacyContent() {
    const sections = [
        { id: 'introduction', title: 'Introduction', icon: 'info' },
        { id: 'collection', title: 'Information Collected', icon: 'database' },
        { id: 'usage', title: 'How We Use It', icon: 'settings_accessibility' },
        { id: 'security', title: 'Data Security', icon: 'lock' },
        { id: 'rights', title: 'Your Rights', icon: 'gavel' },
        { id: 'contact', title: 'Contact Us', icon: 'mail' }
    ]

    return (
        <div className="flex-1 w-full max-w-[1200px] mx-auto p-4 md:px-6 md:py-8 lg:px-10">
            {/* Hero Section */}
            <div className="relative w-full rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 mb-10 border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
                {/* Abstract decorative element */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-[960px]">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Privacy Policy
                        </h1>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            <p className="text-base font-medium">Last Updated: December 31, 2025</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two Column Layout: Sticky Sidebar + Main Content */}
            <div className="flex flex-col lg:flex-row gap-12 relative">
                {/* Sidebar (Desktop Only Sticky) */}
                <aside className="hidden lg:block w-64 shrink-0">
                    <div className="sticky top-28 flex flex-col gap-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2 px-4">
                            Contents
                        </h3>
                        {sections.map((section, index) => (
                            <a
                                key={section.id}
                                className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${index === 0
                                        ? "text-primary bg-primary/10"
                                        : "text-gray-600 dark:text-gray-400 hover:text-[#111418] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                href={`#${section.id}`}
                            >
                                <span className="material-symbols-outlined text-[20px]">{section.icon}</span>
                                {section.title}
                            </a>
                        ))}
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 max-w-[800px]">
                    {/* Section 1: Introduction */}
                    <section className="mb-12 scroll-mt-28" id="introduction">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">info</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#111418] dark:text-white">1. Introduction</h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                                At Paradise DayPass, we are dedicated to curating exceptional day experiences at the world's most exclusive resorts in Turks and Caicos. Central to this mission is maintaining the trust and confidence of our visitors.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                In this Privacy Policy, we've provided detailed information on when and why we collect your personal information, how we use it to enhance your luxury experience, the limited conditions under which we may disclose it to others, and how we keep it secure. By using our platform, you consent to the data practices described in this statement.
                            </p>
                        </div>
                    </section>

                    <hr className="border-t border-gray-100 dark:border-gray-800 my-8" />

                    {/* Section 2: Information We Collect */}
                    <section className="mb-12 scroll-mt-28" id="collection">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">database</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#111418] dark:text-white">2. Information We Collect</h2>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm mb-6">
                            <h3 className="text-lg font-semibold text-[#111418] dark:text-white mb-3">Personal Information</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                    Name and Contact Data
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                    Payment Information
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                    Resort Preferences
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                                    Booking History
                                </li>
                            </ul>
                        </div>

                        {/* Technical Info Card */}
                        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden mb-2">
                            <div className="flex w-full items-center justify-between bg-white dark:bg-gray-800 px-6 py-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 shrink-0 size-10">
                                        <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">cookie</span>
                                    </div>
                                    <div>
                                        <p className="text-[#111418] dark:text-white text-base font-semibold">Technical Data & Cookies</p>
                                        <p className="text-gray-500 text-sm mt-0.5">IP address, browser type, and device info</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="border-t border-gray-100 dark:border-gray-800 my-8" />

                    {/* Section 3: Usage */}
                    <section className="mb-12 scroll-mt-28" id="usage">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">settings_accessibility</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#111418] dark:text-white">3. How We Use Your Information</h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                            <p className="mb-4">
                                We use the information we collect or receive to facilitate the account creation and logon process, fulfill your resort day pass bookings, and communicate with you about your reservations. Specifically, we use your data to:
                            </p>
                            <ul className="space-y-4 list-none pl-0">
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary shrink-0 mt-1">hotel_class</span>
                                    <span>
                                        <strong>Facilitate Booking Fulfillment:</strong> Sharing necessary details with resort partners to ensure your arrival is seamless and VIP-ready.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary shrink-0 mt-1">support_agent</span>
                                    <span>
                                        <strong>Provide Customer Support:</strong> Responding to your inquiries and solving any potential issues with your booking.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary shrink-0 mt-1">campaign</span>
                                    <span>
                                        <strong>Marketing & Promotions:</strong> With your consent, we send you curated offers for new resort partners or exclusive seasonal passes.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <hr className="border-t border-gray-100 dark:border-gray-800 my-8" />

                    {/* Section 4: Security */}
                    <section className="mb-12 scroll-mt-28" id="security">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">lock</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#111418] dark:text-white">4. Data Security</h2>
                        </div>
                        <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                                    <span className="material-symbols-outlined text-green-500">lock</span>
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">SSL Encrypted</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
                                    <span className="material-symbols-outlined text-blue-500">verified_user</span>
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">PCI Compliant Payments</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Your Rights */}
                    <section className="mb-12 scroll-mt-28" id="rights">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">gavel</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#111418] dark:text-white">5. Your Privacy Rights</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the data we hold about you.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors">
                                <h4 className="font-bold text-[#111418] dark:text-white mb-2">Access & Portability</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Request a copy of your personal data in a structured, machine-readable format.
                                </p>
                            </div>
                            <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors">
                                <h4 className="font-bold text-[#111418] dark:text-white mb-2">Correction & Deletion</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Update incorrect data or request full deletion of your account and history.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="scroll-mt-28" id="contact">
                        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-2">
                                    Have questions about your data?
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md">
                                    Our Data Protection Officer is available to assist you with any inquiries regarding this Privacy Policy or your personal information.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
                                <a
                                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                    href="/contact"
                                >
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                    Contact Privacy Team
                                </a>
                                <div className="text-center text-xs text-gray-500">
                                    or write to us at Grace Bay Rd, Providenciales
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}