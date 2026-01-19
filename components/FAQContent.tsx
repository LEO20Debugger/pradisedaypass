'use client'

import { useState } from 'react'

export default function FAQContent() {
    const [activeTab, setActiveTab] = useState('general')
    const [openFAQ, setOpenFAQ] = useState<string | null>('general-1')

    const tabs = [
        { id: 'general', label: 'General Info' },
        { id: 'booking', label: 'Booking' },
        { id: 'etiquette', label: 'Etiquette' },
        { id: 'inclusions', label: 'Inclusions' },
        { id: 'weather', label: 'Weather Policy' }
    ]

    const faqSections = {
        general: {
            title: 'General Information',
            faqs: [
                {
                    id: 'general-1',
                    question: 'What is a Resort Day Pass?',
                    answer: 'A Resort Day Pass grants you access to a resort\'s amenities for a single day without requiring an overnight stay. This typically includes access to swimming pools, beaches, lounge chairs, and sometimes dining facilities or water sports equipment. It\'s the perfect way to experience luxury resorts in Turks & Caicos while staying elsewhere or arriving by cruise ship.'
                },
                {
                    id: 'general-2',
                    question: 'Are children allowed at adult-only resorts?',
                    answer: 'Generally, no. Adult-only resorts enforce an age policy (usually 18+) for all guests, including Day Pass holders. However, we clearly label each resort as "Family Friendly" or "Adults Only" on our booking pages so you can choose the perfect experience for your group.'
                },
                {
                    id: 'general-3',
                    question: 'Do I need to bring my own towels?',
                    answer: 'Most of our partner resorts provide complimentary towel service for Day Pass guests. You can collect these at the main pool concierge or beach station. We recommend checking the "Inclusions" section of specific resort pages just to be sure.'
                },
                {
                    id: 'general-4',
                    question: 'Can I bring my own food and drinks to the venue?',
                    answer: 'Generally, most partner venues do not allow external food or beverages, including coolers. However, check your reservation details carefully for any specific food and drink policies. You can also contact the venue by phone or email to confirm.'
                }
            ]
        },
        booking: {
            title: 'Booking & Payments',
            faqs: [
                {
                    id: 'booking-1',
                    question: 'What forms of payment are accepted?',
                    answer: 'We accept all major credit cards including Visa, MasterCard, American Express, and Discover. All transactions are processed securely in USD.'
                },
                {
                    id: 'booking-2',
                    question: 'Can I cancel or reschedule my booking?',
                    answer: 'Yes, we understand plans change. Full refunds are available for cancellations made at least 24 hours prior to your scheduled arrival date. Cancellations made within 24 hours are non-refundable but may be eligible for rescheduling pending resort availability.'
                },
                {
                    id: 'booking-3',
                    question: 'Why isn\'t the date or type of pass I want available?',
                    answer: 'If the Daypass you\'re trying to book isn\'t available, it means the venue isn\'t offering it for that specific date or the available slots have been sold out. Availability is managed exclusively by the venues and is updated in real-time on the platform. We recommend checking back periodically or considering similar options nearby. Currently, there is no waitlist service.'
                }
            ]
        },
        weather: {
            title: 'Weather Policy',
            faqs: [
                {
                    id: 'weather-1',
                    question: 'What happens if it rains?',
                    answer: 'We offer a "Sunshine Guarantee." If heavy rain persists for more than 4 hours during your booked day, we will provide a credit for a future visit or a 50% refund. Please contact our concierge team on the day of your visit if weather impacts your experience.'
                }
            ]
        }
    }

    const toggleFAQ = (faqId: string) => {
        setOpenFAQ(openFAQ === faqId ? null : faqId)
    }

    return (
        <div className="layout-container flex grow flex-col w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 py-10 gap-10">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 lg:min-w-[250px]">
                    <div className="sticky top-24">
                        <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-4 hidden lg:block">
                            Browse by Topic
                        </h3>

                        {/* Mobile Horizontal Scroll Tabs */}
                        <div className="lg:hidden flex overflow-x-auto pb-4 gap-4 no-scrollbar border-b border-[#dbe0e6] dark:border-gray-700 mb-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${activeTab === tab.id
                                            ? 'bg-primary text-white'
                                            : 'bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 text-[#617589] dark:text-gray-400'
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Desktop Vertical Sidebar */}
                        <div className="hidden lg:flex flex-col gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`flex items-center justify-between p-3 rounded-lg font-medium transition-all text-left ${activeTab === tab.id
                                            ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary'
                                            : 'text-[#617589] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a2632] hover:text-[#111418] dark:hover:text-white'
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <span>{tab.label}</span>
                                    {activeTab === tab.id && (
                                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* FAQ Content */}
                <div className="flex-1 w-full">
                    {Object.entries(faqSections).map(([sectionId, section]) => (
                        <div
                            key={sectionId}
                            className={`${activeTab === sectionId ? 'block' : 'hidden'} mb-10`}
                        >
                            <h2 className="text-[#111418] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
                                {section.title}
                            </h2>
                            <div className="flex flex-col gap-4">
                                {section.faqs.map((faq) => (
                                    <div
                                        key={faq.id}
                                        className="flex flex-col rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm group overflow-hidden transition-all duration-300"
                                    >
                                        <button
                                            className="flex cursor-pointer items-center justify-between gap-6 p-5 select-none hover:bg-gray-50 dark:hover:bg-[#202e3b] transition-colors text-left"
                                            onClick={() => toggleFAQ(faq.id)}
                                        >
                                            <p className="text-[#111418] dark:text-white text-base font-semibold leading-normal">
                                                {faq.question}
                                            </p>
                                            <div className={`text-[#617589] dark:text-gray-400 transition-transform duration-300 flex items-center ${openFAQ === faq.id ? 'rotate-180' : ''
                                                }`}>
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </div>
                                        </button>
                                        {openFAQ === faq.id && (
                                            <div className="px-5 pb-5 pt-0">
                                                <p className="text-[#617589] dark:text-gray-300 text-sm leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}