export default function Footer() {
    const footerSections = [
        {
            title: 'Discover',
            links: [
                { name: 'Resorts', href: '/experiences' },
                { name: 'Destinations', href: '/experiences' },
                { name: 'Collections', href: '/experiences' },
                { name: 'New Arrivals', href: '/experiences' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/about' },
                { name: 'Careers', href: '#' },
                { name: 'Partner with Us', href: '#' },
                { name: 'Press', href: '#' }
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', href: '/faqs' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Contact Us', href: '/contact' }
            ]
        }
    ]

    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 px-4">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-luxury-gold text-2xl">deck</span>
                            <h3 className="text-lg font-bold">Paradise DayPass</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            The premier booking platform for day cations in Turks and Caicos. Experience luxury without the room key.
                        </p>
                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold mb-4">{section.title}</h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a className="hover:text-luxury-gold transition-colors" href={link.href}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© 2025 Paradise DayPass. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                            </svg>
                        </a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378a6.575 6.575 0 00-6.556 6.573 6.575 6.575 0 006.556 6.574 6.575 6.575 0 006.556-6.574 6.575 6.575 0 00-6.556-6.573zm0 3.246a3.333 3.333 0 013.328 3.327 3.333 3.333 0 01-3.328 3.328 3.333 3.333 0 01-3.328-3.328 3.333 3.333 0 013.328-3.328zm5.858-3.41a1.218 1.218 0 11-2.436 0 1.218 1.218 0 012.436 0z" fillRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}