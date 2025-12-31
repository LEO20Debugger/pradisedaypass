export default function FAQHelpBanner() {
    return (
        <div className="w-full bg-background-light dark:bg-background-dark py-10 px-4">
            <div className="max-w-[960px] mx-auto bg-white dark:bg-[#1a2632] border border-[#dbe0e6] dark:border-gray-700 rounded-2xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 to-primary"></div>

                <h2 className="text-[#111418] dark:text-white text-2xl md:text-3xl font-bold mb-3">
                    Still have questions?
                </h2>
                <p className="text-[#617589] dark:text-gray-300 text-base mb-8 max-w-lg mx-auto">
                    Our luxury concierge team is available 24/7 to assist with your booking and ensure your day pass experience is seamless.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg">
                        <span className="material-symbols-outlined">chat</span>
                        Chat with Concierge
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white dark:bg-transparent border border-[#dbe0e6] dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111418] dark:text-white font-bold py-3 px-6 rounded-lg transition-all">
                        <span className="material-symbols-outlined">mail</span>
                        Email Support
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white dark:bg-transparent border border-[#dbe0e6] dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111418] dark:text-white font-bold py-3 px-6 rounded-lg transition-all">
                        <span className="material-symbols-outlined">call</span>
                        +1 (800) 555-0199
                    </button>
                </div>
            </div>
        </div>
    )
}