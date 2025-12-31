import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HowItWorksHero from '@/components/HowItWorksHero'
import GuestProcessSection from '@/components/GuestProcessSection'
import PartnerSection from '@/components/PartnerSection'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'

export default function HowItWorksPage() {
    return (
        <>
            <Header />
            <main>
                <HowItWorksHero />
                <GuestProcessSection />
                <PartnerSection />
                <FAQSection />
                <FinalCTASection />
            </main>
            <Footer />
        </>
    )
}