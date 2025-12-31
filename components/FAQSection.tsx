'use client'

import { useState } from 'react'

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    const faqs = [
        {
            question: 'Do I need to book in advance?',
            answer: 'Yes, we highly recommend booking in advance as day passes are limited by each resort to ensure a comfortable experience for all guests.'
        },
        {
            question: 'Are food and drinks included?',
            answer: 'This depends on the specific pass type. Some passes are "All-Inclusive" covering food and drinks, while others are "Access Only" or include a food & beverage credit. Please check the pass details before booking.'
        },
        {
            question: 'What is the cancellation policy?',
            answer: 'Most passes offer free cancellation up to 24 hours before your check-in date. Cancellations made within 24 hours are typically non-refundable.'
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    return (
        <section className="py-20 px-4 md:px-40 bg-white dark:bg-background-dark">
            <div className="max-w-[800px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center dark:text-white">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 dark:border-gray-700 rounded-lg transition-all ${openFAQ === index
                                    ? 'bg-white dark:bg-[#1a2632]'
                                    : 'bg-gray-50 dark:bg-[#1a2632]'
                                }`}
                        >
                            <button
                                className="flex cursor-pointer items-center justify-between p-4 font-bold text-[#111418] dark:text-white w-full text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className={`material-symbols-outlined transition-transform ${openFAQ === index ? 'rotate-180' : ''
                                    }`}>
                                    expand_more
                                </span>
                            </button>
                            {openFAQ === index && (
                                <div className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}