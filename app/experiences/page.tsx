import Header from '@/components/Header'
import ExperiencesHero from '@/components/ExperiencesHero'
import ExperiencesContent from '@/components/ExperiencesContent'
import Footer from '@/components/Footer'

export default function Experiences() {
    return (
        <>
            <Header />
            <main>
                <ExperiencesHero />
                <ExperiencesContent />
            </main>
            <Footer />
        </>
    )
}