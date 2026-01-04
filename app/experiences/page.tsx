'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ExperiencesHero from '@/components/ExperiencesHero'
import ExperiencesContent from '@/components/ExperiencesContent'
import Footer from '@/components/Footer'

export default function Experiences() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    const handleContentSearchChange = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <>
            <Header />
            <main>
                <ExperiencesHero onSearch={handleSearch} initialSearchQuery={searchQuery} />
                <ExperiencesContent searchQuery={searchQuery} onSearchChange={handleContentSearchChange} />
            </main>
            <Footer />
        </>
    )
}