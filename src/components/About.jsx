import { useRef } from 'react'
import { useCounterAnimation } from '../hooks/useScrollReveal'

export default function About() {
    const statsRef = useRef(null)
    useCounterAnimation(statsRef)

    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title reveal">
                    <span className="section-number">01.</span> About Me
                </h2>
                <div className="about-grid">
                    <div className="about-text reveal-left">
                        <p>
                            I'm a <strong>Full-Stack Software Engineer</strong> based in Gurgaon, India, with a deep passion
                            for building digital products that are both technically robust and delightful to use.
                        </p>
                        <p>
                            Over the past 4+ years, I've worked on everything from enterprise health-tech platforms to
                            AI-powered document processing pipelines. I specialize in <strong>React, Node.js, and MongoDB</strong>,
                            and I'm always exploring new ways to leverage AI tools like Claude and GitHub Copilot to
                            boost developer productivity.
                        </p>
                        <p>
                            Currently at <strong>Alterest</strong>, I'm leading a platform-wide UI makeover with Radix UI
                            and Tailwind CSS, building end-to-end test suites with Cypress, and automating PDF extraction
                            with Google Document AI — saving 100+ manual hours monthly.
                        </p>
                        <p>
                            When I'm not coding, you'll find me solving problems on HackerRank, painting, reading novels,
                            or playing badminton.
                        </p>
                    </div>
                    <div className="about-stats reveal-right" ref={statsRef}>
                        <div className="stat-card">
                            <span className="stat-number" data-count="4">0</span><span className="stat-plus">+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number" data-count="5">0</span><span className="stat-plus">+</span>
                            <span className="stat-label">Major Projects</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number" data-count="3">0</span>
                            <span className="stat-label">Companies</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number" data-count="9">0</span><span className="stat-plus">+</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
