'use client'

import { useEffect, useRef } from 'react'

interface ModalShellProps {
    onClose: () => void
    /** id of the element that names the dialog (usually its heading) */
    labelledBy: string
    children: React.ReactNode
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'

/** Accessible dialog wrapper: glass panel, Escape to close, focus trap, focus restore and scroll lock */
export default function ModalShell({ onClose, labelledBy, children }: ModalShellProps) {
    const panelRef = useRef<HTMLDivElement>(null)
    const onCloseRef = useRef(onClose)
    onCloseRef.current = onClose

    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement | null
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        // Focus the first field (skipping the close button) so keyboard users land in the form
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)
        const firstField = panelRef.current?.querySelector<HTMLElement>('input') ?? focusables?.[0]
        firstField?.focus()

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseRef.current()
                return
            }
            if (e.key !== 'Tab' || !panelRef.current) return

            const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
            if (items.length === 0) return
            const first = items[0]
            const last = items[items.length - 1]
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault()
                last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault()
                first.focus()
            }
        }

        document.addEventListener('keydown', onKeyDown)
        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = previousOverflow
            previouslyFocused?.focus?.()
        }
    }, [])

    return (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 overflow-y-auto pt-8">
            {/* Dimmed, blurred backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/30 backdrop-blur-md animate-fade-in"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={labelledBy}
                className="glass-strong relative z-10 flex w-full max-w-[400px] sm:max-w-[440px] flex-col overflow-hidden rounded-xl sm:rounded-2xl my-8 mx-auto animate-scale-in"
            >
                <button
                    aria-label="Close dialog"
                    className="group absolute right-3 top-3 sm:right-4 sm:top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-black/5 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white z-20"
                    onClick={onClose}
                >
                    <span className="material-symbols-outlined text-[18px] sm:text-[20px]">close</span>
                </button>

                {children}
            </div>
        </div>
    )
}
