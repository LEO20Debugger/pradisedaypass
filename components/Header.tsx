'use client'

import { useState } from 'react'
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-[10000] w-full glass-panel border-b border-luxury-sand/50">
                <div className="layout-container flex justify-center">
                    <div className="w-full max-w-[1280px] px-4 py-3 sm:py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4 text-[#111418] dark:text-white">
                            <div className="relative group">
                                <button
                                    className="flex items-center justify-center p-1.5 sm:p-1 rounded-md hover:bg-luxury-sand/20 transition-colors focus:outline-none"
                                    onMouseEnter={() => setIsMenuOpen(true)}
                                    onMouseLeave={() => setIsMenuOpen(false)}
                                >
                                    <span className="material-symbols-outlined text-2xl sm:text-3xl">menu</span>
                                </button>
                                <div
                                    className={`absolute top-full left-0 mt-4 w-60 bg-white dark:bg-background-dark border border-luxury-sand rounded-xl shadow-glass transition-all duration-300 transform origin-top-left z-50 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                                        }`}
                                    onMouseEnter={() => setIsMenuOpen(true)}
                                    onMouseLeave={() => setIsMenuOpen(false)}
                                >
                                    <ul className="py-3">
                                        <li><a className="block px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors" href="/">Home</a></li>
                                        <li><a className="block px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors" href="/experiences">Experiences</a></li>
                                        <li><a className="block px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors" href="/how-it-works">How it works</a></li>
                                        <li><a className="block px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors" href="/about">About Us</a></li>
                                        <li><a className="block px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors" href="/faqs">FAQs</a></li>
                                        <li><a className="block px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors" href="/contact">Contact Us</a></li>
                                        <li className="border-t border-luxury-sand/30 my-2"></li>
                                        <li>
                                            <button
                                                className="block w-full text-left px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors"
                                                onClick={() => {
                                                    setIsLoginModalOpen(true)
                                                    setIsMenuOpen(false)
                                                }}
                                            >
                                                Login
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="block w-full text-left px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/20 hover:text-primary transition-colors"
                                                onClick={() => {
                                                    setIsSignUpModalOpen(true)
                                                    setIsMenuOpen(false)
                                                }}
                                            >
                                                Sign Up
                                            </button>
                                        </li>
                                        <li><a className="block px-6 py-2.5 text-sm font-bold text-primary hover:bg-luxury-sand/20 transition-colors" href="/experiences">Browse Day Passes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
                                <div className="text-luxury-gold">
                                    <span className="material-symbols-outlined text-2xl sm:text-3xl">deck</span>
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold tracking-tight">Paradise DayPass</h2>
                            </a>
                        </div>

                        <nav className="hidden md:flex items-center gap-8">
                            {/* Navigation items moved to hamburger menu only */}
                        </nav>

                        <div className="flex items-center gap-2 sm:gap-4">
                            <button
                                className="hidden sm:block text-sm font-medium hover:text-coral-500 transition-colors"
                                onClick={() => setIsLoginModalOpen(true)}
                            >
                                Login
                            </button>
                            <button
                                className="hidden md:block text-sm font-medium bg-coral-50 hover:bg-coral-100 text-coral-600 hover:text-coral-700 px-4 py-2 rounded-full transition-colors border border-coral-200"
                                onClick={() => setIsSignUpModalOpen(true)}
                            >
                                Sign Up
                            </button>
                            <a
                                href="/experiences"
                                className="hidden sm:inline-block bg-primary hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg text-center"
                            >
                                Browse Day Passes
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sign Up Modal */}
            <SignUpModal
                isOpen={isSignUpModalOpen}
                onClose={() => setIsSignUpModalOpen(false)}
                onSwitchToLogin={() => {
                    setIsSignUpModalOpen(false)
                    setIsLoginModalOpen(true)
                }}
            />

            {/* Login Modal */}
            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onSwitchToSignUp={() => {
                    setIsLoginModalOpen(false)
                    setIsSignUpModalOpen(true)
                }}
            />
        </>
    )
}