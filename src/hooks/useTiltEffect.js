import { useEffect, useCallback } from 'react'

export function useTiltEffect(selector = '.tilt-card') {
    const handleMouseMove = useCallback((e) => {
        const card = e.currentTarget
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const tiltX = ((x - centerX) / centerX) * 6
        const tiltY = ((centerY - y) / centerY) * 6
        card.style.transform = `perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg) translateZ(10px)`
    }, [])

    const handleMouseLeave = useCallback((e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
    }, [])

    useEffect(() => {
        const cards = document.querySelectorAll(selector)
        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove)
            card.addEventListener('mouseleave', handleMouseLeave)
        })
        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove)
                card.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [selector, handleMouseMove, handleMouseLeave])
}
