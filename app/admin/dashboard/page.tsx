'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const stats = [
        { title: 'Total Bookings', value: '1,247', change: '+12%', icon: 'calendar_today', color: 'primary' },
        { title: 'Revenue', value: '$89,432', change: '+8%', icon: 'payments', color: 'green' },
        { title: 'Active Resorts', value: '24', change: '+2', icon: 'hotel', color: 'purple' },
        { title: 'Pending Reviews', value: '18', change: '-3', icon: 'rate_review', color: 'orange' }
    ]

    const recentBookings = [
        { id: '1001', guest: 'John Smith', resort: 'The Shore Club', date: '2025-01-05', status: 'Confirmed', amount: '$150' },
        { id: '1002', guest: 'Sarah Johnson', resort: 'The Shore Club', date: '2025-01-06', status: 'Pending', amount: '$150' },
        { id: '1003', guest: 'Mike Wilson', resort: 'Wymara Resort', date: '2025-01-07', status: 'Confirmed', amount: '$185' },
        { id: '1004', guest: 'Emma Davis', resort: 'Wymara Resort', date: '2025-01-08', status: 'Cancelled', amount: '$185' }
    ]

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
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-luxury-gold/10 text-luxury-gold font-semibold transition-colors" href="#">
                            <span className="material-symbols-outlined">dashboard</span>Dashboard
                        </a>
                        <Link href="/admin/experiences" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">hotel</span>Experiences
                        </Link>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white transition-colors" href="#bookings">
                            <span className="material-symbols-outlined">calendar_month</span>Bookings
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined">holiday_village</span>Resorts
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined">payments</span>Payments
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined">group</span>Customers
                        </a>
                        <div className="h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white transition-colors" href="#">
                            <span className="material-symbols-outlined">settings</span>Settings
                        </a>
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

                {/* Main Content */}
                <main className="flex-1 flex flex-col gap-8 px-4 py-8 lg:px-8 lg:py-8 overflow-x-hidden">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                                    <h3 className="text-3xl font-bold text-[#111418] dark:text-white mt-1">{stat.value}</h3>
                                    <p className={`text-xs font-medium mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                        {stat.change} from last month
                                    </p>
                                </div>
                                <div className={`size-12 rounded-lg flex items-center justify-center ${stat.color === 'primary' ? 'bg-primary/10 text-primary' :
                                    stat.color === 'green' ? 'bg-green-50 text-green-600' :
                                        stat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                                            'bg-orange-50 text-orange-600'
                                    }`}>
                                    <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Bookings */}
                    <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-[#dbe0e6] dark:border-gray-700">
                            <h2 className="text-xl font-bold text-[#111418] dark:text-white">Recent Bookings</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Latest customer reservations</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-[#161f28] border-b border-[#dbe0e6] dark:border-gray-700">
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Booking ID</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Guest</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resort</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#dbe0e6] dark:divide-gray-700">
                                    {recentBookings.map((booking) => (
                                        <tr key={booking.id} className="group hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                            <td className="p-4 text-sm font-medium text-[#111418] dark:text-white">#{booking.id}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.guest}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.resort}</td>
                                            <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{booking.date}</td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                    booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                    }`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-sm font-semibold text-[#111418] dark:text-white">{booking.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="py-6 text-center bg-transparent">
                <p className="text-xs text-[#617589] dark:text-gray-400">
                    © 2025 Paradise DayPass. Administrative Access Only.
                </p>
            </footer>

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