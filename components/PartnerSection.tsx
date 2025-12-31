import Image from 'next/image'

export default function PartnerSection() {
    const partnerSteps = [
        {
            number: '1',
            title: 'Application',
            description: 'Fill out a simple form with your property details and amenities available for day use.'
        },
        {
            number: '2',
            title: 'Integration',
            description: 'Our team sets up your dashboard, inventory limits, and dynamic pricing rules.'
        },
        {
            number: '3',
            title: 'Growth',
            description: 'Go live and start welcoming daytime guests. Track revenue and occupancy in real-time.'
        }
    ]

    return (
        <section className="py-24 px-4 md:px-10 lg:px-40 bg-gray-50 dark:bg-[#0d141c] border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">
                        For Hotel & Resort Partners
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6 dark:text-white">
                        Unlock New Revenue Streams
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Monetize your amenities during the day without compromising the experience of your overnight guests.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a2632]">
                    <div className="bg-gray-200 h-64 md:h-auto w-full relative">
                        <Image
                            alt="Hotel lobby reception desk with elegant design"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_1h-CYiBDDAXxAG3cfPdkI6YifMH-28bruJQpD8fdl4Q25rXCT8axUDvnlGrdirp7O1l76dT_QtJb505AkgwTJg133WqPAfMLAw2s_EtyULpiKyVWwloHqh7MIHBTygH_NeAcvMYpXUrHw7RUlFTXGud3YtpOYM87Zwjb4NSV9dh44XGoi3rDePXsWBnziT2ctK9hYuGzMV9f4V2bT5usQS_ab498Oz7JrOtVYBM6oLuXQA0sWjJKBj6pj279Z_Vu6XJkNQwQZhmm"
                            fill
                        />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex flex-col gap-8">
                            {partnerSteps.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold dark:text-white">{step.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <button className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-[#111418] dark:border-white text-[#111418] dark:text-white font-bold hover:bg-[#111418] hover:text-white dark:hover:bg-white dark:hover:text-[#101922] transition-colors">
                                Become a Partner
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}