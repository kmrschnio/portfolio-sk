export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <a href="#hero" className="footer-logo" onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
                    }}>
                        <span className="logo-bracket">&lt;</span>SK<span className="logo-bracket"> /&gt;</span>
                    </a>
                    <p className="footer-text">Designed & Built by Sachin Kumar</p>
                    <div className="footer-socials">
                        <a href="https://www.linkedin.com/in/sk5072/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/sk5072" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="mailto:kmrschn.io@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <p className="footer-copyright">&copy; 2025 Sachin Kumar. All rights reserved.</p>
            </div>
        </footer>
    )
}
