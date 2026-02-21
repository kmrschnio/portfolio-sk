import { useEffect } from 'react'

export function useScrollReveal() {
    useEffect(() => {
        const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .section-title'
        const elements = document.querySelectorAll(selectors)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        )

        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}

export function useCounterAnimation(ref) {
    useEffect(() => {
        if (!ref.current) return
        const elements = ref.current.querySelectorAll('.stat-number[data-count]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target
                        const countTo = parseInt(target.getAttribute('data-count'))
                        const startTime = performance.now()
                        const duration = 1800

                        function animate(now) {
                            const elapsed = now - startTime
                            const progress = Math.min(elapsed / duration, 1)
                            const eased = 1 - Math.pow(2, -10 * progress)
                            target.textContent = Math.floor(eased * countTo)
                            if (progress < 1) requestAnimationFrame(animate)
                            else target.textContent = countTo
                        }

                        requestAnimationFrame(animate)
                        observer.unobserve(target)
                    }
                })
            },
            { threshold: 0.5 }
        )

        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [ref])
}
