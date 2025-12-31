import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import AboutContent from '@/components/AboutContent'
import AboutCTA from '@/components/AboutCTA'

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <AboutHero />
                <AboutContent />
                <AboutCTA />
            </main>
            <Footer />
        </>
    )
}