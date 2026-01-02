'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function EditExperience() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const params = useParams()
    const experienceId = params.id

    // Mock data - in real app this would come from API
    const [formData, setFormData] = useState({
        name: 'The Palms Day Pass + Spa',
        resort: 'The Palms Turks & Caicos',
        location: 'Grace Bay, Providenciales',
        adultsOnly: false,
        shortDescription: 'Indulge in a day of luxury at The Palms with full access to pool, beach, and world-class spa facilities.',
        fullDescription: `Experience the ultimate in relaxation at The Palms Turks & Caicos. Your day pass includes access to our infinity pool, private beach area, and the award-winning spa. Enjoy complimentary towels, water service, and a $50 credit towards food and beverage at any of our onsite restaurants.`,
        adultPrice: 250,
        childPrice: 125,
        creditAmount: 50,
        serviceFee: 12,
        capacity: 20,
        blackoutDates: 'Dec 24 - Jan 2',
        status: 'published',
        trending: false,
        featured: true
    })

    const [inclusions, setInclusions] = useState({
        poolAccess: true,
        beachAccess: true,
        fbCredit: true,
        spaAccess: true,
        watersports: false,
        kidsClub: false
    })

    const [availableDays, setAvailableDays] = useState([true, true, true, true, true, false, false]) // Mon-Sun

    const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleInclusionChange = (field: string, checked: boolean) => {
        setInclusions(prev => ({ ...prev, [field]: checked }))
    }

    const toggleDay = (index: number) => {
        setAvailableDays(prev => {
            const newDays = [...prev]
            newDays[index] = !newDays[index]
            return newDays
        })
    }

    const handleSave = () => {
        // Handle save logic here
        console.log('Saving experience:', { formData, inclusions, availableDays })
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
                        <Link href="/admin/experiences" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-luxury-gold/10 text-luxury-gold font-semibold transition-colors">
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
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Link href="/admin/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <Link href="/admin/experiences" className="hover:text-primary transition-colors">Experiences</Link>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-luxury-gold font-medium">Edit Experience</span>
                    </div>

                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-[#111418] dark:text-white">Edit Experience: {formData.name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Update details, pricing, availability and media for this listing.</p>
                        </div>
                        <div className="flex gap-3">
                            <Link href="/admin/experiences" className="px-4 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1a2632] border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                Cancel
                            </Link>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 text-sm font-bold text-white bg-luxury-gold hover:bg-amber-600 rounded-lg transition-colors shadow-sm flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg">save</span>
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Main Form */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Basic Information */}
                            <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-[#111418] dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Basic Information</h2>
                                <div className="grid gap-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Experience Name</label>
                                            <input
                                                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none transition-colors"
                                                placeholder="e.g. Day Pass + Spa Access"
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resort</label>
                                            <div className="relative">
                                                <select
                                                    className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none appearance-none cursor-pointer"
                                                    value={formData.resort}
                                                    onChange={(e) => handleInputChange('resort', e.target.value)}
                                                >
                                                    <option>The Palms Turks & Caicos</option>
                                                    <option>Wymara Resort & Villas</option>

                                                    <option>Seven Stars Resort</option>
                                                </select>
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                    <span className="material-symbols-outlined">expand_more</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
                                            <input
                                                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none transition-colors"
                                                placeholder="e.g. Grace Bay"
                                                type="text"
                                                value={formData.location}
                                                onChange={(e) => handleInputChange('location', e.target.value)}
                                            />
                                        </div>
                                        <div className="flex items-end mb-1">
                                            <label className="flex items-center cursor-pointer gap-3 bg-gray-50 dark:bg-[#161f28] p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 w-full">
                                                <div className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        className="sr-only peer"
                                                        type="checkbox"
                                                        checked={formData.adultsOnly}
                                                        onChange={(e) => handleInputChange('adultsOnly', e.target.checked)}
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-luxury-gold"></div>
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 select-none">Adults Only Experience</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Short Description</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none transition-colors h-24 resize-none"
                                            placeholder="Brief summary for listings page..."
                                            value={formData.shortDescription}
                                            onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                                        />
                                        <p className="text-xs text-gray-500 mt-1 text-right">{formData.shortDescription.length}/160 chars</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">About the Experience</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none transition-colors h-48 resize-none"
                                            value={formData.fullDescription}
                                            onChange={(e) => handleInputChange('fullDescription', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* What's Included */}
                            <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-[#111418] dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">What's Included</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {Object.entries(inclusions).map(([key, checked]) => (
                                        <label key={key} className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-[#161f28] cursor-pointer transition-colors">
                                            <input
                                                className="size-5 rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                                                type="checkbox"
                                                checked={checked}
                                                onChange={(e) => handleInclusionChange(key, e.target.checked)}
                                            />
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                {key === 'poolAccess' && 'Pool Access'}
                                                {key === 'beachAccess' && 'Beach Access'}
                                                {key === 'fbCredit' && 'F&B Credit'}
                                                {key === 'spaAccess' && 'Spa Access'}
                                                {key === 'watersports' && 'Watersports'}
                                                {key === 'kidsClub' && 'Kids Club'}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="flex flex-col gap-6">
                            {/* Status & Visibility */}
                            <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-[#111418] dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Status & Visibility</h2>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Publish Status</label>
                                        <select
                                            className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none cursor-pointer"
                                            value={formData.status}
                                            onChange={(e) => handleInputChange('status', e.target.value)}
                                        >
                                            <option value="published">Published</option>
                                            <option value="draft">Draft</option>
                                            <option value="paused">Paused (Out of Stock)</option>
                                        </select>
                                    </div>

                                    <div className="h-px bg-gray-100 dark:bg-gray-700 my-1"></div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trending Badge</span>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                className="sr-only peer"
                                                type="checkbox"
                                                checked={formData.trending}
                                                onChange={(e) => handleInputChange('trending', e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-luxury-gold"></div>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Featured Listing</span>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                className="sr-only peer"
                                                type="checkbox"
                                                checked={formData.featured}
                                                onChange={(e) => handleInputChange('featured', e.target.checked)}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-luxury-gold"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing & Guests */}
                            <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-[#111418] dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Pricing & Guests</h2>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Adult Price</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                <input
                                                    className="w-full h-10 pl-7 pr-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none"
                                                    type="number"
                                                    value={formData.adultPrice}
                                                    onChange={(e) => handleInputChange('adultPrice', parseInt(e.target.value))}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Child Price</label>
                                            <div className="relative">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                                <input
                                                    className="w-full h-10 pl-7 pr-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none"
                                                    type="number"
                                                    value={formData.childPrice}
                                                    onChange={(e) => handleInputChange('childPrice', parseInt(e.target.value))}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Included Credit Amount</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                            <input
                                                className="w-full h-10 pl-7 pr-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none"
                                                type="number"
                                                value={formData.creditAmount}
                                                onChange={(e) => handleInputChange('creditAmount', parseInt(e.target.value))}
                                            />
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-1">Amount credited back to guest for F&B</p>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Service Fee</label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                className="w-20 h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none"
                                                type="number"
                                                value={formData.serviceFee}
                                                onChange={(e) => handleInputChange('serviceFee', parseInt(e.target.value))}
                                            />
                                            <span className="text-sm text-gray-500">%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Availability */}
                            <div className="bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-xl p-6 shadow-sm">
                                <h2 className="text-lg font-bold text-[#111418] dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Availability</h2>
                                <div className="grid gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase mb-2">Available Days</label>
                                        <div className="flex flex-wrap gap-2">
                                            {dayLabels.map((day, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => toggleDay(index)}
                                                    className={`size-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${availableDays[index]
                                                        ? 'bg-luxury-gold text-white'
                                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-600'
                                                        }`}
                                                >
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Capacity Per Day</label>
                                        <input
                                            className="w-full h-10 px-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none"
                                            type="number"
                                            value={formData.capacity}
                                            onChange={(e) => handleInputChange('capacity', parseInt(e.target.value))}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-gray-500 uppercase mb-1">Blackout Dates</label>
                                        <div className="relative">
                                            <input
                                                className="w-full h-10 pl-3 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161f28] text-[#111418] dark:text-white focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold outline-none"
                                                placeholder="Select dates"
                                                type="text"
                                                value={formData.blackoutDates}
                                                onChange={(e) => handleInputChange('blackoutDates', e.target.value)}
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                <span className="material-symbols-outlined text-lg">calendar_today</span>
                                            </span>
                                        </div>
                                    </div>
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