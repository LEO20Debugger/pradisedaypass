import Image from 'next/image'

export default function AboutContent() {
    const features = [
        {
            icon: 'location_on',
            title: 'TCI-Based Experts',
            description: 'Headquartered locally, we know every resort personally. We don\'t just list places; we curate experiences we\'ve lived ourselves.'
        },
        {
            icon: 'lock',
            title: 'Secure Booking',
            description: 'Bank-level encryption ensures your data is always safe. Book with confidence knowing your transaction is protected.'
        },
        {
            icon: 'support_agent',
            title: '24/7 Concierge',
            description: 'Real humans ready to assist you anytime, anywhere. From booking changes to special requests, we are here for you.'
        }
    ]

    const stats = [
        { number: '50+', label: 'Resort Partners' },
        { number: '10k+', label: 'Passes Booked' },
        { number: '4.9', label: 'User Rating' },
        { number: '100%', label: 'Local Owned' }
    ]

    return (
        <div className="layout-container flex flex-col items-center w-full">
            <div className="layout-content-container flex flex-col max-w-[1120px] w-full px-5 md:px-10 py-16 gap-20">
                {/* Origin Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        <Image
                            alt="Couple relaxing on white lounge chairs near infinity pool"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvt0mOf8ThhMkbjPlMV5AMj4-AdopwxK4jxcLqfSanrdlLbxMkjA-g3UAsjofg2vcbuEdrxn7qsUwg4MHjuPaZQ3_SpFcqUad_0Ofo36toP4sB2AHhFTAXSLz93kE9xyw6z-MK2d8AjlnZBr9yl6u5y3z2rGT5cW-gnS1_WteqB05I9k40tElNWx-7HHAFymOjm_fbwhu5QzqGVPWKdBA0uaYCa6lsFreQdW3Hhw-LzNAR_WNCQZDPM2SMQXIIClKFs_UYd6_Th0Wz"
                            fill
                        />
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl z-0"></div>
                    </div>

                    <div className="flex flex-col gap-6 justify-center">
                        <div className="flex flex-col gap-3 text-left">
                            <span className="text-primary font-bold tracking-wider uppercase text-xs">The Beginning</span>
                            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.02em]">
                                The Origin Story
                            </h2>
                            <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                                Paradise DayPass was created to redefine the resort day experience in Turks and Caicos. For discerning travelers and locals alike, we offer seamless access to the islands' most exquisite resorts — no overnight stay required.
                            </p>
                            <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                                Our platform showcases premium day-pass experiences, including beach and pool access, signature spa treatments, gourmet dining, and curated activities. Every experience is designed to deliver elegance, comfort, and unforgettable moments of indulgence.
                            </p>
                            <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                                Paradise DayPass is committed to elevating tourism, supporting world-class resorts, and connecting guests with the very best the islands have to offer — turning a single day into an extraordinary escape.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6 justify-center order-2 md:order-1">
                        <div className="flex flex-col gap-3 text-left">
                            <span className="text-primary font-bold tracking-wider uppercase text-xs">Our Purpose</span>
                            <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-[-0.02em]">
                                Our Mission
                            </h2>
                            <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                                At Paradise DayPass, our mission is to provide unparalleled access to the finest resort experiences in Turks and Caicos. We offer a seamless, secure platform where guests can effortlessly book exclusive day-pass experiences — from pristine beaches and private pools to indulgent spa treatments and gourmet dining.
                            </p>
                            <p className="text-[#617589] dark:text-gray-300 text-base leading-relaxed">
                                Our goal is to create unforgettable moments of relaxation and luxury while supporting the island's premier resorts and elevating their visibility and revenue.
                            </p>
                        </div>

                        <div className="pt-2">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full overflow-hidden">
                                    <Image
                                        alt="Founder headshot smiling professional"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWIuV_V42l34G2f0LlHdtbkHrG_ms_VH6hQbmq49rwOAqmbPT6Asr4goivIMopvBxcKELM_F4QizIm-27hvcENbDzT3dnukCnJMrU-PtNDUvCZanJYbV_MmOR3IM3IRjZcmx3Yh9pZfXoj80OSwAeFEn-Bsmc7Lr2auqv7007ktelQqkrcHIcV5Ilw_hHQxZuvwBaDwctRqHKcpUXRvpzKmw31M-ze-jJNp3aVLgx1MXuJUFPA2EpqpXobSEo9RL7z53f6dQUKhDYI"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#111418] dark:text-white">James Sterling</p>
                                    <p className="text-xs text-primary">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 group">
                        <Image
                            alt="Hand holding a cocktail with tropical beach background"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6A4i5QmMKwjh2A3lwb06be2xUFnKX881hWg4fPO_x0ko8ulzVg1GQO_GCTGWNm9Nd1e6rTqvHabnjFkuIBUs9crBxtjoECekefp8rvoGO2lGVXQmQc_hnK3gNUzaDLa3IEIFgI4QaerKAUfiAy4F-4O_hQwaPL3chf7xyNHjkpuU2zliJV2ofvOxIXl_VIBsJI6eo66zAcM4QUzV-_A6__Zv2lMR4TyNRowSvuGWH5NSBxJB-o8PWlTj3PS0ZDwNCwa2ttl5vVWr"
                            fill
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="flex flex-col gap-10 py-10">
                    <div className="text-center max-w-[720px] mx-auto">
                        <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                            Why Travelers Trust Us
                        </h2>
                        <p className="text-[#617589] dark:text-gray-400 text-lg">
                            We bring professionalism and authenticity to every booking, ensuring your day in paradise is worry-free.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#1a232e] p-6 hover:shadow-lg transition-shadow duration-300 group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <span className="material-symbols-outlined">{feature.icon}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#111418] dark:text-white text-xl font-bold">{feature.title}</h3>
                                    <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="w-full bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-200 dark:divide-gray-700">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <span className="text-3xl md:text-4xl font-black text-primary">{stat.number}</span>
                                <span className="text-sm font-medium text-[#617589] dark:text-gray-400 uppercase tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}