'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

interface ExperiencesContentProps {
    searchQuery?: string
    onSearchChange?: (query: string) => void
}

export default function ExperiencesContent({ searchQuery: propSearchQuery, onSearchChange }: ExperiencesContentProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('recommended')
    const [showSortDropdown, setShowSortDropdown] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState({
        locations: [] as string[],
        maxPrice: 500 as number,
        inclusions: [] as string[]
    })

    const [showAll, setShowAll] = useState(false)

    // Handle URL search parameters and prop changes
    useEffect(() => {
        const destination = searchParams.get('destination')
        const date = searchParams.get('date')
        const guests = searchParams.get('guests')

        if (destination) {
            setSearchQuery(destination)
            // Notify parent component about the search query from URL
            if (onSearchChange) {
                onSearchChange(destination)
            }
        } else {
            // Clear search query when no destination parameter
            setSearchQuery('')
            if (onSearchChange) {
                onSearchChange('')
            }
        }
    }, [searchParams, onSearchChange])

    // Handle search from hero component
    useEffect(() => {
        if (propSearchQuery !== undefined && propSearchQuery !== searchQuery) {
            setSearchQuery(propSearchQuery)
        }
    }, [propSearchQuery, searchQuery])

    // Close sort dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element
            if (!target.closest('.sort-dropdown')) {
                setShowSortDropdown(false)
            }
        }

        if (showSortDropdown) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showSortDropdown])

    const allExperiences = [
        {
            id: 1,
            name: "The Palms Turks & Caicos",
            location: "Grace Bay, Providenciales",
            price: 250,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuzCjvoygQ4AfY2mZH-vEWMJqB-QjSTKTNvnZUtmHEPtI4XEe49DOJbXY7BiZKchlEV9fefmsU0SxsBTkwdl9K9gexIrOncqWS-LW5n2_w3p6SAZ5kuZwgglt9AAhJ85gqf9uxUoYUd2p2fweK5Vode4LXAQ3Yeec1b3sZCyBdEpImnfZfW_VykUI8D5_Pt668FATuePF7zE4rCbflKCwl96EQmxSr-i6Pr6iyNk6x7Ucqh5Fyl2AY58tLsLMAPuLMFWXPfYCFmAwI",
            tags: ["Spa Access", "Pool & Beach"],
            badge: "Best Seller",
            badgeStyle: "bg-white/90 text-primary"
        },
        {
            id: 2,
            name: "Wymara Resort & Villas",
            location: "Grace Bay, Lower Bight",
            price: 180,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUupZELwgu8iGZmVUt11HmHGQSBh_foNhyqIDuPc2Nm6tC72ludcQd_SukGcUGt2CO_l0uTnIv4xRv_MOPhxFCmNDVqPMq4ujyL8PUyXpkgVmG6WjnrIMbBCiQ3AWbqtl8snK1bn1yfeP3nFyWD3m4FxaiernnpdyQ-r1njrL-2do0CKVDE3xggVTKki1MDudq8SSJ89aeZbrsT3LSAWq9n6cfRLIGvBYYy5R0XCKOL60NU6KGoWBGx6hZHzD0qZBR9KCFRFJ15tQe",
            tags: ["Cabana", "Dining Credit"],
            badge: "Adults Only",
            badgeStyle: "bg-[#111418]/80 text-white"
        },
        {
            id: 3,
            name: "Seven Stars Resort",
            location: "Grace Bay, Providenciales",
            price: 300,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJrT11p0gc86-RSLkOK04C7dGa4nhd0ZP5gFggOycspWlrON4kuvEJabnZj__HhqY7gdRT-Nx3TtzBlvbVP5BPUKaZsRZeLQhnU8vzQZcblVR3zgkcfIDRLAY2gsGjurydHWKk-Qendn5Zz1IGM4ZApR8dQ0c-n1mVu4UapFB_p14o__F87CYqLVXKOYD3jB9QVlr6UXE1t81_ED436lizDZ-yvPXO1dpH-3BvjENac5fsBsbmLc7xOrip_xy0N7pdXbqD0uvtVYff",
            tags: ["All-Inclusive", "Water Sports"]
        },
        {
            id: 5,
            name: "The Shore Club",
            location: "Long Bay Beach, Providenciales",
            price: 150,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPhn2TmOPFNq6ceXNRXtwsfn56TeW2CwMACrNbtEW2Q409M_6ckRefgk0rrLrEz6SU13wePNYYWLQlEafvJh3GHZmabO03eFSDqO6KY7f3O9yLg4zsYNJK7Hty2V_H15X_T4nufb2hTiHXdaXDIVBN1eUUqsXQcAPKPGVdKpl3e9tPipJwpzOVzl--jmAq_0DTxZ5Pn-CW-JVSjFs3MiprvUBCXSFdkYq_O1V-f5pgKtTz2Z45RIxaqBpz1Rvs6HF1mbUir-59Lew6",
            tags: ["Pool Access", "Towel Service"]
        },
        {
            id: 7,
            name: "The Ritz-Carlton",
            location: "Grace Bay, Providenciales",
            price: 280,
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            tags: ["Luxury Spa", "Fine Dining"]
        },
        {
            id: 8,
            name: "Beaches Resort",
            location: "Lower Bight, Providenciales",
            price: 195,
            image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            tags: ["Water Park", "Kids Club"]
        },
        {
            id: 9,
            name: "Conch Bar Beach Resort",
            location: "Conch Bar, Middle Caicos",
            price: 125,
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            tags: ["Eco-Tours", "Fishing"]
        },
        {
            id: 10,
            name: "Club Med",
            location: "Grace Bay, Providenciales",
            price: 320,
            image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyLdhN4D4aHk3PpS_N4vuyAVeVhbMiMD2hwsDk-Q0Ok-ztVMQH4OmcGk6_GyzbeCNiLKWrRgeEyYZjVIbU99VBTmNU3Mgsn0fT-PUATk1t2mXVvFXtxwInkFocSep_1uEJpOR7L=s1360-w1360-h1020-rw",
            tags: ["All-Inclusive", "Adults Only", "Water Sports"],
            badge: "Premium",
            badgeStyle: "bg-luxury-gold text-white"
        }
    ]

    // Filter experiences based on search query AND selected filters
    const filteredExperiences = allExperiences.filter(experience => {
        // Search query filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            const matchesSearch = (
                experience.name.toLowerCase().includes(query) ||
                experience.location.toLowerCase().includes(query) ||
                experience.tags.some(tag => tag.toLowerCase().includes(query))
            )
            if (!matchesSearch) return false
        }

        // Location filter
        if (selectedFilters.locations.length > 0) {
            const matchesLocation = selectedFilters.locations.some(location =>
                experience.location.toLowerCase().includes(location.toLowerCase())
            )
            if (!matchesLocation) return false
        }

        // Price filter
        if (experience.price > selectedFilters.maxPrice) {
            return false
        }

        // Inclusions filter
        if (selectedFilters.inclusions.length > 0) {
            const matchesInclusions = selectedFilters.inclusions.some(inclusion =>
                experience.tags.some(tag => tag.toLowerCase().includes(inclusion.toLowerCase()))
            )
            if (!matchesInclusions) return false
        }

        return true
    })

    // Sort experiences based on selected sort option
    const sortedExperiences = [...filteredExperiences].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price
            case 'price-high':
                return b.price - a.price
            case 'name':
                return a.name.localeCompare(b.name)
            case 'location':
                return a.location.localeCompare(b.location)
            case 'recommended':
            default:
                // Recommended sorting: prioritize badges, then price
                const aHasBadge = a.badge ? 1 : 0
                const bHasBadge = b.badge ? 1 : 0
                if (aHasBadge !== bHasBadge) {
                    return bHasBadge - aHasBadge // Badges first
                }
                return a.price - b.price // Then by price ascending
        }
    })

    // Show first 6 experiences initially, all on mobile or when showAll is true
    const experiences = showAll ? sortedExperiences : sortedExperiences.slice(0, 6)
    const totalExperiences = sortedExperiences.length

    const clearSearch = () => {
        setSearchQuery('')
        if (onSearchChange) {
            onSearchChange('')
        }
        // Update URL to remove search parameters
        router.replace('/experiences')
    }

    // Dynamically extract unique locations and inclusions from experience data
    const locations = [
        "Grace Bay",
        "Long Bay Beach",
        "Lower Bight",
        "Conch Bar"
    ]

    // Get all unique tags from experiences, excluding specific ones
    const excludedTags = ["All-Inclusive", "Cabana", "Dining Credit", "Eco-Tours", "Fine Dining", "Fishing", "Kids Club"]
    const inclusions = Array.from(new Set(allExperiences.flatMap(exp => exp.tags)))
        .filter(tag => !excludedTags.includes(tag))
        .sort()

    // Handler functions for interactive filters
    const handleLocationChange = (location: string, checked: boolean) => {
        setSelectedFilters(prev => ({
            ...prev,
            locations: checked
                ? [...prev.locations, location]
                : prev.locations.filter(l => l !== location)
        }))
    }

    const handleMaxPriceChange = (newMaxPrice: number) => {
        setSelectedFilters(prev => ({
            ...prev,
            maxPrice: newMaxPrice
        }))
    }

    const handleInclusionChange = (inclusion: string) => {
        setSelectedFilters(prev => ({
            ...prev,
            inclusions: prev.inclusions.includes(inclusion)
                ? prev.inclusions.filter(i => i !== inclusion)
                : [...prev.inclusions, inclusion]
        }))
    }

    // Sorting options
    const sortOptions = [
        { value: 'recommended', label: 'Recommended' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'name', label: 'Name: A to Z' },
        { value: 'location', label: 'Location' }
    ]

    const handleSortChange = (newSortBy: string) => {
        setSortBy(newSortBy)
        setShowSortDropdown(false)
    }

    const getSortLabel = () => {
        return sortOptions.find(option => option.value === sortBy)?.label || 'Recommended'
    }

    const resetAllFilters = () => {
        setSelectedFilters({
            locations: [],
            maxPrice: 500,
            inclusions: []
        })
        setSearchQuery('')
    }

    return (
        <div className="flex-1 w-full max-w-[1280px] mx-auto px-4 py-8 lg:px-8 lg:py-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-[280px] shrink-0 flex flex-col gap-8">
                    {/* Filter Header mobile toggle */}
                    <div className="flex items-center justify-between lg:hidden mb-2">
                        <h2 className="text-lg font-bold">Filters</h2>
                        <button
                            className="text-primary font-medium text-sm"
                            onClick={resetAllFilters}
                        >
                            Reset All
                        </button>
                    </div>

                    {/* Search Results Info */}
                    {searchQuery && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                                Searching for: "{searchQuery}"
                            </p>
                            <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                                {totalExperiences} result{totalExperiences !== 1 ? 's' : ''} found
                            </p>
                            <button
                                onClick={clearSearch}
                                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 mt-2 underline"
                            >
                                Clear search
                            </button>
                        </div>
                    )}

                    {/* Location Filter */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Location</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            {locations.map((location) => (
                                <label key={location} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="size-5 rounded border-[#dbe0e6] text-primary focus:ring-primary/20 dark:bg-gray-800 dark:border-gray-700"
                                        checked={selectedFilters.locations.includes(location)}
                                        onChange={(e) => handleLocationChange(location, e.target.checked)}
                                    />
                                    <span className="text-[#111418] dark:text-gray-300 text-sm font-normal group-hover:text-primary transition-colors">
                                        {location}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <hr className="border-[#f0f2f4] dark:border-gray-800" />

                    {/* Max Price Filter */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Max Price</h3>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                <span>Up to ${selectedFilters.maxPrice}</span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="600"
                                value={selectedFilters.maxPrice}
                                onChange={(e) => handleMaxPriceChange(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider-thumb"
                            />
                        </div>
                    </div>

                    <hr className="border-[#f0f2f4] dark:border-gray-800" />

                    {/* Inclusions / Amenities Filter */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Inclusions</h3>
                        <div className="flex flex-wrap gap-2">
                            {inclusions.map((inclusion) => (
                                <button
                                    key={inclusion}
                                    onClick={() => handleInclusionChange(inclusion)}
                                    className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg border pl-3 pr-3 transition-colors ${selectedFilters.inclusions.includes(inclusion)
                                        ? "bg-primary text-white border-primary"
                                        : "bg-[#f0f2f4] dark:bg-gray-800 text-[#111418] dark:text-gray-300 border-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <span className={`text-xs ${selectedFilters.inclusions.includes(inclusion) ? "font-bold" : "font-medium"} leading-normal`}>
                                        {inclusion}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Listing Grid Section */}
                <main className="flex-1 flex flex-col gap-6">
                    {/* Sorting & Count Bar */}
                    <div className="flex items-center justify-between">
                        <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
                            Showing {experiences.length} of {totalExperiences} exclusive offers
                            {searchQuery && ` for "${searchQuery}"`}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[#111418] dark:text-gray-300 hidden sm:block">Sort by:</span>
                            <div className="relative sort-dropdown">
                                <button
                                    onClick={() => setShowSortDropdown(!showSortDropdown)}
                                    className="flex items-center gap-2 text-sm font-bold text-[#111418] dark:text-white bg-transparent hover:text-primary transition-colors"
                                >
                                    {getSortLabel()}
                                    <span className={`material-symbols-outlined text-lg transition-transform ${showSortDropdown ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>

                                {/* Sort Dropdown */}
                                {showSortDropdown && (
                                    <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[200px]">
                                        {sortOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => handleSortChange(option.value)}
                                                className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${sortBy === option.value
                                                    ? 'bg-primary/10 text-primary font-medium'
                                                    : 'text-gray-900 dark:text-white'
                                                    }`}
                                            >
                                                {option.label}
                                                {sortBy === option.value && (
                                                    <span className="material-symbols-outlined text-sm ml-2 float-right">check</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* No Results Message */}
                    {totalExperiences === 0 && searchQuery && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <span className="material-symbols-outlined text-6xl">search_off</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                                No experiences found
                            </h3>
                            <p className="text-gray-500 dark:text-gray-500 mb-4">
                                Try searching for a different resort, location, or amenity
                            </p>
                            <button
                                onClick={clearSearch}
                                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Show all experiences
                            </button>
                        </div>
                    )}

                    {/* Mobile Scroll Hint */}
                    {totalExperiences > 0 && (
                        <div className="sm:hidden flex items-center justify-center gap-2 text-[#617589] dark:text-gray-400 text-xs mb-2">
                            <span className="material-symbols-outlined text-sm">swipe</span>
                            <span>Swipe to see more experiences</span>
                        </div>
                    )}

                    {/* Grid - Desktop */}
                    {totalExperiences > 0 && (
                        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                            {experiences.map((experience) => (
                                <div key={experience.id} className="group flex flex-col rounded-xl bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="relative h-48 sm:h-56 overflow-hidden">
                                        {experience.badge && (
                                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                                                <span className={`inline-flex items-center rounded-md backdrop-blur-sm px-2 py-1 text-xs font-bold shadow-sm ${experience.badgeStyle}`}>
                                                    {experience.badge}
                                                </span>
                                            </div>
                                        )}
                                        <img
                                            alt={experience.name}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            src={experience.image}
                                        />
                                        <button className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 size-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-colors">
                                            <span className="material-symbols-outlined text-lg">favorite</span>
                                        </button>
                                    </div>
                                    <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3 sm:gap-4">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-start justify-between gap-2">
                                                <a
                                                    href={`/experiences/${experience.id}`}
                                                    className="text-[#111418] dark:text-white text-base sm:text-lg font-bold leading-tight group-hover:text-primary transition-colors hover:text-primary"
                                                >
                                                    {experience.name}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-1 text-[#617589] dark:text-gray-400">
                                                <span className="material-symbols-outlined text-sm">location_on</span>
                                                <p className="text-xs font-medium">{experience.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {experience.tags.map((tag) => (
                                                <span key={tag} className="bg-[#f0f2f4] dark:bg-gray-800 text-[#617589] dark:text-gray-300 text-[10px] font-bold px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="mt-auto pt-2 border-t border-[#f0f2f4] dark:border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                            <div className="flex flex-col">
                                                <p className="text-[#617589] dark:text-gray-400 text-xs">Starting from</p>
                                                <p className="text-[#111418] dark:text-white text-lg font-bold">
                                                    ${experience.price} <span className="text-xs font-normal text-[#617589]">/ guest</span>
                                                </p>
                                            </div>
                                            <a
                                                href={`/experiences/${experience.id}`}
                                                className="rounded-lg bg-primary px-4 py-2.5 sm:py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors text-center"
                                            >
                                                Book Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Horizontal Scroll - Mobile */}
                    {totalExperiences > 0 && (
                        <div className="sm:hidden overflow-x-auto scrollbar-hide">
                            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                                {experiences.map((experience) => (
                                    <div key={experience.id} className="group flex flex-col rounded-xl bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 w-[280px] flex-shrink-0">
                                        <div className="relative h-44 overflow-hidden">
                                            {experience.badge && (
                                                <div className="absolute top-2 left-2 z-10">
                                                    <span className={`inline-flex items-center rounded-md backdrop-blur-sm px-2 py-1 text-xs font-bold shadow-sm ${experience.badgeStyle}`}>
                                                        {experience.badge}
                                                    </span>
                                                </div>
                                            )}
                                            <img
                                                alt={experience.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                src={experience.image}
                                            />
                                            <button className="absolute bottom-2 right-2 size-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-white transition-colors">
                                                <span className="material-symbols-outlined text-base">favorite</span>
                                            </button>
                                        </div>
                                        <div className="flex flex-col flex-1 p-4 gap-3">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-start justify-between gap-2">
                                                    <a
                                                        href={`/experiences/${experience.id}`}
                                                        className="text-[#111418] dark:text-white text-base font-bold leading-tight group-hover:text-primary transition-colors hover:text-primary"
                                                    >
                                                        {experience.name}
                                                    </a>
                                                </div>
                                                <div className="flex items-center gap-1 text-[#617589] dark:text-gray-400">
                                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                                    <p className="text-xs font-medium">{experience.location}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {experience.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag} className="bg-[#f0f2f4] dark:bg-gray-800 text-[#617589] dark:text-gray-300 text-[10px] font-bold px-2 py-1 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-auto pt-2 border-t border-[#f0f2f4] dark:border-gray-700 flex flex-col gap-2">
                                                <div className="flex flex-col">
                                                    <p className="text-[#617589] dark:text-gray-400 text-xs">Starting from</p>
                                                    <p className="text-[#111418] dark:text-white text-lg font-bold">
                                                        ${experience.price} <span className="text-xs font-normal text-[#617589]">/ guest</span>
                                                    </p>
                                                </div>
                                                <a
                                                    href={`/experiences/${experience.id}`}
                                                    className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors text-center"
                                                >
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Pagination / Load More - Desktop Only */}
                    {!showAll && experiences.length < totalExperiences && totalExperiences > 0 && (
                        <div className="hidden sm:flex items-center justify-center mt-8 mb-4">
                            <button
                                onClick={() => setShowAll(true)}
                                className="flex items-center gap-2 rounded-full border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2632] px-6 py-3 text-sm font-bold text-[#111418] dark:text-white hover:bg-[#f0f2f4] dark:hover:bg-gray-800 transition-colors"
                            >
                                Load More Experiences ({totalExperiences - experiences.length} remaining)
                                <span className="material-symbols-outlined text-sm">arrow_downward</span>
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}