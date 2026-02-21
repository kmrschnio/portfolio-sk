import { useTiltEffect } from '../hooks/useTiltEffect'

const projects = [
    {
        icon: 'fas fa-heartbeat',
        badge: 'Enterprise',
        name: 'Claris Health',
        desc: 'Enterprise health-tech platform for clinical data management. Built client-facing applications with Angular, React, and Node.js, serving healthcare providers with robust data processing capabilities.',
        stack: ['Angular', 'React', 'Node.js', 'MongoDB', 'AWS'],
        period: 'Jan 2022 — Jan 2023',
    },
    {
        icon: 'fas fa-futbol',
        badge: 'Cross-Platform',
        name: 'Mookybets',
        desc: 'Cross-platform sports betting application with real-time data feeds. Built seamless web and mobile experiences using React, Redux, and React Native that improved usability and engagement.',
        stack: ['React', 'Redux', 'React Native', 'Node.js'],
        period: 'Sep 2021 — Nov 2021',
    },
    {
        icon: 'fas fa-flask',
        badge: 'Health-Tech',
        name: 'Truvian Health',
        desc: 'Health diagnostics platform enabling rapid blood testing and analysis. Contributed to frontend development and data visualization modules for laboratory workflows.',
        stack: ['React', 'Node.js', 'MongoDB'],
        period: 'Jun 2021 — Sep 2021',
    },
    {
        icon: 'fas fa-motorcycle',
        name: 'DupahiyaDekho.com',
        github: 'https://github.com/sk5072/DupahiyaDekho.com',
        desc: 'Second-hand bike buy/sell portal with user registration, email verification, bike listing, mobile authentication via Nexmo, and city/price-based filtering — a complete MERN stack app.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
        period: 'May 2020 — Aug 2020',
    },
    {
        icon: 'fas fa-university',
        badge: 'Academic',
        name: '3-Tier Banking System',
        desc: 'A banking application with live mobile and email authentication to reduce fraud. Uses Java RMI to achieve 3-tier architecture (client → server → database) for secure transactions.',
        stack: ['Java', 'RMI', 'Java Swing', 'MySQL'],
        period: 'Sep 2019 — Nov 2019',
    },
]

export default function Projects() {
    useTiltEffect('.tilt-card')

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title reveal">
                    <span className="section-number">04.</span> Featured Projects
                </h2>
                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div className="project-card reveal-scale tilt-card" key={idx}>
                            <div className="project-card-top">
                                <div className="project-icon"><i className={project.icon}></i></div>
                                <div className="project-links">
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    ) : project.badge ? (
                                        <span className="project-badge">{project.badge}</span>
                                    ) : null}
                                </div>
                            </div>
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-desc">{project.desc}</p>
                            <div className="project-stack">
                                {project.stack.map(s => <span key={s}>{s}</span>)}
                            </div>
                            <span className="project-period">{project.period}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
