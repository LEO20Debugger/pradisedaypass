export default function FinalCTASection() {
    return (
        <section className="py-20 bg-[#101922] dark:bg-[#05080a] text-white">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                    Ready to experience luxury?
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl">
                    Join thousands of travelers enjoying exclusive access to the best resorts in Turks and Caicos.
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <button className="bg-primary hover:bg-blue-600 text-white font-bold h-12 px-8 rounded-lg transition-colors">
                        Browse Day Passes
                    </button>
                    <button className="bg-transparent border border-gray-600 hover:border-white hover:text-white text-gray-300 font-bold h-12 px-8 rounded-lg transition-colors">
                        Partner With Us
                    </button>
                </div>
            </div>
        </section>
    )
}