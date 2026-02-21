export default function Education() {
    return (
        <section className="section education" id="education">
            <div className="container">
                <h2 className="section-title reveal">
                    <span className="section-number">05.</span> Education
                </h2>
                <div className="education-grid">
                    <div className="education-card reveal-left">
                        <div className="education-icon"><i className="fas fa-graduation-cap"></i></div>
                        <h3>Master of Computer Applications</h3>
                        <p className="education-institution">Jawaharlal Nehru University, Delhi</p>
                        <span className="education-year">2018 — 2021</span>
                    </div>
                    <div className="education-card reveal-right">
                        <div className="education-icon"><i className="fas fa-user-graduate"></i></div>
                        <h3>B.Sc. Physical Sciences (Computer Science)</h3>
                        <p className="education-institution">Hansraj College, University of Delhi</p>
                        <span className="education-year">2014 — 2017</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
