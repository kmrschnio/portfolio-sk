import { useEffect, useRef } from 'react'

const jobs = [
    {
        role: 'Full Stack Engineer',
        company: 'Alterest',
        location: 'Bangalore / London',
        date: 'May 2023 — Present',
        details: [
            'Leveraged Claude AI and ChatGPT for faster prototyping and automated test generation, improving developer productivity by 20–30%',
            'Built an end-to-end Cypress test suite covering critical features, <strong>reducing QA effort by 40%</strong> and minimizing post-release bugs',
            'Designed a Git-integrated drag-and-drop file management system, improving collaboration efficiency across teams',
            'Developed intelligent search for file metadata and content, <strong>accelerating file retrieval by 50%</strong>',
            'Automated PDF data extraction with Google Document AI, <strong>saving 100+ manual hours monthly</strong>',
            'Leading a platform-wide UI makeover with Radix UI and Tailwind CSS for global clients',
        ],
        tags: ['React', 'Node.js', 'Cypress', 'Tailwind', 'Document AI', 'AWS'],
    },
    {
        role: 'Software Engineer',
        company: 'Quovantis Technologies',
        location: 'Noida, India',
        date: 'Jan 2021 — Apr 2023',
        details: [
            'Spearheaded development of client-facing apps (Claris Health) using Angular, ReactJS, NodeJS, MongoDB, and AWS',
            'Improved system performance by 20% through optimized data handling and frontend load time reduction',
            'Increased unit test coverage to <strong>85% with Jasmine & Jest</strong>, cutting production bugs by 25%',
            'Enhanced user engagement by <strong>30%</strong> through intuitive feature development and responsive design',
            'Built cross-platform features for Mookybets using React, Redux, and React Native',
            'Collaborated directly with clients, improving satisfaction scores by 20%',
        ],
        tags: ['Angular', 'React', 'React Native', 'MongoDB', 'Jest', 'Redux'],
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'Jam Assets Management',
        location: 'Gurgaon, India',
        date: 'Jul 2020 — Sep 2020',
        details: [
            'Built a vehicle inventory management system (MERN stack) that <strong>improved operational efficiency by 25%</strong>',
            'Delivered MVP <strong>2 weeks ahead of schedule</strong>, accelerating product iteration cycles',
            'Designed streamlined vehicle tracking and sales modules for internal teams',
        ],
        tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    },
]

export default function Experience() {
    const timelineRef = useRef(null)

    useEffect(() => {
        const timeline = timelineRef.current
        if (!timeline) return

        const lineOverlay = document.createElement('div')
        lineOverlay.style.cssText = `
      position: absolute; left: 0; top: 0; width: 2px; height: 0%;
      background: linear-gradient(to bottom, #60a5fa, #38bdf8);
      z-index: 1; transition: height 0.1s linear; border-radius: 1px;
      box-shadow: 0 0 8px rgba(96,165,250,0.4);
    `
        timeline.prepend(lineOverlay)

        function updateLine() {
            const rect = timeline.getBoundingClientRect()
            const progress = Math.min(Math.max((window.innerHeight - rect.top) / rect.height, 0), 1)
            lineOverlay.style.height = (progress * 100) + '%'
        }

        window.addEventListener('scroll', updateLine, { passive: true })
        updateLine()
        return () => window.removeEventListener('scroll', updateLine)
    }, [])

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <h2 className="section-title reveal">
                    <span className="section-number">03.</span> Work Experience
                </h2>
                <div className="timeline" ref={timelineRef}>
                    {jobs.map((job, idx) => (
                        <div className="timeline-item reveal-left" key={idx}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-role">{job.role}</h3>
                                        <p className="timeline-company">
                                            {job.company} <span className="timeline-location">— {job.location}</span>
                                        </p>
                                    </div>
                                    <span className="timeline-date">{job.date}</span>
                                </div>
                                <ul className="timeline-details">
                                    {job.details.map((detail, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: detail }} />
                                    ))}
                                </ul>
                                <div className="timeline-tags">
                                    {job.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
