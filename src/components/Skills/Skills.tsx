import "./Skills.css";

export default function Skills() {
    return (
        <section id="skills" className="section skills-section">
            <h2>My Skills</h2>
            <p className="skills-intro">
                Here are some of the technologies and tools I’ve mastered through hands-on projects and experience.
            </p>

            <div className="skills-container">
                <div className="skill">
                    <h3>Frontend Development</h3>
                    <div className="skill-bar">
                        <div className="skill-fill" style={{ width: "90%" }}></div>
                    </div>
                    <p>React, TypeScript, HTML, CSS, JavaScript</p>
                </div>

                <div className="skill">
                    <h3>Backend Development</h3>
                    <div className="skill-bar">
                        <div className="skill-fill" style={{ width: "85%" }}></div>
                    </div>
                    <p>Node.js, Express, Java, Spring Boot</p>
                </div>

                <div className="skill">
                    <h3>Database Management</h3>
                    <div className="skill-bar">
                        <div className="skill-fill" style={{ width: "80%" }}></div>
                    </div>
                    <p>MySQL, MongoDB</p>
                </div>

                <div className="skill">
                    <h3>Mobile App Development</h3>
                    <div className="skill-bar">
                        <div className="skill-fill" style={{ width: "75%" }}></div>
                    </div>
                    <p>React Native</p>
                </div>

                <div className="skill">
                    <h3>Version Control</h3>
                    <div className="skill-bar">
                        <div className="skill-fill" style={{ width: "95%" }}></div>
                    </div>
                    <p>Git, GitHub</p>
                </div>

                <div className="skill">
                    <h3>Cloud & Deployment</h3>
                    <div className="skill-bar">
                        <div className="skill-fill" style={{ width: "70%" }}></div>
                    </div>
                    <p>Firebase, AWS S3</p>
                </div>
            </div>
        </section>
    );
}
