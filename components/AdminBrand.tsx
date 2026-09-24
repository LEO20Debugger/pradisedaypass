/** Logo + "Admin Dashboard" label used in every admin header */
export default function AdminBrand() {
    return (
        <div className="flex items-center gap-4">
            <div className="size-8 text-primary">
                <span className="material-symbols-outlined text-luxury-gold text-3xl">deck</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                    Paradise DayPass
                </h2>
                <span className="text-xs font-medium text-luxury-gold uppercase tracking-widest">
                    Admin Dashboard
                </span>
            </div>
        </div>
    )
}

export function AdminFooter() {
    return (
        <footer className="py-6 text-center bg-transparent">
            <p className="text-xs text-[#617589] dark:text-gray-400">
                © {new Date().getFullYear()} Paradise DayPass. Administrative Access Only.
            </p>
        </footer>
    )
}
