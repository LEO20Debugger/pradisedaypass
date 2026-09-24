'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { experiences, type Experience } from '@/lib/experiences'

type Suggestion = Experience | string

interface SearchBarProps {
    /** 'push' navigates to /experiences (home page); 'replace' updates the URL in place (experiences page) */
    navigation?: 'push' | 'replace'
    initialDestination?: string
    initialDate?: string
    onSearch?: (query: string) => void
}

export default function SearchBar({ navigation = 'push', initialDestination = '', initialDate = '', onSearch }: SearchBarProps) {
    const router = useRouter()
    const [destination, setDestination] = useState(initialDestination)
    const [date, setDate] = useState(initialDate)
    const [activeSection, setActiveSection] = useState<'none' | 'where' | 'date'>('none')
    const [showMobileSearchModal, setShowMobileSearchModal] = useState(false)
    const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const calendarRef = useRef<HTMLDivElement>(null)
    const modalContentRef = useRef<HTMLDivElement>(null)

    // Keep fields in sync when the parent's values change (e.g. URL updated or search cleared)
    useEffect(() => {
        setDestination(initialDestination)
    }, [initialDestination])

    useEffect(() => {
        if (initialDate) setDate(initialDate)
    }, [initialDate])

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

    const handleDestinationChange = (value: string) => {
        setDestination(value)

        if (value.length > 0) {
            // Filter experiences by name or location
            const matchingExperiences = experiences.filter(exp =>
                exp.name.toLowerCase().includes(value.toLowerCase()) ||
                exp.location.toLowerCase().includes(value.toLowerCase()) ||
                exp.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
            )

            // Filter location suggestions
            const filteredLocations = locationSuggestions.filter(location =>
                location.toLowerCase().includes(value.toLowerCase())
            )

            // Combine both types of suggestions
            setFilteredSuggestions([...matchingExperiences, ...filteredLocations])
            // Keep the where section open when typing
            if (activeSection !== 'where') {
                setActiveSection('where')
            }
        } else {
            setFilteredSuggestions([])
        }
    }

    const handleSuggestionClick = (suggestion: Suggestion) => {
        const suggestionText = typeof suggestion === 'string' ? suggestion : suggestion.name
        setDestination(suggestionText)
        setActiveSection('none')
        inputRef.current?.blur()
    }

    const handleDateClick = (selectedDate: string) => {
        setDate(selectedDate)
        setActiveSection('none')
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
        onSearch?.(destination)

        // Build search parameters
        const params = new URLSearchParams()
        if (destination) {
            params.set('destination', destination)
        }
        if (date) {
            params.set('date', date)
        }

        const url = `/experiences${params.toString() ? `?${params.toString()}` : ''}`
        // On the experiences page just update the URL; elsewhere navigate there
        if (navigation === 'replace') {
            router.replace(url)
        } else {
            router.push(url)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (activeSection === 'where' && filteredSuggestions.length > 0) {
                const firstSuggestion = filteredSuggestions[0]
                handleSuggestionClick(firstSuggestion)
            } else {
                handleSearch()
            }
        } else if (e.key === 'Escape') {
            setActiveSection('none')
        }
    }

    // Close suggestions and calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            
            // Only close if clicking outside the modal content area
            if (modalContentRef.current && !modalContentRef.current.contains(target)) {
                setActiveSection('none')
            }
        }

        // Only add listener when modal is open
        if (showMobileSearchModal) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [showMobileSearchModal])

    return (
        <>
            <div className="glass-panel p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-glass relative overflow-visible">
                {/* Mobile Layout - Simple Search Bar */}
                <div className="sm:hidden">
                    <button
                        onClick={() => {
                            setShowMobileSearchModal(true)
                            setActiveSection('where')
                        }}
                        className="w-full flex items-center bg-white dark:bg-gray-800 rounded-lg px-4 py-3 border border-transparent hover:border-primary/50 transition-colors text-left"
                    >
                        <span className="material-symbols-outlined text-gray-400 mr-3">search</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">Start your search</span>
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
                                    onFocus={() => destination.length > 0 && setActiveSection('where')}
                                />
                            </div>
                        </div>

                        {/* Desktop Suggestions Dropdown */}
                        {activeSection === 'where' && filteredSuggestions.length > 0 && (
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
                                                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={suggestion.image}
                                                        alt={suggestion.name}
                                                        className="object-cover"
                                                        fill
                                                        sizes="64px"
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
                            onClick={() => setActiveSection(activeSection === 'date' ? 'none' : 'date')}
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
                        {activeSection === 'date' && (
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
                        className="bg-primary hover:bg-blue-600 text-white font-bold rounded-xl px-6 sm:px-8 py-3 md:py-0 transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                        <span className="material-symbols-outlined">search</span>
                        <span>Search</span>
                    </button>
                </div>
            </div>


            {/* Mobile Search Modal */}
            {showMobileSearchModal && (
                <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm sm:hidden">
                    <div className="flex flex-col min-h-screen p-4 pt-16 pb-8">
                        {/* Close Button - Fixed at top */}
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setShowMobileSearchModal(false)}
                                className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                            >
                                <span className="material-symbols-outlined text-white text-xl">close</span>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div ref={modalContentRef} className="flex-1 flex flex-col justify-center space-y-4 max-w-sm mx-auto w-full">
                            {/* Where Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                                {activeSection === 'where' ? (
                                    // Expanded Where Section
                                    <div className="p-4 max-h-[60vh] overflow-y-auto">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Where?</h3>
                                        
                                        {/* Search Input */}
                                        <div className="relative mb-4">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
                                            <input
                                                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white placeholder-gray-500"
                                                placeholder="Search location"
                                                type="text"
                                                value={destination}
                                                onChange={(e) => handleDestinationChange(e.target.value)}
                                                autoFocus
                                            />
                                        </div>

                                        {/* Search Suggestions */}
                                        {destination && filteredSuggestions.length > 0 && (
                                            <div className="mb-4 space-y-2">
                                                {filteredSuggestions.slice(0, 4).map((suggestion, index) => (
                                                    <button
                                                        key={index}
                                                        className="w-full text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-lg p-3"
                                                        onClick={() => {
                                                            handleSuggestionClick(suggestion)
                                                        }}
                                                    >
                                                        {typeof suggestion === 'string' ? (
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center flex-shrink-0">
                                                                    <span className="material-symbols-outlined text-white text-sm">location_on</span>
                                                                </div>
                                                                <span className="text-sm text-gray-900 dark:text-white">{suggestion}</span>
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center flex-shrink-0">
                                                                    <span className="material-symbols-outlined text-white text-sm">location_on</span>
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                                        {suggestion.name}
                                                                    </div>
                                                                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                                                        {suggestion.location}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Popular Destinations - Only show when not searching */}
                                        {!destination && (
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Popular destinations</h4>
                                                <div className="space-y-3">
                                                    {experiences.slice(0, 4).map((experience, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                setDestination(experience.name)
                                                                setActiveSection('none')
                                                            }}
                                                            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                                                        >
                                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                                index % 3 === 0 ? 'bg-amber-600' : 
                                                                index % 3 === 1 ? 'bg-blue-600' : 'bg-gray-600'
                                                            }`}>
                                                                <span className="material-symbols-outlined text-white">location_on</span>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                                    {experience.name}
                                                                </div>
                                                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                                                    {experience.location}
                                                                </div>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    // Collapsed Where Button
                                    <button
                                        onClick={() => setActiveSection('where')}
                                        className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-gray-900 dark:text-white">Where?</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {destination || 'Search location'}
                                            </span>
                                        </div>
                                    </button>
                                )}
                            </div>

                            {/* Date Section */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                                {activeSection === 'date' ? (
                                    // Expanded Date Section
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Date</h3>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => {
                                                        // Previous month logic can be added here
                                                    }}
                                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">chevron_left</span>
                                                </button>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white min-w-[80px] text-center">
                                                    {new Date().toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' })}
                                                </span>
                                                <button
                                                    onClick={() => {
                                                        // Next month logic can be added here
                                                    }}
                                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-gray-600 dark:text-gray-400">chevron_right</span>
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-7 gap-1 mb-2">
                                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                                                <div key={`day-header-${index}`} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
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
                                                        onClick={() => {
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
                                                            text-sm py-3 rounded-lg transition-colors font-medium
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
                                ) : (
                                    // Collapsed Date Button
                                    <button
                                        onClick={() => setActiveSection('date')}
                                        className="w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-bold text-gray-900 dark:text-white">Date</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {date ? new Date(date).toLocaleDateString('en-GB') : 'Select date'}
                                            </span>
                                        </div>
                                    </button>
                                )}
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={() => {
                                    handleSearch()
                                    setShowMobileSearchModal(false)
                                }}
                                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg mt-6"
                            >
                                <span className="material-symbols-outlined">search</span>
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
