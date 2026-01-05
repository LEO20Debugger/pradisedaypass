'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HowItWorksHero from '@/components/HowItWorksHero'
import GuestProcessSection from '@/components/GuestProcessSection'
import PartnerSection from '@/components/PartnerSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'

export default function HowItWorksPage() {
    const [activeTab, setActiveTab] = useState('guests')

    return (
        <>
            <Header />
            <main>
                <HowItWorksHero activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === 'guests' ? <GuestProcessSection /> : <PartnerSection />}
                <FAQSection />
                <FinalCTASection />
            </main>
            <Footer />
        </>
    )
}