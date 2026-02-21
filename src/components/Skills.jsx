import { useEffect } from 'react'

const skillCategories = [
    {
        icon: 'fas fa-laptop-code',
        title: 'Frontend',
        tags: ['ReactJS', 'Angular', 'React Native', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Radix UI'],
    },
    {
        icon: 'fas fa-server',
        title: 'Backend',
        tags: ['Node.js', 'NestJS', 'MeteorJS', 'RESTful APIs', 'JavaScript'],
    },
    {
        icon: 'fas fa-database',
        title: 'Database & DevOps',
        tags: ['MongoDB', 'AWS', 'Git', 'Cypress', 'Jest', 'Jasmine'],
    },
    {
        icon: 'fas fa-robot',
        title: 'AI & Productivity',
        tags: ['Claude AI', 'ChatGPT', 'GitHub Copilot', 'Google Document AI', 'Agile / Scrum'],
    },
]

export default function Skills() {
    useEffect(() => {
        const categories = document.querySelectorAll('.skill-category')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const tags = entry.target.querySelectorAll('.skill-tag')
                        tags.forEach((tag, i) => {
                            tag.style.opacity = '0'
                            tag.style.transform = 'translateY(10px) scale(0.9)'
                            tag.style.transition = `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s`
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    tag.style.opacity = '1'
                                    tag.style.transform = 'translateY(0) scale(1)'
                                })
                            })
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.3 }
        )
        categories.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <h2 className="section-title reveal">
                    <span className="section-number">02.</span> Technical Skills
                </h2>
                <div className="skills-grid">
                    {skillCategories.map((cat) => (
                        <div className="skill-category reveal-scale" key={cat.title}>
                            <div className="skill-category-header">
                                <i className={cat.icon}></i>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.tags.map(tag => (
                                    <span className="skill-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
