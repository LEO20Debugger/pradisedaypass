'use client'

import { useState } from 'react'
import ExperiencesHero from '@/components/ExperiencesHero'
import ExperiencesContent from '@/components/ExperiencesContent'

export default function ExperiencesView() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <>
            <ExperiencesHero onSearch={setSearchQuery} initialSearchQuery={searchQuery} />
            <ExperiencesContent searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </>
    )
}
