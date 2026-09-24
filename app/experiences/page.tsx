import { Suspense } from 'react'
import Header from '@/components/Header'
import ExperiencesView from '@/components/ExperiencesView'
import Footer from '@/components/Footer'

export default function Experiences() {
    return (
        <>
            <Header />
            <main>
                {/* ExperiencesHero/ExperiencesContent read useSearchParams, which needs a Suspense boundary */}
                <Suspense>
                    <ExperiencesView />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}
