import "./Projects.css";
// import project1 from "../../assets/greenshadow.jpg";
// import project2 from "../../assets/lastore.jpg";
// import project3 from "../../assets/chatbot.jpg";

export default function Projects() {
    return (
        <section id="projects" className="section projects-section">
            <h2>My Projects</h2>
            <p className="projects-intro">
                Here are some of the projects I’ve built — combining creativity,
                problem-solving, and modern technology.
            </p>

            <div className="projects-grid">
                <div className="project-card">
                    {/*<img src={project1} alt="Green Shadow - Crop Management System" />*/}
                    <div className="project-content">
                        <h3>Green Shadow</h3>
                        <p>
                            A crop management system built with React, TypeScript, Node.js, and MySQL.
                            Features CRUD operations, dashboards, and RESTful APIs.
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://github.com/yourusername/GreenShadow"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source Code
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    {/*<img src={project2} alt="LAStore - Fitness E-commerce App" />*/}
                    <div className="project-content">
                        <h3>LAStore</h3>
                        <p>
                            A fitness equipment store mobile app developed using React Native and the MERN stack.
                            Includes authentication and product management.
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://github.com/yourusername/LAStore"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source Code
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    {/*<img src={project3} alt="AI Chatbot using Gemini API" />*/}
                    <div className="project-content">
                        <h3>Role-Based AI Chatbot</h3>
                        <p>
                            A React-based chatbot integrated with the Gemini API, Firebase Authentication,
                            and contextual chat history for personalized responses.
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://github.com/yourusername/RoleBasedChatbot"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source Code
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
