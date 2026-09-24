'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SignUpModal from './SignUpModal'
import LoginModal from './LoginModal'

const menuLinks = [
    { href: '/', label: 'Home' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/about', label: 'About Us' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/contact', label: 'Contact Us' },
]

const menuItemClass = 'block w-full text-left px-6 py-2.5 text-sm font-medium hover:bg-luxury-sand/30 hover:text-primary focus-visible:bg-luxury-sand/30 transition-colors'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const menuButtonRef = useRef<HTMLButtonElement>(null)
    const pathname = usePathname()

    // Firm up the glass bar once content scrolls underneath it
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close the menu on navigation
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Close the menu on outside click or Escape
    useEffect(() => {
        if (!isMenuOpen) return

        const onPointerDown = (e: PointerEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false)
            }
        }
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false)
                menuButtonRef.current?.focus()
            }
        }

        document.addEventListener('pointerdown', onPointerDown)
        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('pointerdown', onPointerDown)
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [isMenuOpen])

    const openLogin = () => {
        setIsMenuOpen(false)
        setIsLoginModalOpen(true)
    }

    const openSignUp = () => {
        setIsMenuOpen(false)
        setIsSignUpModalOpen(true)
    }

    return (
        <>
            <header className="sticky top-0 z-[10000] w-full glass-bar" data-scrolled={scrolled}>
                <div className="layout-container flex justify-center">
                    <div className="w-full max-w-[1280px] px-4 py-3 sm:py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4 text-[#111418] dark:text-white">
                            <div className="relative" ref={menuRef}>
                                <button
                                    ref={menuButtonRef}
                                    className="flex items-center justify-center p-1.5 sm:p-1 rounded-md hover:bg-luxury-sand/30 transition-colors"
                                    onClick={() => setIsMenuOpen((open) => !open)}
                                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                                    aria-expanded={isMenuOpen}
                                    aria-controls="site-menu"
                                >
                                    <span className="material-symbols-outlined text-2xl sm:text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
                                </button>
                                <nav
                                    id="site-menu"
                                    aria-label="Main"
                                    className={`absolute top-full left-0 mt-4 w-60 glass-strong rounded-xl transition-all duration-200 ease-out origin-top-left z-50 ${isMenuOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible -translate-y-1 scale-[0.97]'
                                        }`}
                                >
                                    <ul className="py-3">
                                        {menuLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    className={`${menuItemClass} ${pathname === link.href ? 'text-primary' : ''}`}
                                                    href={link.href}
                                                    aria-current={pathname === link.href ? 'page' : undefined}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                        <li className="border-t border-luxury-sand/40 my-2" role="separator"></li>
                                        <li>
                                            <button className={menuItemClass} onClick={openLogin}>
                                                Login
                                            </button>
                                        </li>
                                        <li>
                                            <button className={menuItemClass} onClick={openSignUp}>
                                                Sign Up
                                            </button>
                                        </li>
                                        <li>
                                            <Link className={`${menuItemClass} font-bold text-primary`} href="/experiences">
                                                Browse Day Passes
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
                                <div className="text-luxury-gold">
                                    <span className="material-symbols-outlined text-2xl sm:text-3xl" aria-hidden="true">deck</span>
                                </div>
                                <span className="text-lg sm:text-xl font-bold tracking-tight">Paradise DayPass</span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4">
                            <button
                                className="hidden sm:block text-sm font-medium hover:text-coral-500 transition-colors"
                                onClick={openLogin}
                            >
                                Login
                            </button>
                            <button
                                className="hidden md:block text-sm font-medium bg-coral-50 hover:bg-coral-100 text-coral-600 hover:text-coral-700 px-4 py-2 rounded-full transition-colors border border-coral-200"
                                onClick={openSignUp}
                            >
                                Sign Up
                            </button>
                            <Link
                                href="/experiences"
                                className="bg-primary hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
                            >
                                <span className="sm:hidden">Book</span>
                                <span className="hidden sm:inline">Browse Day Passes</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <SignUpModal
                isOpen={isSignUpModalOpen}
                onClose={() => setIsSignUpModalOpen(false)}
                onSwitchToLogin={() => {
                    setIsSignUpModalOpen(false)
                    setIsLoginModalOpen(true)
                }}
            />

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
