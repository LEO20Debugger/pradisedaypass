'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AddExperience() {

    // Empty form data for new experience
    const [formData, setFormData] = useState({
        name: '',
        resort: 'The Palms Turks & Caicos',
        location: '',
        adultsOnly: false,
        shortDescription: '',
        fullDescription: '',
        adultPrice: 0,
        childPrice: 0,
        creditAmount: 0,
        serviceFee: 12,
        capacity: 20,
        blackoutDates: '',
        status: 'draft',
        trending: false,
        featured: false
    })

    const [inclusions, setInclusions] = useState({
        poolAccess: false,
        beachAccess: false,
        fbCredit: false,
        spaAccess: false,
        watersports: false,
        kidsClub: false
    })

    const [availableDays, setAvailableDays] = useState([true, true, true, true, true, true, true]) // All days available by default

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
        console.log('Creating new experience:', { formData, inclusions, availableDays })
    }

    return (
        <main className="flex-1 flex flex-col gap-8 px-4 py-8 lg:px-8 lg:py-8 overflow-x-hidden">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Link href="/admin/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <Link href="/admin/experiences" className="hover:text-primary transition-colors">Experiences</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-luxury-gold font-medium">Add New Experience</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[#111418] dark:text-white">Add New Experience</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Create a new resort day pass experience for your inventory.</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/admin/experiences" className="px-4 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-[#1a2632] border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Cancel
                    </Link>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 text-sm font-bold text-white bg-luxury-gold hover:bg-amber-600 rounded-lg transition-colors shadow-sm flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-lg">add</span>
                        Create Experience
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
                                    placeholder="Detailed description of the experience, what's included, and what guests can expect..."
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
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
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
                                            placeholder="0"
                                            value={formData.adultPrice || ''}
                                            onChange={(e) => handleInputChange('adultPrice', parseInt(e.target.value) || 0)}
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
                                            placeholder="0"
                                            value={formData.childPrice || ''}
                                            onChange={(e) => handleInputChange('childPrice', parseInt(e.target.value) || 0)}
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
                                        placeholder="0"
                                        value={formData.creditAmount || ''}
                                        onChange={(e) => handleInputChange('creditAmount', parseInt(e.target.value) || 0)}
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
                                        onChange={(e) => handleInputChange('serviceFee', parseInt(e.target.value) || 0)}
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
                                    onChange={(e) => handleInputChange('capacity', parseInt(e.target.value) || 0)}
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
    )
}
