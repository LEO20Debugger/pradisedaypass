import Image from 'next/image'

export default function CTASection() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-[1280px] mx-auto bg-black rounded-3xl overflow-hidden relative min-h-[400px] flex items-center">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        alt="Ocean Texture"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqlqQFEDyQW6AXkIebWRc2JKXVYkE0Ajeyk8KwmRs1DJ8EGXt7fwud9Nsb0J52spg045SNmKK1hKz7YQ9ud4BILPZr3ADIhte43CKWYlyOQY44OYp4uTmNBmAndw9wC4xixIL2V4F2zfvLXZg49gRZ16GYth_sOr4iy8rk7YvqnUa5ncG1lyO6b7pwcDeeHMW33qbUpaG0ItxAOo_Xgn5bUoEbg3TDcjd6fDB-wH2_COZ3lfqiPQqrILE7YiBc0mOci23ElYcKEOnI"
                        fill
                    />
                </div>
                <div className="relative z-10 p-10 md:p-20 max-w-2xl">
                    <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
                        Ready for your day in paradise?
                    </h2>
                    <p className="text-white/80 text-lg mb-8">
                        Join thousands of travelers who are upgrading their vacation with Paradise DayPass.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/experiences"
                            className="bg-primary hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg text-center"
                        >
                            Explore Passes
                        </a>
                        <a
                            href="/how-it-works"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg text-center"
                        >
                            How It Works
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}