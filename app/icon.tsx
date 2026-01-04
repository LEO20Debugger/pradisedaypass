import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(90deg, #0066CC 0%, #004499 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                }}
            >
                {/* Deck/Lounge Chair Icon */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 12V10L20 8H17V4C17 2.9 16.1 2 15 2H9C7.9 2 7 2.9 7 4V8H4L2 10V12H4V20C4 21.1 4.9 22 6 22H8C9.1 22 10 21.1 10 20V12H14V20C14 21.1 14.9 22 16 22H18C19.1 22 20 21.1 20 20V12H22ZM9 4H15V8H9V4ZM8 12V20H6V12H8ZM18 20H16V12H18V20Z"
                        fill="#D4AF37"
                    />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    )
}