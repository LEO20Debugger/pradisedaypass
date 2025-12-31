import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ResortsSection from '@/components/ResortsSection'
import LocationsSection from '@/components/LocationsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <HowItWorksSection />
                <ResortsSection />
                <LocationsSection />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}