import "./About.css";
// import profilePic from "../../assets/profile.jpg"; // replace with your image

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="about-container">
                <div className="about-image">
                    {/*<img src={profilePic} alt="Sampath Chulaka" />*/}
                </div>

                <div className="about-content">
                    <h2>About Me</h2>
                    <p>
                        Hi! I'm <strong>Sampath Chulaka</strong>, a passionate Software Engineer and Web Developer. I specialize in creating user-friendly, modern web applications using React, Node.js, and Spring Boot. I love solving problems and turning ideas into functional digital solutions.
                    </p>
                    <p>
                        My focus is on writing clean, efficient code and building responsive, accessible interfaces. I enjoy learning new technologies and continuously improving my skills.
                    </p>

                    <div className="skills">
                        <h3>Skills</h3>
                        <ul>
                            <li>React / React Native</li>
                            <li>Node.js / Express</li>
                            <li>Java / Spring Boot</li>
                            <li>HTML, CSS, JavaScript, TypeScript</li>
                            <li>MySQL / MongoDB</li>
                            <li>Git / GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
