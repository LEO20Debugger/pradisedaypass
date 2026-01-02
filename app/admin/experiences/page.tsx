'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AdminExperiences() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const experiences = [
        {
            id: 1,
            name: 'Full Day Cabana Access',
            resort: 'The Shore Club',
            location: 'Providenciales',
            price: '$150.00',
            guests: 4,
            status: 'Active',
            updated: '2 hours ago',
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 2,
            name: 'Sunset Dinner Pass',
            resort: 'Seven Stars Resort',
            location: 'Grace Bay',
            price: '$180.00',
            guests: 2,
            status: 'Sold Out',
            updated: '1 day ago',
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 3,
            name: 'Poolside Oasis Day Pass',
            resort: 'Wymara Resort',
            location: 'Bight Settlement',
            price: '$225.00',
            guests: 2,
            status: 'Draft',
            updated: '3 days ago',
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 4,
            name: 'Spa & Wellness Retreat',
            resort: 'The Shore Club',
            location: 'Long Bay',
            price: '$450.00',
            guests: 1,
            status: 'Active',
            updated: '1 week ago',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 5,
            name: 'Family Fun Day',
            resort: 'Beaches Turks & Caicos',
            location: 'Lower Bight',
            price: '$600.00',
            guests: 6,
            status: 'Active',
            updated: '2 weeks ago',
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
        }
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
            case 'Sold Out':
                return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
            case 'Draft':
                return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            default:
                return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
        }
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
                        <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111418] dark:hover:text-white transition-colors">
                            <span className="material-symbols-outlined">dashboard</span>Dashboard
                        </Link>
                        <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-luxury-gold/10 text-luxury-gold font-semibold transition-colors" href="#">
                            <span className="material-symbols-outlined">hotel</span>Experiences
                        </a>
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
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 items-center text-sm">
                        <Link href="/admin/dashboard" className="text-gray-500 dark:text-gray-400 font-medium hover:text-primary transition-colors">
                            Dashboard
                        </Link>
                        <span className="text-gray-400 material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-[#111418] dark:text-white font-medium">Manage Experiences</span>
                    </div>

                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between items-end gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-[#111418] dark:text-white text-3xl sm:text-4xl font-extrabold tracking-tight">Manage Experiences</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">Create and manage your resort day pass inventory.</p>
                        </div>
                        <Link href="/admin/experiences/new" className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-primary hover:bg-blue-700 text-white text-sm font-bold shadow-sm transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Add New Experience</span>
                        </Link>
                    </div>

                    {/* Filters & Search Bar */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm">
                        {/* Search */}
                        <div className="lg:col-span-5">
                            <label className="relative block w-full">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <span className="material-symbols-outlined">search</span>
                                </span>
                                <input
                                    className="block w-full rounded-lg border-0 bg-gray-50 dark:bg-gray-800 py-2.5 pl-10 pr-4 text-[#111418] dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    placeholder="Search by name, resort, or location..."
                                    type="text"
                                />
                            </label>
                        </div>

                        {/* Filters */}
                        <div className="lg:col-span-7 flex flex-wrap items-center gap-3 lg:justify-end">
                            <div className="relative">
                                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors">
                                    <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">Status: <span className="text-[#111418] dark:text-white font-semibold">All</span></span>
                                    <span className="material-symbols-outlined text-gray-500 text-sm">expand_more</span>
                                </button>
                            </div>
                            <div className="relative">
                                <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors">
                                    <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">Resort: <span className="text-[#111418] dark:text-white font-semibold">All</span></span>
                                    <span className="material-symbols-outlined text-gray-500 text-sm">expand_more</span>
                                </button>
                            </div>
                            <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-1 hidden sm:block"></div>
                            <div className="flex bg-gray-50 dark:bg-gray-800 p-1 rounded-lg">
                                <button className="p-1.5 rounded text-gray-500 hover:text-[#111418] dark:text-gray-400 dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 shadow-sm transition-all">
                                    <span className="material-symbols-outlined text-[20px]">view_list</span>
                                </button>
                                <button className="p-1.5 rounded text-gray-400 hover:text-[#111418] dark:hover:text-white hover:bg-white dark:hover:bg-gray-700 transition-all">
                                    <span className="material-symbols-outlined text-[20px]">grid_view</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-[#dbe0e6] dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-[#161f28] border-b border-[#dbe0e6] dark:border-gray-700">
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Thumbnail</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Experience Name</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Resort & Location</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Guests</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                        <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Updated</th>
                                        <th className="relative p-4">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-[#1a2632] divide-y divide-[#dbe0e6] dark:divide-gray-700">
                                    {experiences.map((experience) => (
                                        <tr key={experience.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="h-12 w-16 rounded-lg bg-gray-200 bg-cover bg-center overflow-hidden border border-gray-200 dark:border-gray-700"
                                                    style={{ backgroundImage: `url(${experience.image})` }}>
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="text-sm font-bold text-[#111418] dark:text-white">{experience.name}</div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium text-[#111418] dark:text-white">{experience.resort}</span>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[12px] align-middle">location_on</span>
                                                        {experience.location}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-[#111418] dark:text-white">{experience.price}</div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="material-symbols-outlined text-gray-400 text-[18px]">group</span>
                                                    <span>{experience.guests}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(experience.status)}`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${experience.status === 'Active' ? 'bg-green-500' :
                                                        experience.status === 'Sold Out' ? 'bg-orange-500' :
                                                            'bg-gray-500'
                                                        }`}></span>
                                                    {experience.status}
                                                </span>
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{experience.updated}</td>
                                            <td className="p-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Link href={`/admin/experiences/${experience.id}`} className="text-gray-400 hover:text-primary p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" title="Edit">
                                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                                    </Link>
                                                    <button className="text-gray-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Delete">
                                                        <span className="material-symbols-outlined text-[20px]">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="bg-white dark:bg-[#1a2632] px-4 py-3 flex items-center justify-between border-t border-[#dbe0e6] dark:border-gray-700 sm:px-6">
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700 dark:text-gray-400">
                                        Showing <span className="font-medium text-[#111418] dark:text-white">1</span> to <span className="font-medium text-[#111418] dark:text-white">5</span> of <span className="font-medium text-[#111418] dark:text-white">42</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Previous</span>
                                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                        </a>
                                        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">1</a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#111418] dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">2</a>
                                        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#111418] dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-offset-0">...</span>
                                        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-[#111418] dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0">
                                            <span className="sr-only">Next</span>
                                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
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