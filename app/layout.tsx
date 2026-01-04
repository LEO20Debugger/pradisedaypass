import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Paradise DayPass - Luxury Resort Booking',
    description: 'Experience world-class luxury at the finest resorts without the overnight stay. Your exclusive pass to relaxation awaits.',
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/icon?size=32', sizes: '32x32', type: 'image/png' },
            { url: '/icon?size=16', sizes: '16x16', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
        ],
    },
}

export const viewport: Viewport = {
    themeColor: '#0066CC',
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