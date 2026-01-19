'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reservation: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <div className="flex flex-grow flex-col lg:flex-row h-full">
            {/* Left Column: Content & Form */}
            <div className="flex flex-1 flex-col justify-center px-6 py-10 lg:px-20 lg:py-16 xl:px-32 bg-white dark:bg-[#101922]">
                <div className="max-w-[600px] w-full mx-auto">
                    {/* Header Section */}
                    <div className="mb-10">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                            Concierge Support
                        </span>
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] mb-4 text-[#111418] dark:text-white">
                            How can we assist you?
                        </h1>
                        <p className="text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
                            Whether you need help with a booking or have a special request for your day pass, our team is here to ensure your experience is seamless.
                        </p>
                    </div>

                    {/* Direct Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {/* WhatsApp Card */}
                        <div className="group flex flex-col gap-3 rounded-xl border border-[#dbe0e6] dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-5 hover:border-primary/50 transition-all cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">chat</span>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    arrow_forward
                                </span>
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-base font-bold leading-tight">WhatsApp Concierge</h3>
                                <p className="text-sm text-gray-500 mt-1">Instant response (9am - 6pm EST)</p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group flex flex-col gap-3 rounded-xl border border-[#dbe0e6] dark:border-gray-800 bg-background-light dark:bg-gray-900/50 p-5 hover:border-primary/50 transition-all cursor-pointer">
                            <div className="flex items-center justify-between">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    arrow_forward
                                </span>
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-base font-bold leading-tight">Email Support</h3>
                                <p className="text-sm text-gray-500 mt-1 break-all">concierge@resortpass.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative flex items-center py-5 mb-8">
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 dark:text-gray-600 text-sm font-medium">
                            Or send a message
                        </span>
                        <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
                    </div>

                    {/* Contact Form */}
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#111418] dark:text-gray-200" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white dark:bg-gray-900 dark:border-gray-800 px-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all dark:text-white placeholder:text-gray-400"
                                    id="name"
                                    name="name"
                                    placeholder="Ex. John Doe"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#111418] dark:text-gray-200" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white dark:bg-gray-900 dark:border-gray-800 px-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all dark:text-white placeholder:text-gray-400"
                                    id="email"
                                    name="email"
                                    placeholder="Ex. john@example.com"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#111418] dark:text-gray-200" htmlFor="reservation">
                                Reservation Number (Optional)
                            </label>
                            <input
                                className="h-12 w-full rounded-lg border border-[#dbe0e6] bg-white dark:bg-gray-900 dark:border-gray-800 px-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all dark:text-white placeholder:text-gray-400"
                                id="reservation"
                                name="reservation"
                                placeholder="Ex. RES-12345"
                                type="text"
                                value={formData.reservation}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#111418] dark:text-gray-200" htmlFor="message">
                                How can we help?
                            </label>
                            <textarea
                                className="w-full rounded-lg border border-[#dbe0e6] bg-white dark:bg-gray-900 dark:border-gray-800 p-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all dark:text-white placeholder:text-gray-400 resize-none"
                                id="message"
                                name="message"
                                placeholder="Tell us about your request..."
                                rows={4}
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                className="w-full md:w-auto h-12 px-8 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-500/20"
                                type="submit"
                            >
                                Send Message
                            </button>
                            <p className="mt-4 text-xs text-center md:text-left text-gray-400 dark:text-gray-500">
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a className="underline hover:text-primary" href="/privacy">
                                    Privacy Policy
                                </a>{' '}
                                apply.
                            </p>
                        </div>
                    </form>

                    {/* FAQ Link */}
                    <div className="mt-8 text-center md:text-left">
                        <a
                            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                            href="/faqs"
                        >
                            <span className="material-symbols-outlined text-[20px]">help</span>
                            Looking for quick answers? Visit our Help Center
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="hidden lg:block lg:w-[45%] xl:w-[50%] relative overflow-hidden bg-gray-100">
                <div className="absolute inset-0 h-full w-full">
                    <Image
                        alt="Serene turquoise infinity pool overlooking the ocean in Turks and Caicos with lounge chairs"
                        className="w-full h-full object-cover"
                        src="/images/contact-image.jpg"
                        fill
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* Location Pin Overlay */}
                    <div className="absolute bottom-10 left-10 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                        <span className="text-xs font-bold tracking-wide uppercase">Grace Bay, Turks & Caicos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}