'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AdminBrand, { AdminFooter } from '@/components/AdminBrand'

const navItems = [
    { href: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { href: '/admin/experiences', icon: 'hotel', label: 'Experiences' },
    { href: '/admin/dashboard#bookings', icon: 'calendar_month', label: 'Bookings' },
    { href: '#', icon: 'holiday_village', label: 'Resorts' },
    { href: '#', icon: 'payments', label: 'Payments' },
    { href: '#', icon: 'group', label: 'Customers' },
]

const linkClass = 'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors'
const inactiveClass = 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white'
const activeClass = 'bg-luxury-gold/10 text-luxury-gold font-semibold'

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()

    const isActive = (href: string) => href !== '#' && !href.includes('#') && pathname.startsWith(href)

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white flex flex-col min-h-screen overflow-x-hidden">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-[#2a3441] px-10 py-4 bg-white dark:bg-[#101922]">
                <AdminBrand />
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        aria-label="Toggle navigation"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="flex items-center gap-2 mr-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="material-symbols-outlined text-lg">notifications</span>
                        <span className="material-symbols-outlined text-lg">settings</span>
                    </div>
                    <div className="flex items-center gap-3 border-l border-gray-200 dark:border-gray-700 pl-6">
                        <div className="size-9 rounded-full bg-gray-200 overflow-hidden">
                            <div className="w-full h-full bg-primary flex items-center justify-center">
                                <span className="text-white text-sm font-bold">A</span>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col">
                            <span className="text-xs font-bold text-[#111418] dark:text-white">Admin User</span>
                            <span className="text-[10px] text-gray-500">Super Admin</span>
                        </div>
                    </div>
                    <Link href="/admin" className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-gray-200 dark:border-gray-700 text-[#111418] dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <span className="truncate">Log Out</span>
                    </Link>
                </div>
            </header>

            <div className="flex flex-1 w-full max-w-[1600px] mx-auto">
                {/* Sidebar */}
                <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#101922] border-r border-[#f0f2f4] dark:border-[#2a3441] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:flex lg:flex-col h-[calc(100vh-73px)] lg:sticky lg:top-[73px]`}>
                    <nav className="flex flex-col gap-2 p-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`${linkClass} ${isActive(item.href) ? activeClass : inactiveClass}`}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>{item.label}
                            </Link>
                        ))}
                        <div className="h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
                        <Link href="#" className={`${linkClass} ${inactiveClass}`}>
                            <span className="material-symbols-outlined">settings</span>Settings
                        </Link>
                    </nav>

                    <div className="mt-auto p-4">
                        <div className="rounded-xl bg-gradient-to-br from-[#101922] to-[#1e2d3d] p-4 text-white">
                            <p className="text-xs text-gray-400 mb-1">Server Status</p>
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-medium">Systems Online</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {children}
            </div>

            <AdminFooter />

            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    )
}
