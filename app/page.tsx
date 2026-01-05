import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import NewArrivalsSection from '@/components/NewArrivalsSection'
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
                <ResortsSection />
                <NewArrivalsSection />
                <LocationsSection />
                <HowItWorksSection />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}