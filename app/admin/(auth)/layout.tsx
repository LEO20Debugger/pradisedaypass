import Link from 'next/link'
import AdminBrand, { AdminFooter } from '@/components/AdminBrand'

export default function AdminAuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white flex flex-col min-h-screen overflow-x-hidden">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-[#2a3441] px-10 py-4 bg-white dark:bg-[#101922]">
                <AdminBrand />
                <div>
                    <Link href="/" className="flex items-center gap-1 text-sm font-medium text-[#617589] dark:text-gray-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                        Back to Main Site
                    </Link>
                </div>
            </header>

            {children}

            <AdminFooter />
        </div>
    )
}
