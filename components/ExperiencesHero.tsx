'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

interface ExperiencesHeroProps {
    onSearch?: (query: string) => void
    initialSearchQuery?: string
}

export default function ExperiencesHero({ onSearch, initialSearchQuery }: ExperiencesHeroProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [destination, setDestination] = useState('')
    const [date, setDate] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [filteredSuggestions, setFilteredSuggestions] = useState<any[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const calendarRef = useRef<HTMLDivElement>(null)

    // Experience data for search suggestions
    const experiences = [
        {
            id: 1,
            name: "The Palms Turks & Caicos",
            location: "Grace Bay, Providenciales",
            price: 250,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuzCjvoygQ4AfY2mZH-vEWMJqB-QjSTKTNvnZUtmHEPtI4XEe49DOJbXY7BiZKchlEV9fefmsU0SxsBTkwdl9K9gexIrOncqWS-LW5n2_w3p6SAZ5kuZwgglt9AAhJ85gqf9uxUoYUd2p2fweK5Vode4LXAQ3Yeec1b3sZCyBdEpImnfZfW_VykUI8D5_Pt668FATuePF7zE4rCbflKCwl96EQmxSr-i6Pr6iyNk6x7Ucqh5Fyl2AY58tLsLMAPuLMFWXPfYCFmAwI",
            tags: ["Spa Access", "Pool & Beach"]
        },
        {
            id: 2,
            name: "Wymara Resort & Villas",
            location: "Grace Bay, Lower Bight",
            price: 180,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUupZELwgu8iGZmVUt11HmHGQSBh_foNhyqIDuPc2Nm6tC72ludcQd_SukGcUGt2CO_l0uTnIv4xRv_MOPhxFCmNDVqPMq4ujyL8PUyXpkgVmG6WjnrIMbBCiQ3AWbqtl8snK1bn1yfeP3nFyWD3m4FxaiernnpdyQ-r1njrL-2do0CKVDE3xggVTKki1MDudq8SSJ89aeZbrsT3LSAWq9n6cfRLIGvBYYy5R0XCKOL60NU6KGoWBGx6hZHzD0qZBR9KCFRFJ15tQe",
            tags: ["Cabana", "Dining Credit"]
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
        }
    ]

    // Predefined location suggestions
    const locationSuggestions = [
        'Grace Bay, Providenciales',
        'Long Bay Beach, Providenciales',
        'Turtle Cove, Providenciales',
        'Conch Bar, Middle Caicos',
        'Grace Bay Beach',
        'Long Bay Beach',
        'Sapodilla Bay',
        'Taylor Bay Beach',
        'Chalk Sound',
    ]

    // Set initial values from URL parameters or props
    useEffect(() => {
        const urlDestination = searchParams.get('destination')
        const urlDate = searchParams.get('date')

        // Always prioritize the initialSearchQuery prop over URL params for destination
        // This ensures clearing search works properly
        if (initialSearchQuery !== undefined) {
            setDestination(initialSearchQuery)
        } else if (urlDestination) {
            setDestination(urlDestination)
        }

        if (urlDate) {
            setDate(urlDate)
        }
    }, [searchParams, initialSearchQuery])

    const handleDestinationChange = (value: string) => {
        setDestination(value)

        if (value.length > 0) {
            // Filter experiences by name or location
            const filteredExperiences = experiences.filter(exp =>
                exp.name.toLowerCase().includes(value.toLowerCase()) ||
                exp.location.toLowerCase().includes(value.toLowerCase()) ||
                exp.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
            )

            // Filter location suggestions
            const filteredLocations = locationSuggestions.filter(location =>
                location.toLowerCase().includes(value.toLowerCase())
            )

            // Combine both types of suggestions
            setFilteredSuggestions([...filteredExperiences, ...filteredLocations])
            setShowSuggestions(true)
        } else {
            setShowSuggestions(false)
        }
    }

    const handleSuggestionClick = (suggestion: any) => {
        const suggestionText = typeof suggestion === 'string' ? suggestion : suggestion.name
        setDestination(suggestionText)
        setShowSuggestions(false)
        inputRef.current?.blur()
    }

    const handleDateClick = (selectedDate: string) => {
        setDate(selectedDate)
        setShowCalendar(false)
    }

    const formatDateDisplay = (dateString: string) => {
        if (!dateString) return 'Select date'
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        })
    }

    const generateCalendarDays = () => {
        const today = new Date()
        const currentMonth = today.getMonth()
        const currentYear = today.getFullYear()
        const firstDay = new Date(currentYear, currentMonth, 1)
        const startDate = new Date(firstDay)
        startDate.setDate(startDate.getDate() - firstDay.getDay())

        const days = []
        for (let i = 0; i < 42; i++) {
            const date = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000))
            days.push(date)
        }
        return days
    }

    const handleSearch = () => {
        if (onSearch) {
            onSearch(destination)
        }

        // Build search parameters
        const newSearchParams = new URLSearchParams()
        if (destination) {
            newSearchParams.set('destination', destination)
        }
        if (date) {
            newSearchParams.set('date', date)
        }

        // Update URL without page reload
        const newUrl = `/experiences${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ''}`
        router.replace(newUrl)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (showSuggestions && filteredSuggestions.length > 0) {
                handleSuggestionClick(filteredSuggestions[0])
            } else {
                handleSearch()
            }
        } else if (e.key === 'Escape') {
            setShowSuggestions(false)
        }
    }

    // Close suggestions and calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            if (inputRef.current && !inputRef.current.closest('.relative')?.contains(target)) {
                setShowSuggestions(false)
            }
            if (calendarRef.current && !calendarRef.current.contains(target)) {
                setShowCalendar(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="relative w-full bg-white dark:bg-[#101922] group/design-root overflow-visible">
            <div className="@container">
                <div
                    className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 py-20 lg:py-24 overflow-visible"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
                    }}
                >
                    <div className="flex flex-col gap-2 text-center max-w-[800px] px-4">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                            Exclusive Resort Day Passes
                        </h1>
                        <h2 className="text-white text-sm sm:text-base md:text-lg font-medium leading-normal drop-shadow-sm opacity-90">
                            Unlock access to the most pristine pools, private beaches, and luxury amenities in Turks and Caicos.
                        </h2>
                    </div>

                    {/* Advanced Search Bar - Same as Homepage */}
                    <div className="w-full max-w-4xl mt-6 px-4 relative z-[60]">
                        <div className="glass-panel p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-glass relative overflow-visible">
                            {/* Mobile Layout */}
                            <div className="flex flex-col gap-2 sm:hidden">
                                <div className="relative">
                                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 mr-3">location_on</span>
                                        <div className="flex flex-col items-start justify-center w-full min-w-0">
                                            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Destination</label>
                                            <input
                                                ref={inputRef}
                                                className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 placeholder-gray-400 text-gray-900 dark:text-white leading-tight truncate"
                                                placeholder="Where are you going?"
                                                type="text"
                                                value={destination}
                                                onChange={(e) => handleDestinationChange(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                onFocus={() => destination.length > 0 && setShowSuggestions(true)}
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Suggestions Dropdown */}
                                    {showSuggestions && filteredSuggestions.length > 0 && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-[9999] max-h-60 overflow-y-auto">
                                            {filteredSuggestions.slice(0, 6).map((suggestion, index) => (
                                                <button
                                                    key={index}
                                                    className="w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                                                    onMouseDown={(e) => {
                                                        e.preventDefault()
                                                        handleSuggestionClick(suggestion)
                                                    }}
                                                >
                                                    {typeof suggestion === 'string' ? (
                                                        // Location suggestion
                                                        <div className="flex items-center gap-3 px-4 py-3">
                                                            <span className="material-symbols-outlined text-gray-400 text-sm">location_on</span>
                                                            <span className="text-sm text-gray-900 dark:text-white">{suggestion}</span>
                                                        </div>
                                                    ) : (
                                                        // Experience suggestion with preview
                                                        <div className="flex items-center gap-3 p-3">
                                                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                                                <img
                                                                    src={suggestion.image}
                                                                    alt={suggestion.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                                    {suggestion.name}
                                                                </div>
                                                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                                                    {suggestion.location}
                                                                </div>
                                                                <div className="flex items-center gap-2 mt-1">
                                                                    <span className="text-xs font-bold text-primary">
                                                                        ${suggestion.price}
                                                                    </span>
                                                                    <div className="flex gap-1">
                                                                        {suggestion.tags.slice(0, 2).map((tag: string) => (
                                                                            <span key={tag} className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded">
                                                                                {tag}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-2">
                                    <div className="relative">
                                        <button
                                            onClick={() => {
                                                setShowCalendar(!showCalendar)
                                            }}
                                            className="w-full flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors text-left"
                                        >
                                            <span className="material-symbols-outlined text-gray-400 mr-3 flex-shrink-0">calendar_month</span>
                                            <div className="flex flex-col items-start w-full">
                                                <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Date</label>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {formatDateDisplay(date)}
                                                </span>
                                            </div>
                                        </button>

                                        {/* Mobile Calendar Popup */}
                                        {showCalendar && (
                                            <div ref={calendarRef} className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-[9999] p-4">
                                                <div className="text-center mb-4">
                                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                                                        {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-7 gap-1 mb-2">
                                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                        <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
                                                            {day}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="grid grid-cols-7 gap-1">
                                                    {generateCalendarDays().map((day, index) => {
                                                        const isCurrentMonth = day.getMonth() === new Date().getMonth()
                                                        const isToday = day.toDateString() === new Date().toDateString()
                                                        const isPast = day < new Date(new Date().setHours(0, 0, 0, 0))
                                                        const isSelected = date === day.toISOString().split('T')[0]

                                                        return (
                                                            <button
                                                                key={index}
                                                                onMouseDown={(e) => {
                                                                    e.preventDefault()
                                                                    if (!isPast) {
                                                                        const year = day.getFullYear()
                                                                        const month = String(day.getMonth() + 1).padStart(2, '0')
                                                                        const dayNum = String(day.getDate()).padStart(2, '0')
                                                                        const dateString = `${year}-${month}-${dayNum}`
                                                                        handleDateClick(dateString)
                                                                    }
                                                                }}
                                                                disabled={isPast}
                                                                className={`
                                                                    text-xs py-2 rounded transition-colors touch-manipulation
                                                                    ${!isCurrentMonth ? 'text-gray-300 dark:text-gray-600' : ''}
                                                                    ${isToday ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : ''}
                                                                    ${isSelected ? 'bg-primary text-white' : ''}
                                                                    ${isPast ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer active:bg-gray-200 dark:active:bg-gray-600'}
                                                                    ${!isPast && !isSelected && !isToday ? 'text-gray-900 dark:text-white' : ''}
                                                                `}
                                                            >
                                                                {day.getDate()}
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={handleSearch}
                                    className="bg-gradient-to-r from-primary to-coral-500 hover:from-blue-600 hover:to-coral-600 text-white font-bold rounded-lg px-6 py-3 transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">search</span>
                                    <span>Search</span>
                                </button>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:flex flex-col md:flex-row gap-2">
                                <div className="relative flex-[2]">
                                    <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors">
                                        <span className="material-symbols-outlined text-gray-400 mr-3">location_on</span>
                                        <div className="flex flex-col items-start justify-center w-full min-w-0">
                                            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Destination</label>
                                            <input
                                                ref={inputRef}
                                                className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 placeholder-gray-400 text-gray-900 dark:text-white leading-tight truncate"
                                                placeholder="Where are you going?"
                                                type="text"
                                                value={destination}
                                                onChange={(e) => handleDestinationChange(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                onFocus={() => destination.length > 0 && setShowSuggestions(true)}
                                            />
                                        </div>
                                    </div>

                                    {/* Desktop Suggestions Dropdown */}
                                    {showSuggestions && filteredSuggestions.length > 0 && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] max-h-80 overflow-y-auto">
                                            {filteredSuggestions.slice(0, 6).map((suggestion, index) => (
                                                <button
                                                    key={index}
                                                    className="w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0 first:rounded-t-xl last:rounded-b-xl"
                                                    onMouseDown={(e) => {
                                                        e.preventDefault()
                                                        handleSuggestionClick(suggestion)
                                                    }}
                                                >
                                                    {typeof suggestion === 'string' ? (
                                                        // Location suggestion
                                                        <div className="flex items-center gap-3 px-4 py-3">
                                                            <span className="material-symbols-outlined text-gray-400 text-sm">location_on</span>
                                                            <span className="text-sm text-gray-900 dark:text-white">{suggestion}</span>
                                                        </div>
                                                    ) : (
                                                        // Experience suggestion with preview
                                                        <div className="flex items-center gap-4 p-4">
                                                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                                <img
                                                                    src={suggestion.image}
                                                                    alt={suggestion.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                                    {suggestion.name}
                                                                </div>
                                                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1">
                                                                    {suggestion.location}
                                                                </div>
                                                                <div className="flex items-center gap-3 mt-2">
                                                                    <span className="text-sm font-bold text-primary">
                                                                        ${suggestion.price} / guest
                                                                    </span>
                                                                    <div className="flex gap-1">
                                                                        {suggestion.tags.slice(0, 2).map((tag: string) => (
                                                                            <span key={tag} className="text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                                                                                {tag}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="relative flex-1">
                                    <button
                                        onClick={() => setShowCalendar(!showCalendar)}
                                        className="w-full flex items-center bg-white dark:bg-gray-800 rounded-xl px-4 py-3 border border-transparent focus-within:border-primary/50 transition-colors text-left"
                                    >
                                        <span className="material-symbols-outlined text-gray-400 mr-3 flex-shrink-0">calendar_month</span>
                                        <div className="flex flex-col items-start w-full">
                                            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Date</label>
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                {formatDateDisplay(date)}
                                            </span>
                                        </div>
                                    </button>

                                    {/* Desktop Calendar Popup */}
                                    {showCalendar && (
                                        <div ref={calendarRef} className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-[9999] p-4 min-w-[300px]">
                                            <div className="text-center mb-4">
                                                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                                                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-7 gap-1 mb-2">
                                                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                    <div key={day} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
                                                        {day}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-7 gap-1">
                                                {generateCalendarDays().map((day, index) => {
                                                    const isCurrentMonth = day.getMonth() === new Date().getMonth()
                                                    const isToday = day.toDateString() === new Date().toDateString()
                                                    const isPast = day < new Date(new Date().setHours(0, 0, 0, 0))
                                                    const isSelected = date === day.toISOString().split('T')[0]

                                                    return (
                                                        <button
                                                            key={index}
                                                            onMouseDown={(e) => {
                                                                e.preventDefault()
                                                                if (!isPast) {
                                                                    const year = day.getFullYear()
                                                                    const month = String(day.getMonth() + 1).padStart(2, '0')
                                                                    const dayNum = String(day.getDate()).padStart(2, '0')
                                                                    const dateString = `${year}-${month}-${dayNum}`
                                                                    handleDateClick(dateString)
                                                                }
                                                            }}
                                                            disabled={isPast}
                                                            className={`
                                                                text-sm py-2 rounded transition-colors
                                                                ${!isCurrentMonth ? 'text-gray-300 dark:text-gray-600' : ''}
                                                                ${isToday ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : ''}
                                                                ${isSelected ? 'bg-primary text-white' : ''}
                                                                ${isPast ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'}
                                                                ${!isPast && !isSelected && !isToday ? 'text-gray-900 dark:text-white' : ''}
                                                            `}
                                                        >
                                                            {day.getDate()}
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={handleSearch}
                                    className="bg-gradient-to-r from-primary to-coral-500 hover:from-blue-600 hover:to-coral-600 text-white font-bold rounded-xl px-6 sm:px-8 py-3 md:py-0 transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">search</span>
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}