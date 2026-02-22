import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAPScrollAnimations() {
    useEffect(() => {
        const ctx = gsap.context(() => {

            // ── Hero parallax fade-out on scroll ──────────
            gsap.to('.hero-content', {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.5,
                },
                y: 150,
                scale: 0.9,
                opacity: 0,
                filter: 'blur(10px)',
                ease: 'none',
            })

            gsap.to('.hero-bg-effects', {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.3,
                },
                y: 80,
                scale: 1.1,
                ease: 'none',
            })

            // ── Section titles — slide in from left with line wipe ──
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 85%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                    x: -80,
                    opacity: 0,
                    filter: 'blur(6px)',
                    ease: 'power3.out',
                })
            })

            // ── About section — text paragraphs stagger in ──
            gsap.utils.toArray('.about-text p').forEach((p, i) => {
                gsap.from(p, {
                    scrollTrigger: {
                        trigger: p,
                        start: 'top 88%',
                        end: 'top 65%',
                        scrub: 1,
                    },
                    y: 50,
                    opacity: 0,
                    filter: 'blur(4px)',
                    delay: i * 0.1,
                    ease: 'power2.out',
                })
            })

            // ── Stat cards — scale up with rotation ──
            gsap.utils.toArray('.stat-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        end: 'top 65%',
                        scrub: 1,
                    },
                    scale: 0.7,
                    opacity: 0,
                    rotateY: 15,
                    filter: 'blur(4px)',
                    delay: i * 0.05,
                    ease: 'back.out(1.7)',
                })
            })

            // ── Skill categories — alternate left/right entrance ──
            gsap.utils.toArray('.skill-category').forEach((cat, i) => {
                gsap.from(cat, {
                    scrollTrigger: {
                        trigger: cat,
                        start: 'top 88%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                    x: i % 2 === 0 ? -80 : 80,
                    y: 40,
                    opacity: 0,
                    scale: 0.9,
                    filter: 'blur(6px)',
                    ease: 'power3.out',
                })
            })

            // ── Timeline items — slide in from left with stagger ──
            gsap.utils.toArray('.timeline-item').forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'top 55%',
                        scrub: 1,
                    },
                    x: -100,
                    opacity: 0,
                    scale: 0.95,
                    filter: 'blur(6px)',
                    ease: 'power3.out',
                })

                // Animate the timeline marker with a pop
                const marker = item.querySelector('.timeline-marker')
                if (marker) {
                    gsap.from(marker, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 80%',
                            end: 'top 65%',
                            scrub: 1,
                        },
                        scale: 0,
                        ease: 'elastic.out(1, 0.5)',
                    })
                }
            })

            // ── Project cards — 3D flip/scale entrance ──
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                    y: 80,
                    opacity: 0,
                    scale: 0.8,
                    rotateX: 10,
                    filter: 'blur(8px)',
                    delay: i * 0.05,
                    ease: 'power3.out',
                    transformPerspective: 1000,
                })
            })

            // ── Education cards — rise with subtle rotation ──
            gsap.utils.toArray('.education-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 88%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                    y: 60,
                    opacity: 0,
                    rotateZ: i === 0 ? -3 : 3,
                    scale: 0.9,
                    filter: 'blur(4px)',
                    ease: 'power2.out',
                })
            })

            // ── Contact section — info and form slide in from sides ──
            const contactInfo = document.querySelector('.contact-info')
            if (contactInfo) {
                gsap.from(contactInfo, {
                    scrollTrigger: {
                        trigger: '.contact-grid',
                        start: 'top 85%',
                        end: 'top 55%',
                        scrub: 1,
                    },
                    x: -100,
                    opacity: 0,
                    filter: 'blur(6px)',
                    ease: 'power3.out',
                })
            }

            const contactForm = document.querySelector('.contact-form')
            if (contactForm) {
                gsap.from(contactForm, {
                    scrollTrigger: {
                        trigger: '.contact-grid',
                        start: 'top 85%',
                        end: 'top 55%',
                        scrub: 1,
                    },
                    x: 100,
                    opacity: 0,
                    filter: 'blur(6px)',
                    ease: 'power3.out',
                })
            }

            // ── Parallax background orbs — move slower than scroll ──
            gsap.utils.toArray('.section').forEach(section => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.5,
                    },
                    '--section-progress': 1,
                    ease: 'none',
                })
            })

            // ── Footer — gentle rise ──
            gsap.from('.footer-content', {
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 90%',
                    end: 'top 70%',
                    scrub: 1,
                },
                y: 30,
                opacity: 0,
                ease: 'power2.out',
            })

        })

        return () => ctx.revert()
    }, [])
}
