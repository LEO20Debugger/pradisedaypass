'use client'

import { useEffect, useRef, useState } from 'react'

interface RevealProps {
    children: React.ReactNode
    /** Delay in ms, handy for staggering items in a row */
    delay?: number
    className?: string
}

/** Fades and lifts its children into view the first time they scroll on screen */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            data-visible={visible}
            style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
        >
            {children}
        </div>
    )
}
