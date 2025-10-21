import "./Experience.css";

export default function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <h2>Qualification & Experience</h2>
            <div className="experience-container">
                {/* Education Section */}
                <div className="experience-column">
                    <h3 className="column-title">🎓 Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Graduate Diploma in Software Engineering</h4>
                                <p>IJSE - Institute of Software Engineering</p>
                                <span className="timeline-date">2022 - 2023</span>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Diploma in English</h4>
                                <p>ICBT Campus</p>
                                <span className="timeline-date">2021 - 2022</span>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>G.C.E Advanced Level</h4>
                                <p>National Examination, Sri Lanka</p>
                                <span className="timeline-date">2020</span>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>G.C.E Ordinary Level</h4>
                                <p>National Examination, Sri Lanka</p>
                                <span className="timeline-date">2016</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="experience-column">
                    <h3 className="column-title">💼 Work Experience</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Software Engineer Trainee</h4>
                                <p>Ceyentra Technologies</p>
                                <ul>
                                    <li>Developed backend APIs using Spring Boot for SmartTags and Voteme projects.</li>
                                    <li>Collaborated with frontend teams to integrate RESTful services.</li>
                                    <li>Worked with MySQL databases and implemented efficient data queries.</li>
                                    <li>Designed WordPress WebSite for Acespect Australia Building Inspection.</li>
                                </ul>
                                <span className="timeline-date">2024 (6 Months)</span>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h4>Freelance Developer</h4>
                                <p>Remote / Upwork</p>
                                <ul>
                                    <li>Created responsive web apps using React and Node.js.</li>
                                    <li>Built portfolio and client management tools for small businesses.</li>
                                </ul>
                                <span className="timeline-date">2025 - Present</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
