import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Paradise DayPass - Luxury Resort Booking',
    description: 'Experience world-class luxury at the finest resorts without the overnight stay. Your exclusive pass to relaxation awaits.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="light">
            <body className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden antialiased">
                {children}
            </body>
        </html>
    )
}