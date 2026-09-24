import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HowItWorksContent from '@/components/HowItWorksContent'
import FAQSection from '@/components/FAQSection'
import FinalCTASection from '@/components/FinalCTASection'

interface HowItWorksPageProps {
    searchParams: { tab?: string }
}

export default function HowItWorksPage({ searchParams }: HowItWorksPageProps) {
    const initialTab = searchParams.tab === 'partners' ? 'partners' : 'guests'

    return (
        <>
            <Header />
            <main>
                <HowItWorksContent initialTab={initialTab} />
                <FAQSection />
                <FinalCTASection />
            </main>
            <Footer />
        </>
    )
}
