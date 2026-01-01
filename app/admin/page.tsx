'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle admin login here
        console.log('Admin login:', formData)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white flex flex-col min-h-screen overflow-x-hidden">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-[#2a3441] px-10 py-4 bg-white dark:bg-[#101922]">
                <div className="flex items-center gap-4">
                    <div className="size-8 text-primary">
                        <span className="material-symbols-outlined text-luxury-gold text-3xl">deck</span>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                            Paradise DayPass
                        </h2>
                        <span className="text-xs font-medium text-luxury-gold uppercase tracking-widest">
                            Admin Dashboard
                        </span>
                    </div>
                </div>
                <div>
                    <Link href="/" className="flex items-center gap-1 text-sm font-medium text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                        Back to Main Site
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 relative w-full">
                {/* Background Gradient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-blue-50/80 to-transparent dark:from-blue-900/10"></div>
                </div>

                {/* Login Card */}
                <div className="w-full max-w-[420px] bg-white dark:bg-[#1a2632] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-black/30 border-t-4 border-luxury-gold z-10 overflow-hidden">
                    <div className="p-8 flex flex-col gap-6">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-[#111418] dark:text-white">Admin Login</h1>
                            <p className="text-[#617589] dark:text-gray-400 text-sm mt-2">
                                Secure access for resort administrators
                            </p>
                        </div>

                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#111418] dark:text-gray-200 text-sm font-medium" htmlFor="email">
                                    Username or Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]">person</span>
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#101922] text-[#111418] dark:text-white text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none transition-colors"
                                        id="email"
                                        name="email"
                                        placeholder="admin@paradisedaypass.com"
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#111418] dark:text-gray-200 text-sm font-medium" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]">lock</span>
                                    </div>
                                    <input
                                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#101922] text-[#111418] dark:text-white text-sm focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none transition-colors"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined text-gray-400 text-[20px] hover:text-[#111418] dark:hover:text-white transition-colors">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        className="size-4 rounded border-[#dbe0e6] text-luxury-gold focus:ring-luxury-gold/20 dark:bg-gray-800 dark:border-gray-700"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span className="text-sm text-[#617589] dark:text-gray-400 font-medium">
                                        Remember me
                                    </span>
                                </label>
                                <a className="text-sm text-luxury-gold font-semibold hover:text-amber-600 transition-colors" href="#">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                className="mt-2 w-full flex items-center justify-center rounded-lg bg-primary h-12 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all transform active:scale-95"
                                type="submit"
                            >
                                Access Dashboard
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="bg-[#f0f2f4] dark:bg-[#101922]/50 p-4 text-center border-t border-[#dbe0e6] dark:border-gray-700">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <p className="text-sm text-[#617589] dark:text-gray-400">
                                Need admin access?
                            </p>
                            <Link
                                href="/admin/signup"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold hover:bg-amber-600 text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
                            >
                                <span className="material-symbols-outlined text-[16px]">person_add</span>
                                Create Admin Account
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center bg-transparent">
                <p className="text-xs text-[#617589] dark:text-gray-400">
                    © 2025 Paradise DayPass. Administrative Access Only.
                </p>
            </footer>
        </div>
    )
}