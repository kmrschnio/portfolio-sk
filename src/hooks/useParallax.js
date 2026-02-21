import { useEffect } from 'react'

export function useHeroParallax() {
    useEffect(() => {
        const hero = document.getElementById('hero')
        const heroContent = hero?.querySelector('.hero-content')
        const scrollIndicator = hero?.querySelector('.scroll-indicator')

        let ticking = false

        function update() {
            if (!heroContent) return
            const scrollY = window.scrollY
            const heroHeight = hero.offsetHeight
            const progress = Math.min(scrollY / heroHeight, 1)
            const eased = 1 - Math.pow(1 - progress, 3)

            heroContent.style.setProperty('--hero-translateY', (eased * 120) + 'px')
            heroContent.style.setProperty('--hero-scale', 1 - eased * 0.08)
            heroContent.style.setProperty('--hero-opacity', Math.max(1 - eased * 1.2, 0))
            heroContent.style.setProperty('--hero-blur', (eased * 8) + 'px')

            if (scrollIndicator) {
                scrollIndicator.style.opacity = Math.max(1 - progress * 4, 0)
            }
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    update()
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        update()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
}

export function useParallaxFloat() {
    useEffect(() => {
        const elements = document.querySelectorAll('.parallax-float')
        if (!elements.length) return

        let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0
        let animId

        function onMouseMove(e) {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 20
            mouseY = (e.clientY / window.innerHeight - 0.5) * 20
        }

        function animate() {
            currentX += (mouseX - currentX) * 0.08
            currentY += (mouseY - currentY) * 0.08
            elements.forEach(el => {
                el.style.transform = `translate(${currentX}px, ${currentY}px)`
            })
            animId = requestAnimationFrame(animate)
        }

        document.addEventListener('mousemove', onMouseMove)
        animId = requestAnimationFrame(animate)

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(animId)
        }
    }, [])
}
