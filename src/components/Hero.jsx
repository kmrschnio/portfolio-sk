import { useTypingEffect } from '../hooks/useTypingEffect'

const phrases = [
    'scalable web apps.',
    'modern UI experiences.',
    'full-stack solutions.',
    'AI-powered tools.',
    'delightful products.'
]

export default function Hero() {
    const typedText = useTypingEffect(phrases)

    return (
        <section className="hero" id="hero">
            <div className="hero-bg-effects">
                <div className="hero-orb hero-orb--1"></div>
                <div className="hero-orb hero-orb--2"></div>
                <div className="hero-orb hero-orb--3"></div>
                <div className="hero-grid"></div>
            </div>
            <div className="container hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hey there, I'm</p>
                    <h1 className="hero-name">Sachin Kumar</h1>
                    <div className="hero-title-wrapper">
                        <span className="hero-title-prefix">I build</span>
                        <span className="hero-title-typed">{typedText}</span>
                        <span className="hero-cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Full-Stack Software Engineer with 4+ years of experience crafting scalable,
                        high-performance web applications. Passionate about modern UI, automation,
                        and delivering seamless user experiences.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                        }}>
                            <i className="fas fa-paper-plane"></i> Get In Touch
                        </a>
                        <a href="/Sachin_kumar_resume.pdf" download className="btn btn-outline">
                            <i className="fas fa-download"></i> Download Resume
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href="https://www.linkedin.com/in/sk5072/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/sk5072" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:kmrschn.io@gmail.com" className="social-link" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-card">
                        <div className="hero-card-header">
                            <span className="dot dot--red"></span>
                            <span className="dot dot--yellow"></span>
                            <span className="dot dot--green"></span>
                        </div>
                        <pre className="hero-code"><code dangerouslySetInnerHTML={{
                            __html: `<span class="code-keyword">const</span> <span class="code-var">sachin</span> = {
  <span class="code-key">role</span>: <span class="code-string">"Full-Stack Engineer"</span>,
  <span class="code-key">experience</span>: <span class="code-string">"4+ years"</span>,
  <span class="code-key">stack</span>: [<span class="code-string">"React"</span>, <span class="code-string">"Node.js"</span>,
          <span class="code-string">"TypeScript"</span>, <span class="code-string">"MongoDB"</span>],
  <span class="code-key">passion</span>: <span class="code-string">"Building things that matter"</span>,
  <span class="code-key">available</span>: <span class="code-bool">true</span>
};` }} /></pre>
                    </div>
                </div>
            </div>
            <a href="#about" className="scroll-indicator" aria-label="Scroll down" onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}>
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
            </a>
        </section>
    )
}
