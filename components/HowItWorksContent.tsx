'use client'

import { useState } from 'react'
import HowItWorksHero from '@/components/HowItWorksHero'
import GuestProcessSection from '@/components/GuestProcessSection'
import PartnerSection from '@/components/PartnerSection'

interface HowItWorksContentProps {
    initialTab: string
}

export default function HowItWorksContent({ initialTab }: HowItWorksContentProps) {
    const [activeTab, setActiveTab] = useState(initialTab)

    return (
        <>
            <HowItWorksHero activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'guests' ? <GuestProcessSection /> : <PartnerSection />}
        </>
    )
}
