import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FAQHero from '@/components/FAQHero'
import FAQContent from '@/components/FAQContent'
import FAQHelpBanner from '@/components/FAQHelpBanner'

export default function FAQsPage() {
    return (
        <>
            <Header />
            <main>
                <FAQHero />
                <FAQContent />
                <FAQHelpBanner />
            </main>
            <Footer />
        </>
    )
}