import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import ExperienceDetailsContent from '@/components/ExperienceDetailsContent'
import Footer from '@/components/Footer'
import { getExperience } from '@/lib/experiences'

interface ExperienceDetailsPageProps {
    params: {
        id: string
    }
    searchParams: {
        date?: string
    }
}

export default function ExperienceDetailsPage({ params, searchParams }: ExperienceDetailsPageProps) {
    const experience = getExperience(params.id)
    if (!experience) notFound()

    return (
        <>
            <Header />
            <main>
                <ExperienceDetailsContent experience={experience} initialDate={searchParams.date} />
            </main>
            <Footer />
        </>
    )
}
