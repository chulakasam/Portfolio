// import "./Home.css";
//
// export default function Home() {
//     return (
//         <section id="home" className="home-section">
//             <div className="home-container">
//                 <div className="home-image">
//                     <img
//                         src="https://via.placeholder.com/300x300.png?text=Your+Photo"
//                         alt="Profile"
//                     />
//                 </div>
//                 <div className="home-content">
//                     <h1 className="home-title">
//                         Hi, I'm <span>Chulaka Sampath</span>
//                     </h1>
//                     <h2 className="home-subtitle">Software Engineer & Web Developer</h2>
//                     <p className="home-description">
//                         I design and develop modern, user-friendly web applications using
//                         technologies like React, Node.js, and Spring Boot. Passionate about
//                         creating clean, efficient, and impactful digital experiences.
//                     </p>
//
//                     <div className="home-buttons">
//                         <a href="#contact" className="btn primary-btn">
//                             Hire Me
//                         </a>
//                         <a href="#projects" className="btn secondary-btn">
//                             View Projects
//                         </a>
//                     </div>
//                 </div>
//
//
//             </div>
//         </section>
//     );
// }

import "./Home.css";
import ThreeBackground from "./ThreeBackground.tsx";

export default function Home() {
    return (
        <section id="home" className="home-section">
            {/* 3D Animated Background */}
            <ThreeBackground />

            <div className="home-container">
                <div className="home-image">
                    <img
                        src="src/assets/my_image_2.png"
                        alt="Profile"
                    />
                </div>

                <div className="home-content">
                    <h1 className="home-title">
                        Hi, I'm <span>Chulaka Sampath</span>
                    </h1>
                    <h2 className="home-subtitle">Software Engineer & Web Developer</h2>
                    <p className="home-description">
                        I design and develop modern, user-friendly web applications using
                        technologies like React, Node.js, and Spring Boot. Passionate about
                        creating clean, efficient, and impactful digital experiences.
                    </p>

                    <div className="home-buttons">
                        <a href="#contact" className="btn primary-btn">
                            Hire Me
                        </a>
                        <a href="#projects" className="btn secondary-btn">
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

