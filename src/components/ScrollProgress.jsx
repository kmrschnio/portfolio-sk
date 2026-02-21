import { useState, useEffect } from 'react'

export default function ScrollProgress() {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        let ticking = false
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight
                    setWidth((scrollTop / docHeight) * 100)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return <div className="scroll-progress" style={{ width: `${width}%` }} />
}
