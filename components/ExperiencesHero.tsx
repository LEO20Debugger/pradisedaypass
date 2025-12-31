export default function ExperiencesHero() {
    return (
        <div className="relative w-full bg-white dark:bg-[#101922] group/design-root overflow-x-hidden">
            <div className="@container">
                <div
                    className="flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 py-20 lg:py-24"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjoLcIRyrwuVF1pLQGmzhef4MtnBkrPkOcfmgGO0tiyTGVGOoq8J2botcTx3O4gyNp1rXUGRh3y7SgGamZlVQW8OTqGMtA2CYbPAphSO0_mxifdiB4CVX3dpWrUQB39R8b_5LCRrUr4hr2YYWho8I2EkYm3vKJCModRQS3DOnmw65svBvWgS328iims6l8kr7PRV6VmHO4JgLQOrbQaQ-hPSEifXEPnJzL7doZIayMpY0EKj9z5jtRSmjNhTjhZ263OCuEXm2QJSxn")`
                    }}
                >
                    <div className="flex flex-col gap-2 text-center max-w-[800px] px-4">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                            Exclusive Resort Day Passes
                        </h1>
                        <h2 className="text-white text-sm sm:text-base md:text-lg font-medium leading-normal drop-shadow-sm opacity-90">
                            Unlock access to the most pristine pools, private beaches, and luxury amenities in Turks and Caicos.
                        </h2>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full max-w-[580px] mt-6 px-4">
                        <div className="flex flex-col sm:flex-row w-full bg-white rounded-lg shadow-xl overflow-hidden">
                            <div className="flex flex-1 items-center px-4 py-3 sm:py-0 sm:h-14">
                                <span className="material-symbols-outlined text-gray-400 mr-3">search</span>
                                <input
                                    className="flex-1 outline-none border-none bg-transparent placeholder:text-[#617589] text-sm font-normal"
                                    placeholder="Search by resort, beach, or experience..."
                                />
                            </div>
                            <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold px-6 py-3 sm:py-0 sm:h-14 transition-colors flex items-center justify-center gap-2">
                                <span className="sm:hidden material-symbols-outlined">search</span>
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}