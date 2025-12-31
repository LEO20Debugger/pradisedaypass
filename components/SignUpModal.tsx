'use client'

import { useState } from 'react'

interface SignUpModalProps {
    isOpen: boolean
    onClose: () => void
    onSwitchToLogin?: () => void
}

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }: SignUpModalProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    if (!isOpen) return null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Simple Gradient Background */}
            <div
                className="fixed inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/90 to-teal-700/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Container - Smaller and more mobile responsive */}
            <div className="relative z-10 flex w-full max-w-[400px] sm:max-w-[440px] flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 dark:bg-[#1A2633] dark:ring-white/10 max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    aria-label="Close modal"
                    className="group absolute right-3 top-3 sm:right-4 sm:top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white z-20"
                    onClick={onClose}
                >
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">close</span>
                </button>

                {/* Modal Content */}
                <div className="flex flex-col p-5 sm:p-6 md:p-8">
                    {/* Heading Section */}
                    <div className="mb-6 flex flex-col gap-2 text-center">
                        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111418] dark:text-white">
                            Unlock Paradise
                        </h1>
                        <p className="text-sm font-normal leading-normal text-[#617589] dark:text-gray-400">
                            Book exclusive resort day passes in Turks and Caicos.
                        </p>
                    </div>

                    {/* Form Section */}
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold leading-normal text-[#111418] dark:text-gray-200">
                                Email Address
                            </span>
                            <input
                                className="h-11 sm:h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-3 sm:px-4 text-sm sm:text-base text-[#111418] placeholder-[#617589] transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-[#111A22] dark:text-white dark:placeholder-gray-500"
                                placeholder="Enter your email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        {/* Password Input */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold leading-normal text-[#111418] dark:text-gray-200">
                                Password
                            </span>
                            <div className="relative flex items-center">
                                <input
                                    className="h-11 sm:h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-3 sm:px-4 pr-11 sm:pr-12 text-sm sm:text-base text-[#111418] placeholder-[#617589] transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-[#111A22] dark:text-white dark:placeholder-gray-500"
                                    placeholder="Create a password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    className="absolute right-0 top-0 flex h-11 sm:h-12 w-11 sm:w-12 items-center justify-center text-[#617589] hover:text-[#111418] dark:text-gray-400 dark:hover:text-white"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </label>

                        {/* Confirm Password Input */}
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-semibold leading-normal text-[#111418] dark:text-gray-200">
                                Confirm Password
                            </span>
                            <input
                                className="h-11 sm:h-12 w-full rounded-lg border border-[#dbe0e6] bg-white px-3 sm:px-4 text-sm sm:text-base text-[#111418] placeholder-[#617589] transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-[#111A22] dark:text-white dark:placeholder-gray-500"
                                placeholder="Confirm your password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        {/* Submit Button */}
                        <div className="mt-2">
                            <button
                                className="flex h-11 sm:h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-primary px-4 sm:px-5 text-sm sm:text-base font-bold leading-normal tracking-[0.015em] text-white transition-transform hover:bg-blue-600 active:scale-[0.98]"
                                type="submit"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="relative mt-6">
                        <div aria-hidden="true" className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#dbe0e6] dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-3 text-sm font-medium text-[#617589] dark:bg-[#1A2633] dark:text-gray-400">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <button
                        className="mt-4 flex w-full items-center justify-center gap-3 rounded-lg border border-[#dbe0e6] bg-white px-4 py-2.5 sm:py-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-[#111A22] dark:hover:bg-[#1b2530]"
                        type="button"
                    >
                        <svg aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                            <path
                                className="dark:fill-white"
                                d="M12.0003 20.45C16.6669 20.45 20.5849 17.2721 21.9961 13.0909H12.0003V10.9091H23.9576C24.1611 12.0315 24.2731 13.2036 24.2731 14.4091C24.2731 20.8037 19.3367 25 12.0003 25C4.82093 25 0 20.1818 0 13C0 5.81818 4.82093 1 12.0003 1C14.8876 1 17.5517 1.94827 19.6803 3.59364L16.8924 6.38155C15.6536 5.41846 13.9189 4.90909 12.0003 4.90909C7.81849 4.90909 4.29653 8.13636 3.84372 12.3021C3.7663 13.0645 3.7663 13.9355 3.84372 14.6979C4.29653 18.8636 7.81849 22.0909 12.0003 22.0909V20.45Z"
                                fill="#111418"
                            />
                        </svg>
                        <span className="text-sm font-bold text-[#111418] dark:text-white">
                            Continue with Google
                        </span>
                    </button>

                    {/* Footer Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-[#617589] dark:text-gray-400">
                            Already a member?{' '}
                            <button
                                className="font-bold text-primary transition-colors hover:text-blue-600 hover:underline"
                                onClick={() => {
                                    onClose()
                                    onSwitchToLogin?.()
                                }}
                            >
                                Log in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}