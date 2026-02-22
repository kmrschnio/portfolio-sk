import { useState } from 'react'

export default function Contact() {
    const [sending, setSending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.formName.value
        const email = form.formEmail.value
        const message = form.formMessage.value

        const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
        window.location.href = `mailto:kmrschn.io@gmail.com?subject=${subject}&body=${body}`

        setSending(true)
        setTimeout(() => {
            setSending(false)
            form.reset()
        }, 3000)
    }

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title">
                    <span className="section-number">06.</span> Get In Touch
                </h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <p className="contact-subtitle">
                            I'm currently open to new opportunities and always happy to connect. Whether you have
                            a project in mind, a question, or just want to say hi — my inbox is always open!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:kmrschn.io@gmail.com">kmrschn.io@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>+91 82858 68888</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Gurgaon, India</span>
                            </div>
                        </div>
                        <div className="contact-socials">
                            <a href="https://www.linkedin.com/in/sk5072/" target="_blank" rel="noopener noreferrer" className="social-link-lg">
                                <i className="fab fa-linkedin-in"></i><span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/sk5072" target="_blank" rel="noopener noreferrer" className="social-link-lg">
                                <i className="fab fa-github"></i><span>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="formName" id="formName" placeholder="Your Name" required />
                            <label htmlFor="formName">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" name="formEmail" id="formEmail" placeholder="Your Email" required />
                            <label htmlFor="formEmail">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea name="formMessage" id="formMessage" placeholder="Your Message" rows="5" required></textarea>
                            <label htmlFor="formMessage">Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
                            {sending ? (
                                <><i className="fas fa-check"></i> Opening Email Client...</>
                            ) : (
                                <><i className="fas fa-paper-plane"></i> Send Message</>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
