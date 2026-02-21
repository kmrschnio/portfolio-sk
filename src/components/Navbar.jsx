import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 50)

            const sections = document.querySelectorAll('.section')
            let current = ''
            sections.forEach(section => {
                if (window.scrollY >= section.offsetTop - 120) {
                    current = section.getAttribute('id')
                }
            })
            setActiveSection(current)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        document.body.style.overflow = ''
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleMenu = () => {
        setMenuOpen(prev => {
            document.body.style.overflow = !prev ? 'hidden' : ''
            return !prev
        })
    }

    const links = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
    ]

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
                    <span className="logo-bracket">&lt;</span>SK<span className="logo-bracket"> /&gt;</span>
                </a>
                <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                    {links.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className={`nav-link nav-link--cta${activeSection === 'contact' ? ' active' : ''}`}
                            onClick={(e) => handleNavClick(e, '#contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <button className={`nav-toggle${menuOpen ? ' active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    )
}
