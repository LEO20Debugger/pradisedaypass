import Header from '@/components/Header'
import ExperienceDetailsContent from '@/components/ExperienceDetailsContent'
import Footer from '@/components/Footer'

interface ExperienceDetailsPageProps {
    params: {
        id: string
    }
}

export default function ExperienceDetailsPage({ params }: ExperienceDetailsPageProps) {
    return (
        <>
            <Header />
            <main>
                <ExperienceDetailsContent experienceId={params.id} />
            </main>
            <Footer />
        </>
    )
}